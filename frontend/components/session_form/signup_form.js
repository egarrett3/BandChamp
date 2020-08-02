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
            <ul class='modal-error-message'>
                {this.props.errors.filter((error, idx) => error.includes('Password'))
                .map((errorName,idx) => (
                    <li key={`error number ${idx}`}>
                        {errorName}
                    </li>
                ))}
            </ul>
        )
    };

    showUsernameErrors() {
        return (
            <ul class='modal-error-message'>
                {this.props.errors.filter((error, idx) => error.includes('Username'))
                    .map((errorName, idx) => (
                        <li key={`error number ${idx}`}>
                            {errorName}
                        </li>
                    ))}
            </ul>
        )
    };

    showEmailErrors() {
        return (
            <ul class='modal-error-message'>
                {this.props.errors.filter((error, idx) => error.includes('Email'))
                    .map((errorName, idx) => (
                        <li key={`error number ${idx}`}>
                            {errorName}
                        </li>
                    ))}
            </ul>
        )
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.errors.length > 0 && this.state === prevState) {
            $("input").addClass("invalid-creds");
            $("ul.modal-error-message").removeClass("disappear");
        } else {
            $("input").removeClass("invalid-creds");
            $("ul.modal-error-message").addClass("disappear");
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
                        class='modal-signup-field'
                        onChange={this.handleChange}
                        />
                        {this.showUsernameErrors()}
                    </div>
                    
                    <div class='modal-signup-email'> 
                        <label class='signup-email-label'>Email</label>
                        <input type="text"
                        value={this.state.email}
                        name="email"
                        class='modal-signup-field'
                        onChange={this.handleChange}
                        />
                        {this.showEmailErrors()}
                    </div>
                    
                    <div class='modal-signup-password'>
                        <label class='signup-password-label'>Password</label>
                        <input type="password"
                        value={this.state.password}
                        name="password"
                        class='modal-signup-field'
                        onChange={this.handleChange}
                        />
                        {this.showPasswordErrors()}
                    </div>

                    <div>
                        <button class='modal-signup-version'>{this.props.formType}</button>
                    </div>
                    
                    <h6>Already have an account?
                        <span onClick={this.props.openModal}>
                            <span class='afan'onClick={this.props.closeModal}> Log in
                            </span>
                        </span>
                    </h6>
            
            </form>
            
        );
    }

}

export default SignupForm;