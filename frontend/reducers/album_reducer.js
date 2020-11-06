import { RECEIVE_ALBUM } from "../actions/album_actions";
import { merge } from "lodash";

const albumReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM:
      return merge({}, state, action.album);
    default:
      return state;
  }
};

export default albumReducer;
