import { ADD_SONG } from "../actions/song_actions";
import { DESTROY_SONG } from "../actions/song_actions";
import { merge } from 'lodash';

const songReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case ADD_SONG:
      const newSong = action.song;
      return merge({}, state, action.song )
    default:
      return state;
  }
};

export default songReducer;
