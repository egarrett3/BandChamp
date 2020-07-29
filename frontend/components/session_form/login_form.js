import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.currentTarget.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    showErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) =>
                    <li key={`error number ${idx}`}>
                        {error}
                    </li>
                )}
            </ul>
        )
    }


    render() {
        if (!this.props.currentUser) {
            <Redirect to='/' />
        }
        return (
            <div id="pageBody">
                <div class="login-container">
                <h3 class="login-header">Log In</h3>
                    <div class="divider"></div>
                    
                    <article class='login-form-container'>
                        <form onSubmit={this.handleSubmit}>
                            
                            <div class='login-username'> 
                                <label for='username-field'>Username / Email</label>
                                        <input type="text"
                                        id='username-field'
                                        value={this.state.username}
                                        name="username"
                                        onChange={this.handleChange}
                                        />
                                    {this.showErrors()} 
                            </div>

                            <div class='login-password'> 
                                <label for='password-field'>Password</label>
                                        <input type="password"
                                        id='password-field'
                                        value={this.state.password}
                                        name="password"
                                        onChange={this.handleChange}
                                        />
                                    {this.showErrors()} 
                            </div>

                            <div class='login-button'>
                                <button type='submit'>Log in</button>
                            </div>

                            <footer id='login-footer'>
                                <h6 id='switch-text'>Don't have an account? sign up as a {this.props.LinkTo}</h6>
                            </footer>
                        </form>
                    </article>

                </div>
            </div>
        );
    }

}

export default LoginForm;