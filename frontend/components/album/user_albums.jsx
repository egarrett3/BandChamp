import React from "react";
import { connect } from "react-redux";
import { fetchSgs, clearSongs } from "../../actions/song_actions"

class UserAlbums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }


  render() {
    
    return (
      <a
        className="album-page"
        onClick={() => {
          window.location.href = `/#/SongPage/${this.props.id}`,
          this.props.clearSongs(),
          this.props.fetchSongs(this.props.id)
        }}
      >
        <div>{this.props.title}</div>
        <img className="img-block" src={this.props.photo_url} />
      </a>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAlbums);
