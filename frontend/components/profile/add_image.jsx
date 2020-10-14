import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import AddImage from './addimage';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id],
        id: session.id,
        photo: users[session.id].photo
    };
}

const mapDispatchToProps = dispatch => {
    return {
        placePic: (formData, id) => dispatch(updateUser(formData, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddImage)