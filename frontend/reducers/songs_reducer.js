import { RECEIVE_ALL_SONGS } from "../actions/song_actions"
import { CLEAR_SONGS } from "../actions/song_actions"


const songsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_ALL_SONGS:
            return Object.assign({}, state, action.songs )
        case CLEAR_SONGS:
            return state = {};
        default:
            return state;
    };
}

export default songsReducer;