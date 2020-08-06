import { fetchsong } from '../util/song_api_util';
import { fetchsongs } from '../util/song_api_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
// export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveSong = (song) => {
    return {
        type: RECEIVE_SONG,
        song,
    }
};

const receiveSongs = (songs) => {
    return {
        type: RECEIVE_SONGS,
        songs,
    }
};

// const receiveErrors = (errors) => ({
//     type: RECEIVE_ERRORS,
//     errors,
// });


export const fetchSong = (songId) => dispatch => fetchsong(songId)
    .then(song => dispatch(receiveSong(song)))
    // .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const fetchSongs = () => dispatch => fetchsongs()
    .then(songs => dispatch(receiveSongs(songs)))
    // .fail(errors => dispatch(receiveErrors(errors.responseJSON)));