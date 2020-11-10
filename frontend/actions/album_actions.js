import { fetchAlbum } from "../util/album_api_util";
import { fetchAlbums } from "../util/album_api_util";

export const RECEIVE_ALBUM = "RECEIVE_ALBUM"
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS"

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

export const fetchAl = (albumId) => (dispatch) => fetchAlbum(albumId)
    .then((album) => dispatch(receiveAlbum(album)));

export const fetchAls = () => (dispatch) => fetchAlbums()
    .then(albums => dispatch(receiveAlbums(albums)));
