import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import songsReducer from './songs_reducer';
import songReducer from './song_reducer';
import albumReducer from './album_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    songs: songsReducer,
    song: songReducer,
    album: albumReducer,
});

export default entitiesReducer;