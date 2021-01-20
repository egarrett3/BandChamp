import AlbumShow from './album_show_page';
import { fetchSgs, clearSongs, deleteSg, fetchSg } from "../../actions/song_actions";
import { deleteAl, fetchAl, clearAlbums } from "../../actions/album_actions";
import { fetchUsr } from "../../actions/user_actions";
import { createSg } from "../../actions/song_actions";
import { connect } from 'react-redux';

const mapStateToProps = ({ session, entities: { users, songs, album, }}) => {
  return {
    currentUser: users[session.id],
    songs: Object.values(songs),
    album: Object.values(album),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearAlbums: () => dispatch(clearAlbums()),
    clearSongs: () => dispatch(clearSongs()),
    openSong: (song) => dispatch(openSong(song)),
    fetchSongs: (albumId) => dispatch(fetchSgs(albumId)),
    deleteAlbum: (albumId) => dispatch(deleteAl(albumId)),
    fetchAlbum: (albumId) => dispatch(fetchAl(albumId)),
    createSong: (song, albumId) => dispatch(createSg(song, albumId)),
    deleteSong: (albumId, songId) => dispatch(deleteSg(albumId, songId)),
    fetchUser: (id) => dispatch(fetchUsr(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);