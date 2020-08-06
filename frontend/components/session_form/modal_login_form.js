import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { $CombinedState } from 'redux';

class ModalLoginForm extends React.Component {
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

    // resetState() {
    //     this.setState(this.baseState);
    // }

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
            $("input").addClass("invalid-creds");
            $("li.error-message").removeClass("disappear");
        } else {
            $("input").removeClass("invalid-creds");
            $("li.error-message").addClass("disappear");
        }
    }

    redirectRoute() {
        this.props.history.push('/');
    }

    handleRoutes() {
        return (
            <h5 id='switch-text'>Don't have an account? sign up as
                <span onClick={this.props.openModal}>
                    <span class='afan' onClick={this.props.closeModal}> a fan</span>
                </span>
            </h5>
        ) 
    }


    render() {
        if (!this.props.currentUser) {
            <Redirect to='/' />
        }

        return (
            <div>
                <form class='modal-login-form' onSubmit={this.handleSubmit}>
                    <div class='username'>
                        <input type="text"
                            placeholder="Username / Email"
                            class='modal-username-field'
                            value={this.state.username}
                            name="username"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div class='password'>
                        <input type="password"
                            placeholder="Password"
                            class='modal-password-field'
                            value={this.state.password}
                            name="password"
                            onChange={this.handleChange}
                        />
                        <div class='error-position'>
                            {this.showServerErrors()}
                        </div>
                    </div>

                    <div>
                        <button class='modal-version' type='submit'>Log in</button>
                    </div>

                    <div id='login-footer'>
                        {this.handleRoutes()}
                    </div>
                </form>
                
            </div>
        );
    }

}



export default ModalLoginForm;