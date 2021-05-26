import { fetchSong } from '../util/song_api_util';
import { fetchSongs } from '../util/song_api_util';
import { makeSong } from '../util/song_api_util';
import { deleteSong } from '../util/song_api_util';

export const ADD_SONG = 'ADD_SONG';
export const OPEN_SONG = 'OPEN_SONG';
export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';

export const OPEN_IMG = "OPEN_IMG";
export const CLOSE_IMG = "CLOSE_IMG";

export const CLEAR_SONG = "CLEAR_SONG";
export const CLEAR_SONGS = "CLEAR_SONGS";
export const DESTROY_SONG = "DESTROY_SONG";

export const openImg = (photo_url) => {
  return {
    type: OPEN_IMG,
    photo_url
  };
};

export const closeImg = () => {
  return {
    type: CLOSE_IMG,
  };
};

export const clearSongs = () => {
  return {
    type: CLEAR_SONGS
  };
};

export const clearSong = () => {
  return {
    type: CLEAR_SONG
  };
};

export const removeSong = (song) => {

  return {
    type: DESTROY_SONG,
    song
  }
}

export const addSong = (song) => {
    return {
        type: ADD_SONG,
        song,
    }
};

export const openSong = (song) => {
  return {
    type: OPEN_SONG,
    song
  }
}

const receiveAllSongs = (songs) => {
    return {
        type: RECEIVE_ALL_SONGS,
        songs,
    }
};

export const fetchSg = (albumId,songId) => dispatch => fetchSong(albumId,songId)
    .then(song => dispatch(openSong(song)));

export const fetchSgs = (albumId) => dispatch => fetchSongs(albumId)
    .then(songs => dispatch(receiveAllSongs(songs)));

export const createSg = (song,albumId) => dispatch => makeSong(song,albumId)
    .then(song => dispatch(addSong(song)));

export const deleteSg = (album_id, song_id) => dispatch => deleteSong(album_id, song_id)
    .then((song) => dispatch(removeSong(song)))