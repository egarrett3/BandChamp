import React from 'react';
import { connect } from 'react-redux';
import { fetchSgs } from '../../actions/song_actions';
import SongShow from './song_show_form';

const mapStateToProps = ({session,entities:{songs,users}}) => {
    return {
        currentUser : users[session.id],
        songs : Object.values(songs)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSongs: () => dispatch(fetchSgs()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongShow)