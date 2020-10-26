import React from 'react';
import { connect } from 'react-redux';
import { openSong, closeSong } from '../../actions/song_actions';

class SideContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
 
  
  render() {
    debugger
    return (
      <li className="side-img-container">
        <div className="building-image-words">
          <div>Lorem Ipsum</div>
          <div>Veni Vidi Vici. Alia Iacta Est.</div>
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