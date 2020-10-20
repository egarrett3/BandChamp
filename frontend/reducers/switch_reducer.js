import { OPEN_SONG, CLOSE_SONG } from "../actions/song_actions";
import { merge } from "lodash";

const switchReducer = (state = null, action) => {
  Object.freeze(state);


  switch (action.type) {
    case OPEN_SONG:
      return merge({}, action.song);
    case CLOSE_SONG:
      return null;
    default:
      return state;
  }
};

export default switchReducer;
