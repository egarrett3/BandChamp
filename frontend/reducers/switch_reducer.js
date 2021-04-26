import { OPEN_IMG, CLOSE_IMG } from "../actions/song_actions";
import { merge } from "lodash";

const switchReducer = (state = null, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case OPEN_IMG:
      return action.photo_url;
    case CLOSE_IMG:
      return null;
    default:
      return state;
  }
};

export default switchReducer;
