import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: 'signup',
        LinkTo: <Link to="/login">login</Link>,
        currentUser: state.entities.users[state.session.id],
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(signUp(user)),
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(SignupForm);
