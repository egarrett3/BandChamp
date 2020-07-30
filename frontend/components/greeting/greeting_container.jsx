import React from 'react';
import { connect } from 'react-redux';
import GreetingContainer from './greeting';
import { logOut } from '../../actions/session_actions';


const mapStateToProps = ({ session, entities: { users } }) => {
    return { currentUser: users[session.id] };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GreetingContainer);