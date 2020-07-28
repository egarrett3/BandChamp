import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { logIn } from '../../actions/session_actions';
import { Link } from 'react-router-dom';


const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: 'login',
        LinkTo: <Link to="/signup">fan</Link>,
    }
};

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(logIn(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);