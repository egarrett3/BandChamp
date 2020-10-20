import { fetchSong } from '../util/song_api_util';
import { fetchSongs } from '../util/song_api_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';

export const OPEN_SONG = "OPEN_SONG";
export const CLOSE_SONG = "CLOSE_SONG";

export const openSong = (song) => {
  return {
    type: OPEN_SONG,
    song,
  };
};

export const closeSong = () => {
  return {
    type: CLOSE_SONG,
  };
};

const receiveSong = (song) => {
    return {
        type: RECEIVE_SONG,
        song,
    }
};

const receiveAllSongs = (songs) => {
    return {
        type: RECEIVE_ALL_SONGS,
        songs,
    }
};

export const fetchSg = (songId) => dispatch => fetchSong(songId)
    .then(song => dispatch(receiveSong(song)));


export const fetchSgs = () => dispatch => fetchSongs()
    .then(songs => dispatch(receiveAllSongs(songs)));