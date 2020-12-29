import { RECEIVE_ALBUMS, DESTROY_ALBUM } from "../actions/album_actions";
import { merge } from "lodash";

const initialState = {};

const albumsReducer = (state = initialState, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_ALBUMS:
            const albumCollection = action.albums;
            const obj = Object.assign({}, state, albumCollection)
            return obj
        case DESTROY_ALBUM:
            const id = action.album.id;
            const albums = Object.values(state)
            const newAlbumList = albums.filter((album) => album.id !== id);
            return Object.assign({}, newAlbumList)
        default:
            return state;
    }
};

export default albumsReducer;
