import React from 'react';
import { connect } from 'react-redux';
import ModalLoginForm from './modal_login_form'
import { logIn } from '../../actions/session_actions';
import { Link, Redirect } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        LinkTo: <Link to="/">fan</Link>,
        formType: 'login',
        modal: state.ui.modal,
        DirectTo: <Redirect to='/' />
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(logIn(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: () => dispatch(openModal('signup')),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalLoginForm);