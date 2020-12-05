import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from "../actions/album_actions";
import { merge } from "lodash";

const albumReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALBUMS:
      const albumCollection = action.albums.forEach(function (album) {
        merge(state, { [album.id]: album });
      });
      debugger;
      return merge({}, state, { [action.album.id]: action.album });
    case RECEIVE_ALBUM:
      const newAlbum = action.album;
      debugger
      return merge(state, newAlbum);
    default:
      return state;
  }
};

export default albumReducer;
