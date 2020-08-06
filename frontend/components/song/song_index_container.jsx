import React from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import SongIndex from './song_index_form';

const mapStateToProps = ({ entities: { songs } }) => {
    return {
        title: songs.title,
        song_url: songs.song_url,
        photo_url: songs.photo_url
        // contentType : songs.content_type
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSong: () => dispatch(fetchSongs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongIndex)