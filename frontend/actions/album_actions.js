import { fetchAlbum } from "../util/album_api_util";
import { fetchAlbums } from "../util/album_api_util";
import { createAlbum } from "../util/album_api_util";
import { deleteAlbum } from "../util/album_api_util";

export const RECEIVE_ALBUM = "RECEIVE_ALBUM"
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS"
export const CLEAR_ALBUMS = "CLEAR_ALBUMS"
export const DESTROY_ALBUM = "DESTROY_ALBUM"

const receiveAlbum = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album,
  };
};

const receiveAlbums = (albums) => {
  return {
    type: RECEIVE_ALBUMS,
    albums,
  };
};

const removeAlbum = (album) => {
  return {
    type: DESTROY_ALBUM,
    album
  }
}

export const clearAlbums = () => {
  return {
    type: CLEAR_ALBUMS,
  };
};

export const fetchAl = (albumId) => (dispatch) => fetchAlbum(albumId)
    .then((album) => dispatch(receiveAlbum(album)));

export const fetchAls = () => (dispatch) => fetchAlbums()
    .then(albums => dispatch(receiveAlbums(albums)));

export const createAl = (album) => dispatch => createAlbum(album)
  .then(album => dispatch(receiveAlbum(album)));

export const deleteAl = (album_id) => dispatch => deleteAlbum(album_id)
  .then((album) => dispatch(removeAlbum(album)));