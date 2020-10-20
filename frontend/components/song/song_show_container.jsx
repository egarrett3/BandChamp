import React from 'react';
import { connect } from 'react-redux';
import { fetchSgs, openSong } from '../../actions/song_actions';
import SongShow from './song_show_form';

const mapStateToProps = ({ui,session,entities:{songs,users}}) => {
    return {
      currentUser: users[session.id],
      songs: Object.values(songs),
      song: ui.switch,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSongs: () => dispatch(fetchSgs()),
        openSong: (song) => dispatch(openSong(song))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongShow)