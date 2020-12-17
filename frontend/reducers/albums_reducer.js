import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from "../actions/album_actions";
import { merge } from "lodash";

const initialState = {};

const albumsReducer = (state = initialState, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_ALBUMS:
            const albumCollection = action.albums;
            const obj = Object.assign({}, state, albumCollection)
            return obj
        default:
            return state;
    }
};

export default albumsReducer;
