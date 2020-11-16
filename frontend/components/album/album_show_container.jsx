import React from "react";
import AlbumShow from './album_show_page';
import { fetchSgs } from "../../actions/song_actions";
import { connect } from 'react-redux';

const mapStateToProps = ({ session, entities: { users, songs, album }}) => {
  return {
    currentUser: users[session.id],
    songs: Object.values(songs),
    album: Object.values(album),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSongs: (albumId) => dispatch(fetchSgs(albumId)),
    fetchAlbum: (albumId) => dispatch(fetchSgs(albumId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);