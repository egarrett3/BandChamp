import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
        };
        this.base = this.props.errors;
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

    showPasswordErrors() {
        return (
            <ul>
                {this.props.errors.filter((error, idx) => error.includes('Password'))
                .map((errorName,idx) => (
                    <li class='modal-error-password' key={`error number ${idx}`}>
                        {errorName}
                    </li>
                ))}
            </ul>
        )
    };

    showUsernameErrors() {
        return (
            <ul>
                {this.props.errors.filter((error, idx) => error.includes('Username'))
                    .map((errorName, idx) => (
                        <li class='modal-error-username' key={`error number ${idx}`}>
                            {errorName}
                        </li>
                    ))}
            </ul>
        )
    };

    showEmailErrors() {
        return (
            <ul>
                {this.props.errors.filter((error, idx) => error.includes('Email'))
                    .map((errorName, idx) => (
                        <li class='modal-error-email' key={`error number ${idx}`}>
                            {errorName}
                        </li>
                    ))}
            </ul>
        )
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.errors.length > 0 && this.state === prevState) {
            $('button.modal-signup-version-button').addClass('greyed-out')
            $('button.modal-signup-version-button').prop('disabled', true)
            $("input").addClass("invalid-creds");
            $("li.modal-error-username").removeClass("disappear");
            $("li.modal-error-email").removeClass("disappear");
            $("li.modal-error-password").removeClass("disappear");
        } else {
            $('button.modal-signup-version-button').removeClass('greyed-out')
            $('button.modal-signup-version-button').prop('disabled', false)
            $("input").removeClass("invalid-creds");
            $("li.modal-error-username").addClass("disappear");
            $("li.modal-error-email").addClass("disappear");
            $("li.modal-error-password").addClass("disappear");
        }
    }


    render() {
        if (!this.props.currentUser) {
            <Redirect to='/' />
        }
        return (
            <form class='modal-signup-form' onSubmit={this.handleSubmit}>
                
                    <div class='modal-signup-username'> 
                        <label class='signup-username-label'>Username</label>
                        <input type="text"
                        value={this.state.username}
                        name="username"
                        class='modal-input-username'
                        onChange={this.handleChange}
                        />
                        {this.showUsernameErrors()}
                    </div>
                    
                    <div class='modal-signup-email'> 
                        <label class='signup-email-label'>Email</label>
                        <input type="text"
                        value={this.state.email}
                        name="email"
                        class='modal-input-email'
                        onChange={this.handleChange}
                        />
                        {this.showEmailErrors()}
                    </div>
                    
                    <div class='modal-signup-password'>
                        <label class='signup-password-label'>Password</label>
                        <input type="password"
                        value={this.state.password}
                        name="password"
                        class='modal-input-password'
                        onChange={this.handleChange}
                        />
                        {this.showPasswordErrors()}
                    </div>

                    <div>
                        <button class='modal-signup-version-button'>Sign up</button>
                    </div>
                    
                    <h5 id='switch-text'>Already have an account?
                        <span onClick={this.props.openModal}>
                            <span class='afan'onClick={this.props.closeModal}> Log in</span>
                        </span>
                    </h5>
            
            </form>
            
        );
    }

}

export default SignupForm;