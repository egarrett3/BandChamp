import React from 'react';
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions';
import SongShow from './song_show_form';

const mapStateToProps = ({entities:{ songs }}) => {
    return {
        title : songs.title,
        song_url : songs.song_url,
        photo_url : songs.photo_url
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSong: (songId) => dispatch(fetchSong(songId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongShow)