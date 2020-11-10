import React from "react";
import AlbumShow from './album_show_page';
import { fetchAl } from "../../actions/album_actions";
import { connect } from 'react-redux';

const mapStateToProps = ({ session, entities: { users, song, album }}) => {
  return {
    currentUser: users[session.id],
    song: song,
    album: album,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbum: (id) => dispatch(fetchAl(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);