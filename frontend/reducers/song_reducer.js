import { ADD_SONG,OPEN_SONG,CLEAR_SONG } from "../actions/song_actions";
import { DESTROY_SONG } from "../actions/song_actions";
import { merge } from 'lodash';

const songReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case ADD_SONG:
      const newSong = action.song;
      return merge({}, state, newSong)
    case OPEN_SONG:
      const currentSong = action.song;
      return merge({}, state, currentSong)
    case CLEAR_SONG:
      return (state = {});
    default:
      return state;
  }
};

export default songReducer;
