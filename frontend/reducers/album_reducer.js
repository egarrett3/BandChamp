import { RECEIVE_ALBUMS,DESTROY_ALBUM, RECEIVE_ALBUM } from "../actions/album_actions";
import { merge } from "lodash";

const initialState = {};

const albumReducer = (state = initialState, action) => {
  Object.freeze(state);

  //move to albumsReducer
  switch (action.type) {
    case RECEIVE_ALBUM:
      const singleAlb = { [action.album.id]: action.album };
      return Object.assign({}, state, singleAlb);
    case DESTROY_ALBUM:
      const id = action.album.id;
      const albums = Object.values(state);
      const newAlbumList = albums.filter((album) => album.id !== id);
      return Object.assign({}, newAlbumList);
    default:
      return state;
  }
};

export default albumReducer;
