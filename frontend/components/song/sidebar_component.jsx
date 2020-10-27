import React from 'react';
import { connect } from 'react-redux';
import { openSong, closeSong } from '../../actions/song_actions';

class SideContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  describers() {
    debugger
    switch(this.props.song.id) {
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
 
  
  render() {
    return (
      <li className="side-img-container">
        <div className="building-image-words">
          <div>{this.props.song.title}</div>
          <div>{this.describers()}</div>
        </div>
        <img
        src={this.props.song.photo_url}
        className="building-image"
        onClick={() => this.props.openSong(this.props.song)}
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
    openSong: (song) => dispatch(openSong(song)),
    closeSong: () => dispatch(closeSong()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideContainer);