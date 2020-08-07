import { RECEIVE_SONG } from "../actions/song_actions"
import { RECEIVE_ALL_SONGS } from "../actions/song_actions"


const songsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_SONG:
            return Object.assign({}, state, action.song )
        case RECEIVE_ALL_SONGS:
            return ( action.songs )
        default:
            return state;
    };
}

export default songsReducer;