import React from "react";
import { closeSong } from "../../actions/song_actions";
import { connect } from "react-redux";
import AudioPlayer from './audio_player'

const SongSwitch = ({ song }) => {
    if (!song) {
      return null
    }

  // const plist = this.props.song.map((song) => song.photo_url);

  return (
    <div>
      <div >
        <img src={song.photo_url} className="full-screen-img" />
        <div onClick={() => this.props.closeSong()}>CLOSE SONG</div>
        <AudioPlayer songs={[song]} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    song: state.ui.switch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeSong: () => dispatch(closeSong()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongSwitch);
