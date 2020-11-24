import React from 'react';
import { connect } from 'react-redux';
import { fetchSgs, openSong, closeSong } from '../../actions/song_actions';
import { fetchAls } from '../../actions/album_actions';
import SongShow from './song_show_form';

const mapStateToProps = ({ui,session,entities:{songs,users,albums,song}}) => {
    debugger
    return {
      currentUser: users[session.id],
      songs: Object.values(songs),
      song: song.song_url,
      albums: Object.values(albums),
      photo_url: ui.switch,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSongs: (albumId) => dispatch(fetchSgs(albumId)),
        fetchAlbums: () => dispatch(fetchAls()),
        openSong: (song) => dispatch(openSong(song)),
        closeSong: () => dispatch(closeSong()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongShow)