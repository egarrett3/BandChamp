import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "--username--",
            password: "--password--"
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
            <div class="login-container">
              <h3 class="login-header">Log In</h3>
                <div class="divider"></div>
                
                <article class='login-form-container'>
                    <form onSubmit={this.handleSubmit}>
                        
                        {this.showErrors()} 
                        <div class='login-username'>
                            <label>Username:
                                    <input type="text"
                                    value={this.state.username}
                                    name="username"
                                    onChange={this.handleChange}
                                    />
                            </label>
                        </div>

                        <div class='login-password'>
                            <label>Password:
                                    <input type="password"
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.handleChange}
                                    />
                            </label>
                        </div>

                        <div class='login-button'>
                            <button>{this.props.formType}</button>
                        </div>

                        <footer id='login-footer'>
                            <h6>Don't have an account? sign up as a {this.props.LinkTo}</h6>
                        </footer>
                    </form>
                </article>

            </div>
        );
    }

}

export default LoginForm;