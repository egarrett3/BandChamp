import { fetchsong } from '../util/song_api_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';
// export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveSong = (song) => {
    return {
        type: RECEIVE_SONG,
        song,
    }
};

// const receiveErrors = (errors) => ({
//     type: RECEIVE_ERRORS,
//     errors,
// });


export const fetchSong = (songId) => dispatch => fetchsong(songId)
    .then(song => dispatch(receiveSong(song)))
    // .fail(errors => dispatch(receiveErrors(errors.responseJSON)));