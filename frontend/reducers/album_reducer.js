import { RECEIVE_ALBUM } from "../actions/album_actions";
import { RECEIVE_ALBUMS } from "../actions/album_actions";
import { merge } from "lodash";

const albumReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALBUM:
      return merge({}, state, action.album);
    case RECEIVE_ALBUMS:
      return merge({}, state, action.albums);
    default:
      return state;
  }
};

export default albumReducer;
