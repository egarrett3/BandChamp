import { RECEIVE_SONG } from "../actions/song_actions"


const songsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_SONG:
            // return Object.assign({}, {[action.song.id] :action.song.title} , action.song.song_blob )
            return Object.assign({}, action.song )
        default:
            return state;
    };
}

export default songsReducer;