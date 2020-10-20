import { OPEN_SONG, CLOSE_SONG } from "../actions/song_actions";

const modalReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_SONG:
      return merge({}, action.song);
    case CLOSE_SONG:
      return null;
    default:
      return state;
  }
};

export default modalReducer;
