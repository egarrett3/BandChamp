import React from "react";
import AlbumShow from './album_show_page';
import { fetchSgs, clearSongs } from "../../actions/song_actions";
import { fetchAl } from "../../actions/album_actions";
import { createSg } from "../../actions/song_actions";
import { connect } from 'react-redux';

const mapStateToProps = ({ session, entities: { users, songs, album }}) => {
  return {
    currentUser: users[session.id],
    songs: Object.values(songs),
    album: album,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearSongs: () => dispatch(clearSongs()),
    openSong: (song) => dispatch(openSong(song)),
    fetchSongs: (albumId) => dispatch(fetchSgs(albumId)),
    fetchAlbum: (albumId) => dispatch(fetchAl(albumId)),
    createSong: (song,albumId) => dispatch(createSg(song,albumId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);