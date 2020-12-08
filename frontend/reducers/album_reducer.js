import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from "../actions/album_actions";
import { merge } from "lodash";

const initialState = {};

const albumReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALBUMS:
      const albumCollection = action.albums;
      const obj = Object.assign({}, state, albumCollection)
      return obj
    case RECEIVE_ALBUM:
      const singleAlb = { [action.album.id]: action.album };
      return Object.assign({}, state, singleAlb)
    default:
      return state;
  }
};

export default albumReducer;
