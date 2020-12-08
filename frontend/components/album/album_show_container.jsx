import AlbumShow from './album_show_page';
import { fetchSgs, clearSongs, deleteSg, fetchSg } from "../../actions/song_actions";
import { fetchAls, fetchAl } from "../../actions/album_actions";
import { createSg } from "../../actions/song_actions";
import { connect } from 'react-redux';

const mapStateToProps = ({ session, entities: { users, songs, album }}) => {
  return {
    currentUser: users[session.id],
    songs: Object.values(songs),
    albums: Object.values(album),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearSongs: () => dispatch(clearSongs()),
    openSong: (song) => dispatch(openSong(song)),
    fetchSongs: (albumId) => dispatch(fetchSgs(albumId)),
    fetchSong: (albumId) => dispatch(fetchSg(albumId,songId)),
    fetchAlbums: () => dispatch(fetchAls()),
    fetchAlbum: (albumId) => dispatch(fetchAl(albumId)),
    createSong: (song, albumId) => dispatch(createSg(song, albumId)),
    deleteSong: (albumId, songId) => dispatch(deleteSg(albumId, songId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);