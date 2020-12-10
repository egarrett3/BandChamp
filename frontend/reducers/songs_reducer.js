import { RECEIVE_ALL_SONGS } from "../actions/song_actions"
import { CLEAR_SONGS, DESTROY_SONG } from "../actions/song_actions"
import { ADD_SONG } from "../actions/song_actions"


const songsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
      case RECEIVE_ALL_SONGS:
        return Object.assign({}, action.songs);
      case DESTROY_SONG:
        const id = action.song.id;
        const songs = Object.values(state)
        const newSongList = songs.filter((song) => song.id !== id);
        return Object.assign({},newSongList)
      case CLEAR_SONGS:
        return (state = {});
      case ADD_SONG:
        const newSong = action.song;
        return Object.assign({}, state, { [action.song.id]: action.song })
      default:
        return state;
    };
}

export default songsReducer;