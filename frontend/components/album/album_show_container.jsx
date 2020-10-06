import React from "react";
import AlbumShow from './album_show_page';
import { connect } from 'react-redux';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    id: session.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSongs: () => dispatch(fetchSgs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);