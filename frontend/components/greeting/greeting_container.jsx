import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting';
import { logOut } from '../../actions/session_actions';
import { logIn } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = ({ session, entities: { users } }) => {
    return { currentUser: users[session.id] };
};

const mapDispatchToProps = dispatch => {
    
    return {
        login: (user) => dispatch(logIn(user)),
        logout: () => dispatch(logOut()),
        openModal: (modal) => dispatch(openModal(modal))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);