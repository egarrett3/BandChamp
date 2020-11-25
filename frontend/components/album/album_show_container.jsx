import React from "react";
import AlbumShow from './album_show_page';
import { fetchSgs, clearSongs } from "../../actions/song_actions";
import { fetchAls } from "../../actions/album_actions";
import { createSg } from "../../actions/song_actions";
import { connect } from 'react-redux';

const mapStateToProps = ({ session, entities: { users, songs, albums }}) => {
  return {
    currentUser: users[session.id],
    songs: Object.values(songs),
    albums: Object.values(albums),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearSongs: () => dispatch(clearSongs()),
    openSong: (song) => dispatch(openSong(song)),
    fetchSongs: (albumId) => dispatch(fetchSgs(albumId)),
    fetchAlbums: () => dispatch(fetchAls()),
    createSong: (song,albumId) => dispatch(createSg(song,albumId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);