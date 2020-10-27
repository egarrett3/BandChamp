import React from 'react'
import ModalLoginContainer from '../session_form/modal_login_container';
import SignupContainer from '../session_form/signup_container';
import AddImageContainer from '../profile/add_image';
import BannerContainer from '../profile/banner';
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
        case 'addimage':
            component = <AddImageContainer />
            break;
        case 'addbanner':
            component = <BannerContainer />
            break;
        default:
            return null;
    }
    
    
    if (modal === 'signup') {
        return (
            <div className='bg-modal' onClick={closeModal}>
                <div className='modal-content1' onClick={(e) => e.stopPropagation()}>
                    <div className='modal-header'>
                        <h3 className="modal-login-header">Sign up for a Bandchamp fan account</h3>
                        <div onClick={closeModal} className="close">X</div>
                    </div>
                    {component}
                </div>
            </div>
        )
    } else if(modal === 'login') {
        return (
            <div className='bg-modal' onClick={closeModal}>
                <div className='modal-content2' onClick={(e) => e.stopPropagation()}>
                    <div className='modal-header'>
                        <h3 className="modal-login-header">Log in</h3>
                        <div onClick={closeModal} className="close">X</div>
                    </div>
                    {component}
                </div>
            </div>
        )
    } else if(modal === 'addimage') {
        return (
            <div className='bg-modal' onClick={closeModal}>
                <div className='modal-content3' onClick={(e) => e.stopPropagation()}>
                    <div className='modal-header1'>
                        <h3 className="modal-login-header">Add a Profile Image</h3>
                        <div onClick={closeModal} className="close">X</div>
                    </div>
                    {component }
                </div>
            </div>
        )
    } else if(modal === 'addbanner') {
        return (
            <div className='bg-modal' onClick={closeModal}>
                <div className='modal-content3' onClick={(e) => e.stopPropagation()}>
                    <div className='modal-header1'>
                        <h3 className="modal-login-header">Set banner image</h3>
                        <button className="cancel-button" onClick={closeModal}>Cancel</button>
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
        id: state.session.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};



export default connect(mapStateToProps,mapDispatchToProps)(Modal);