import React from 'react';
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions';
import SongShow from './song_show_form';

const mapStateToProps = ({entities:{ songs }}) => {
    return {
        title : songs.title,
        url : songs.url,
        // contentType : songs.content_type
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSong: (songId) => dispatch(fetchSong(songId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongShow)