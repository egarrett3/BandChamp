import { RECEIVE_SONG } from "../actions/song_actions";
import { DESTROY_SONG } from "../actions/song_actions";
import { merge } from 'lodash';

const songReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_SONG:
      return merge({}, state, action.song);
    case DESTROY_SONG:
      return merge({}, state)
    default:
      return state;
  }
};

export default songReducer;
