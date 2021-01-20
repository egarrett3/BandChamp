import React from "react";
import { faChevronRight, faChevronLeft, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AlbumAudioPlayer extends React.Component {
    constructor(props) {
        super(props); 
        this.state = { 
            currentTime: 0,  // current time in song
            duration: 0,     // lists full time of song
            user: false,
            counter: 0,   // tracks songs in album
            loaded: false, // flip to true after first to satisfy conditional in componentDidUpdate which loads song
            loading: false,  // tracks whether to show buffer symbol
            btn: false,
        };
        this.nextSong = this.nextSong.bind(this);
        this.previousSong = this.previousSong.bind(this);
        this.getTime = this.getTime.bind(this);
    }

    componentDidMount() {
        let aud = document.getElementById("audio-track2");
        aud.value = "0";
        this.audio1.addEventListener('loadedmetadata', (e) => {
            this.setState({
                duration: e.target.duration
            })
        });

        this.audio1.addEventListener("timeupdate", (e) => {
            this.setState({
                currentTime: e.target.currentTime,
            });
        });

        this.audio1.addEventListener("timeupdate", (e) => {
            this.seekbar1.value = e.target.currentTime;
        });
    }

    componentWillUnmount() {
        this.audio1.removeEventListener("timeupdate", () => { });
        this.audio1.removeEventListener("loadedmetadata", () => { });
    }

    flipPlaybtn() {
        $("div#play-btn2").addClass("disappear");
        $("div#pause-btn2").removeClass("disappear");
    }

    flipPausebtn() {
        $("div#pause-btn2").addClass("disappear");
        $("div#play-btn2").removeClass("disappear");
    }

    playTrack() {
      this.audio1.play();
      this.flipAudiobtn();
    }

    pauseTrack() {
      this.audio1.pause();
      this.flipAudiobtn();
    }

    flipAudiobtn() {
      this.setState({
        btn: !this.state.btn
      })
    }
    
    getTime(time) {
        if (!isNaN(time)) {
            return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
        }
    }
        
    nextSong(songListLength) {
        if (this.state.counter < songListLength - 1) {
            this.setState({
                counter: this.state.counter + 1,
                loaded: false,
                loading: true
            })
        }
    }
    
    previousSong() {
        if (this.state.counter >= 1) {
            this.setState({
                counter: this.state.counter - 1,
                loaded: false,
                loading: true
            })
        }
    }

    componentDidUpdate() {
      let src_url = this.props.songs.length ? this.props.songs[this.state.counter].song_url : "";
      
      if (this.state.loaded && this.props.songs.length === 0) {
        this.setState({
          loaded: false
        })
      }

      if (this.source1 && src_url !== "" && this.state.loaded === false) {
          this.source1.src = src_url;
          this.audio1.pause();
          this.audio1.load();
          this.flipPausebtn();
          this.setState({
              ...this.state,
              loaded: true,
          })
      }

      if (this.audio1.buffered.length === 1 && this.state.loading) {
          this.setState({
              loading:false
          })
      }
    
      if (this.props.songs.length === 0 && this.state.counter !== 0) {
        this.setState({
          counter: 0,
        })
      }

      // loads audio to remove buffered audio (no TimeRanges obj) and sets duration to 0 so
      // upon changing albums song duration === to '0:00' instead of the duration of buffered song
      if (this.props.songs.length === 0 && this.audio1.buffered.length === 1 && this.source1) {
        this.audio1.load();
        this.setState({
          duration:0,
        })
      }

    }
   
    render() {
        const dur = this.getTime(this.state.duration);
        const ct = this.getTime(this.state.currentTime);
    
        const AlLength = this.props.songs.length;
        
        let src_url = this.props.songs.length ? this.props.songs[this.state.counter].song_url : "";

        if (this.state.counter === this.props.songs.length && this.props.songs) {
          let src_url = this.props.songs.length ? this.props.songs[this.state.counter-1].song_url : "";
        } 
        
        if (document.getElementById('ply1')) {
            if (this.audio1.ended) {
                this.audio1.currentTime = 0;
                this.flipPausebtn();
            }
        }
        
        return (
          <>
            <div id="audio-player2">
              <audio
                id="ply1"
                ref={(ref) => (this.audio1 = ref)}
                type="audio/mpeg"
                preload="auto"
                onLoadedMetadata={() =>
                  (this.seekbar1.max = this.audio1.duration)
                }
              >
                <source
                  ref={(ref) => (this.source1 = ref)}
                  id="src2"
                  src={src_url}
                />
              </audio>
              <div className="btns2">
                <div id="timer2"></div>
                {!this.state.loading ? (
                  <div
                    className={this.state.btn ? "disappear" : ""}
                    id="play-btn2"
                    onClick={() => {
                      this.playTrack();
                      // this.flipAudiobtn();
                    }}
                  ></div>
                ) : (
                  <FontAwesomeIcon icon={faSpinner} />
                )}
                <div
                  className={this.state.btn ? "" : "disappear"}
                  id="pause-btn2"
                  onClick={() => {
                    this.pauseTrack();
                    // this.flipAudiobtn();
                  }}
                ></div>
              </div>
              <div className="audio-label2">
                <div className="weekly-label">
                  <div className="timer2">
                    <span id="curTimeText">{ct}</span>/
                    <span id="durTimeText">{dur}</span>
                  </div>
                  <h3 className="weekly">
                    Title: {this.props.titles[this.state.counter]}
                  </h3>
                  <div id="space-it-out">
                    <button
                      className="next-song-arrow"
                      onClick={() => this.previousSong()}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                      className="next-song-arrow"
                      onClick={() => this.nextSong(AlLength)}
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </div>
                <div className="lower-label">
                  <input
                    ref={(ref) => (this.seekbar1 = ref)}
                    type="range"
                    min="0"
                    step="0.01"
                    id="audio-track2"
                    onChange={() =>
                      (this.audio1.currentTime = this.seekbar1.value)
                    }
                  ></input>
                </div>
              </div>
            </div>
          </>
        );
    }
}

export default AlbumAudioPlayer;

