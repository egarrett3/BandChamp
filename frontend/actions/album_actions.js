import { fetchAlbum } from "../util/album_api_util";

export const RECEIVE_ALBUM = "RECEIVE_ALBUM"

const receiveAlbum = (album) => {
    debugger
  return {
    type: RECEIVE_ALBUM,
    album,
  };
};

export const fetchAl = (albumId) => (dispatch) => fetchAlbum(albumId)
    .then((album) => dispatch(receiveAlbum(album)));
