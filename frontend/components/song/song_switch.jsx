import React from "react";
import { closeSong } from "../../actions/song_actions";
import { connect } from "react-redux";
import AudioPlayer from './audio_player'

const SongSwitch = ({ song, closeSong, currentUser }) => {
    if (!song) {
      return null
    }

  return (
    <div
      className={`switch-container ${
        currentUser ? "adjust-small" : "adjust-large"
      }`}
    >
      <img src={song.photo_url} className="full-screen-img" />
      <div onClick={closeSong} id="close-audio">
        CLOSE SONG
      </div>
      <AudioPlayer songs={[song]} />
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    song: state.ui.switch,
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeSong: () => dispatch(closeSong()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongSwitch);
