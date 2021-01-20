import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import userReducer from './user_reducer';
import songsReducer from './songs_reducer';
import songReducer from './song_reducer';
import albumReducer from './album_reducer';
import albumsReducer from './albums_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    user: userReducer,
    songs: songsReducer,
    song: songReducer,
    album: albumReducer,
    albums: albumsReducer,
});

export default entitiesReducer;