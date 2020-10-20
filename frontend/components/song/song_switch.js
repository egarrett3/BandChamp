import React from "react";
import { closeSong } from "../../actions/song_actions";
import { connect } from "react-redux";

const SongSwitch = ({ song }) => {
  if (!song) {
    return null;
  }

  
  const slist = this.props.song.map((song) => song.song_url);
  const plist = this.props.song.map((song) => song.photo_url);

  const ct = this.getTime(this.state.currentTime);
  const dur = this.getTime(this.state.duration);


  return (
      <div>
        <div
              className={`img-container ${
                this.currentUsr() ? "adjust-small" : "adjust-large"
              }`}
            >
              <div className="graf-container">
                <img src={plist[0]} className="graffiti-image" />
                <div id="audio-player">
                  <audio
                    ref={(ref) => (this.audio = ref)}
                    src={slist[0]}
                    type="audio/mpeg"
                    onLoadedMetadata={() =>
                      (this.seekbar.max = this.audio.duration)
                    }
                  />
                  <div className="btns">
                    <div id="timer"></div>
                    <div
                      id="play-btn"
                      onClick={() => {
                        this.audio.play();
                        this.flipPlaybtn();
                      }}
                    ></div>
                    <div
                      className="disappear"
                      id="pause-btn"
                      onClick={() => {
                        this.audio.pause();
                        this.flipPausebtn();
                      }}
                    ></div>
                  </div>
                  <div className="audio-label">
                    <div className="weekly-label">
                      <h3 className="weekly">BandChamp Weekly</h3>
                      <div className="date">{this.time()}</div>
                    </div>
                    <div className="lower-label">
                      <div className="afan">past shows</div>
                    </div>
                    <div className="feature-artist"></div>
                    <div className="hosts"></div>
                  </div>

                  <input
                    ref={(ref) => (this.seekbar = ref)}
                    type="range"
                    min="0"
                    step="0.01"
                    id="audio-track"
                    onChange={() =>
                      (this.audio.currentTime = this.seekbar.value)
                    }
                  ></input>
                  <div className="timer">
                    <span id="curTimeText">{ct}</span>/
                    <span id="durTimeText">{dur}</span>
                  </div>
                </div>
            </div>
        </div>
      </div>
  )
};

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeSong: () => dispatch(closeSong()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongSwitch);
