import React from "react";

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      user: false,
    };
  }

  componentDidMount() {
    let aud = document.getElementById("audio-track");
    aud.value = "0";
    this.audio.addEventListener('loadedmetadata',(e) => {
      this.setState({
        duration: e.target.duration
      })
    });

    this.audio.addEventListener("timeupdate", (e) => {
      this.setState({
        currentTime: e.target.currentTime,
      });
    });
    
    this.audio.addEventListener("timeupdate", (e) => {
      this.seekbar.value = e.target.currentTime;
    }); 
  }

  flipPlaybtn() {
    $("div#play-btn").addClass("disappear");
    $("div#pause-btn").removeClass("disappear");
  }

  flipPausebtn() {
    $("div#pause-btn").addClass("disappear");
    $("div#play-btn").removeClass("disappear");
  }

  time() {
    let dt = new Date();
    let day = dt.getDate();
    let year = dt.getFullYear();
    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    let dtStr = `${month[dt.getMonth()]} ${day}, ${year}`;
    return dtStr;
  }

  componentWillUnmount() {
    this.audio.removeEventListener("timeupdate", () => {});
  }

  getTime(time) {
    if (!isNaN(time)) {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
    }
  }

  render() {
    const ct = this.getTime(this.state.currentTime);
    const dur = this.getTime(this.state.duration);

    let that = this;
    
    if (document.getElementById('ply')) { 
      if (that.audio.ended) {
        that.audio.currentTime = 0;
        that.flipPausebtn();
      }
    }

    return (
      <>
        <div id="audio-player">
            <audio
              id='ply'
              ref={(ref) => (this.audio = ref)}
              type="audio/mpeg"
              onLoadedMetadata={() =>
                  (this.seekbar.max = this.audio.duration)
              }
            > <source
              ref={(ref) => (this.source = ref)}
              id='src2'
              src={this.props.songs}
              />
            </audio>
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
              onChange={() => (this.audio.currentTime = this.seekbar.value)}
            ></input>
            <div className="timer">
              <span id="curTimeText">{ct}</span>/
              <span id="durTimeText">{dur}</span>
            </div>
        </div>
      </>
    );
  }
}

export default AudioPlayer;
