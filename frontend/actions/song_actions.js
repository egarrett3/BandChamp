import { fetchSong } from '../util/song_api_util';
import { fetchSongs } from '../util/song_api_util';
import { makeSong } from '../util/song_api_util';
import {deleteSong} from '../util/song_api_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';

export const OPEN_SONG = "OPEN_SONG";
export const CLOSE_SONG = "CLOSE_SONG";

export const CLEAR_SONGS = "CLEAR_SONGS";
export const DESTROY_SONGS = "DESTROY_SONGS";

export const openSong = (photo_url) => {
  return {
    type: OPEN_SONG,
    photo_url
  };
};

export const closeSong = () => {
  return {
    type: CLOSE_SONG,
  };
};

export const clearSongs = () => {
  return {
    type: CLEAR_SONGS,
  };
};

export const removeSong = () => {
  return {
    type: DESTROY_SONG
  }
}

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

export const fetchSg = (albumId,songId) => dispatch => fetchSong(albumId,songId)
    .then(song => dispatch(receiveSong(song)));

export const fetchSgs = (albumId) => dispatch => fetchSongs(albumId)
    .then(songs => dispatch(receiveAllSongs(songs)));

export const createSg = (song,albumId) => dispatch => makeSong(song,albumId)
    .then(song => dispatch(receiveSong(song)));

export const deleteSG = (album_id,song_id) => dispatch => deleteSong(album_id, song_id)
    .then(() => dispatch(removeSong()))