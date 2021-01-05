import { RECEIVE_ALBUMS, DESTROY_ALBUM } from "../actions/album_actions";
import { merge } from "lodash";

// const initialState = {};

const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    //integrate album reducer into albumsReducer
    switch (action.type) {
        case RECEIVE_ALBUM:
            const singleAlb = { [action.album.id]: action.album };
            return Object.assign({}, state, singleAlb)
        case RECEIVE_ALBUMS:
            const albumCollection = action.albums;
            const obj = Object.assign({}, state, albumCollection)
            return obj
        case DESTROY_ALBUM:
            const id = action.album.id;
            const albums = Object.values(state)
            const newAlbumList = albums.filter((album) => album.id !== id);
            debugger
            return Object.assign({}, newAlbumList)
        default:
            return state;
    }
};

export default albumsReducer;
