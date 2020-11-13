import React from 'react';
import { connect } from 'react-redux';
import { fetchSgs, openSong, closeSong } from '../../actions/song_actions';
import { fetchAls } from '../../actions/album_actions';
import SongShow from './song_show_form';

const mapStateToProps = ({ui,session,entities:{songs,users,albums,album}}) => {
    return {
      currentUser: users[session.id],
      songs: Object.values(songs),
      albums: Object.values(albums),
      albumData: Object.values(album),
      switchSong: ui.switch,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSongs: () => dispatch(fetchSgs()),
        fetchAlbums: () => dispatch(fetchAls()),
        openSong: (song) => dispatch(openSong(song)),
        closeSong: () => dispatch(closeSong()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongShow)