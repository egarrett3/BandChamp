import { fetchSong } from '../util/song_api_util';
import { fetchSongs } from '../util/song_api_util';
import { makeSong } from '../util/song_api_util';
import { deleteSong } from '../util/song_api_util';

export const ADD_SONG = 'ADD_SONG';
export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';

export const OPEN_SONG = "OPEN_SONG";
export const CLOSE_SONG = "CLOSE_SONG";

export const CLEAR_SONGS = "CLEAR_SONGS";
export const DESTROY_SONG = "DESTROY_SONG";

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

export const removeSong = (index) => {
  debugger
  return {
    type: DESTROY_SONG,
    index
  }
}

const addSong = (song) => {
  debugger
    return {
        type: ADD_SONG,
        song,
    }
};

const receiveAllSongs = (songs) => {
  debugger
    return {
        type: RECEIVE_ALL_SONGS,
        songs,
    }
};

export const fetchSg = (albumId,songId) => dispatch => fetchSong(albumId,songId)
    .then(song => dispatch(addSong(song)));

export const fetchSgs = (albumId) => dispatch => fetchSongs(albumId)
    .then(songs => dispatch(receiveAllSongs(songs)));

export const createSg = (song,albumId) => dispatch => makeSong(song,albumId)
    .then(song => dispatch(addSong(song)));

export const deleteSg = (album_id, song_id) => dispatch => deleteSong(album_id, song_id)
    .then((songs) => dispatch(removeSong(songs)))