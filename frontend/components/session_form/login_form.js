import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { $CombinedState } from 'redux';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.baseState = this.state;
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
        this.props.processForm(user).then(this.props.closeModal);
    }

    showServerErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) =>
                    <li class='error-message' key={`error number ${idx}`}>
                        {error}
                    </li>
                )}
            </ul>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.errors.length > 0 && this.state === prevState) {
            $('button.button').addClass('greyed-out')
            $('button.button').prop('disabled',true)
            $("input").addClass("invalid-creds");
            $("li.error-message").removeClass("disappear");
        } else {
            $('button.button').removeClass('greyed-out')
            $('button.button').prop('disabled',false)
            $("input").removeClass("invalid-creds");
            $("li.error-message").addClass("disappear");
        }
    }

    redirectRoute() {
        this.props.history.push('/');
    }

    handleRoutes() {
        const crossRoad = this.props.modal ? (
            <h5 id='switch-text'>Don't have an account? sign up as
                <span onClick={this.props.openModal}>
                    <span class='afan' onClick={this.props.closeModal}> a fan</span>
                </span>
            </h5>
        ) : (
            <h5 id='switch-text'>Don't have an account? sign up as
                <span onClick={this.props.openModal}>
                    <span class='afan' onClick={() => this.redirectRoute()}> a fan</span>
                </span>
            </h5>
        );

        return (
            <div>
                {crossRoad}
            </div>
        )
    }


    render() {
        if (!this.props.currentUser) {
            <Redirect to='/' />
        }
        
        return (
            <div class="pageBody">
                <div class='banner'>
                    <Link class='login-page-logo' to='/'>
                        <div class="purple-box"></div>
                        <h1 class="title">bandchamp</h1>
                    </Link>
                </div>
                <div class="container">
                <h3 class="header">Log in</h3>
                    <div class="divider"></div>
                    
                        <form onSubmit={this.handleSubmit}>
                            <div class='username'> 
                                <label for='username-field'>Username / Email</label>
                                    <input type="text"
                                    id='username-field'
                                    value={this.state.username}
                                    name="username"
                                    onChange={this.handleChange}
                                    />
                            </div>

                            <div class='password'> 
                                <label for='password-field'>Password</label>
                                    <input type="password"
                                    id='password-field'
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.handleChange}
                                    />
                                {this.showServerErrors()} 
                            </div>

                            <div >
                                <button class='button' type='submit'>Log in</button>
                            </div>

                            <div id='login-footer'>
                               {this.handleRoutes()}
                            </div>
                        </form>
                    <footer>

                    </footer>

                </div>
            </div>
        );
    }

}



export default LoginForm;