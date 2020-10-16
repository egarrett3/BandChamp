import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/picture_actions';
import AddImage from './addimage';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id],
        id: session.id,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        placePic: (user, user_id) => dispatch(updateUser(user, user_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddImage)