import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "--username--",
            password: "--password--",
            email: "email",
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
                <h3 class="login-header">Sign Up</h3>
                <div class="divider">
                    <form onSubmit={this.handleSubmit}>
                        <label>Username:
                                <input type="text"
                                value={this.state.username}
                                name="username"
                                onChange={this.handleChange}
                                />
                        </label>
                        {this.showErrors()}
                        <label>Email:
                                <input type="text"
                                value={this.state.username}
                                name="email"
                                onChange={this.handleChange}
                                />
                        </label>
                        {this.showErrors()}
                        <label>Password:
                                <input type="password"
                                value={this.state.password}
                                name="password"
                                onChange={this.handleChange}
                                />
                        </label>
                        {this.showErrors()}
                        <button>{this.props.formType}</button>
                        <h6>Already have an account? {this.props.LinkTo}</h6>
                    </form>
                </div>
            </div>
        );
    }

}

export default SignupForm;