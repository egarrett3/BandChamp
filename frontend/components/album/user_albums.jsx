import React from "react";
import { connect } from "react-redux";
import { fetchSgs, clearSongs } from "../../actions/song_actions"
import { deleteAl } from "../../actions/album_actions"

class UserAlbums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    
    return (
      <li className="album-page2">
        <div className="album-title-delete">
          <span className="img-title">{this.props.title}</span>
          <span
            className="delete-album"
            onClick={() => this.props.deleteAlbum(this.props.id)}
          >
            X
          </span>
        </div>
        <img
          className="img-block2"
          src={this.props.photo_url}
          onClick={() => {
            (window.location.href = `/#/SongPage/${this.props.id}`),
              this.props.clearSongs(),
              this.props.fetchSongs(this.props.id);
          }}
        />
      </li>
    );
  }
}


const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearSongs: () => dispatch(clearSongs()),
    openSong: (song) => dispatch(openSong(song)),
    fetchSongs: (albumId) => dispatch(fetchSgs(albumId)),
    deleteAlbum: (albumId) => dispatch(deleteAl(albumId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAlbums);
