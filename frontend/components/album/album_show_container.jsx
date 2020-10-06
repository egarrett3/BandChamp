import React from "react";
import AlbumShow from './album_show_page';
import { fetchSg } from "../../actions/song_actions";
import { connect } from 'react-redux';

const mapStateToProps = ({ session, entities: { users, songs }}) => {
  return {
    currentUser: users[session.id],
    id: session.id,
    songs: songs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSong: (id) => dispatch(fetchSg(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);