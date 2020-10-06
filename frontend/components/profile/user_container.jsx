import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import UserProf from './user_profile_form';

const mapStateToProps = ({ session, entities: { users } }) => {
    return { 
        currentUser: users[session.id],
        id: session.id
    };
}

const mapDispatchToProps = dispatch => { 
    return { 
        openModal: (modal) => dispatch(openModal(modal)), 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserProf)