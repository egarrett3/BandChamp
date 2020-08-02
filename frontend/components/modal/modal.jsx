import React from 'react'
import ModalLoginContainer from '../session_form/modal_login_container';
import SignupContainer from '../session_form/signup_container';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const Modal = ({modal, closeModal}) => {
    if (!modal) {return null};

    let component;
    switch(modal) {
        case 'login':
            component = <ModalLoginContainer />
            break;
        case 'signup':
            component = <SignupContainer />
            break;
        default:
            return null;
    }
    
    
    if (modal === 'signup') {
        return (
            <div class='bg-modal' onClick={closeModal}>
                <div class='modal-content1' onClick={(e) => e.stopPropagation()}>
                    <div class='modal-header'>
                        <h3 class="modal-login-header">Sign up for a Bandchamp fan account</h3>
                        <div onClick={closeModal} class="close">X</div>
                    </div>
                    {component}
                </div>
            </div>
        )
    } else {
        return (
            <div class='bg-modal' onClick={closeModal}>
                <div class='modal-content2' onClick={(e) => e.stopPropagation()}>
                    <div class='modal-header'>
                        <h3 class="modal-login-header">Log in</h3>
                        <div onClick={closeModal} class="close">X</div>
                    </div>
                    {component}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        modal: state.ui.modal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};



export default connect(mapStateToProps,mapDispatchToProps)(Modal);