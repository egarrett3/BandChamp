import { RECEIVE_ALBUMS, DESTROY_ALBUM, RECEIVE_ALBUM } from "../actions/album_actions";
import { merge } from "lodash";

// const initialState = {};

const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_ALBUMS:
            const albumCollection = action.albums;
            return Object.assign({}, albumCollection)
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
