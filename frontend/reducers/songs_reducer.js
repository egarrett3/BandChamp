import { RECEIVE_ALL_SONGS } from "../actions/song_actions"
import { CLEAR_SONGS, DESTROY_SONG } from "../actions/song_actions"


const songsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
      case RECEIVE_ALL_SONGS:
        return Object.assign({}, action.songs);
      case DESTROY_SONG:
        return newState;
      case CLEAR_SONGS:
        return state = {};
      default:
        return state;
    };
}

export default songsReducer;