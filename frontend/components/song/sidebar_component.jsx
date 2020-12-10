import React from 'react';
import { connect } from 'react-redux';
import { openSong, closeSong } from '../../actions/song_actions';
import { fetchSgs } from '../../actions/song_actions';

class SideContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    
    }
    this.getSong = this.getSong.bind(this)
  }

  describers() {
    switch((this.props.id+1)) {
      case(1):
        return 'The song of your dreams'
      case(2):
        return 'Who else but the best in their genre'
      case(3):
        return 'So good, So raw'
      case(4):
        return 'The strongest case for song of the year'
      case(5):
        return 'A crowd favorite'
      case(6):
        return 'Beauty to my Brains'
      case(7):
        return 'A top classic'
      case(8):
        return 'A bandchamp favorite'
      default:
        return "This band's number one hit"
    }
  }

  getSong(photo_url) {
    this.props.fetchSongs(this.props.album.id).then(() => this.props.openSong(photo_url));
  }
  
  render() {

    return (
      <li className="side-img-container">
        <div className="building-image-words">
          <div>{this.props.album.title}</div>
          <div>{this.describers()}</div>
        </div>
        <img
        src={this.props.album.photo_url}
        className="building-image"
        onClick={() => 
          this.getSong(this.props.album.photo_url)
        }
        />
      </li>
    );
  }
}

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSongs: (album_id) => dispatch(fetchSgs(album_id)),
    openSong: (albumId) => dispatch(openSong(albumId)),
    // closeSong: () => dispatch(closeSong()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideContainer);