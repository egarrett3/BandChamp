import React from "react";
import { faFastForward, faFastBackward, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainAudioButton from '../audio/main_audio_button';
import SongList from "./audio_list";


class AlbumAudioPlayer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentTime: 0, // current time in song
        duration: 0, // lists full time of song
        user: false,
        counter: 0, // tracks songs in album
        loaded: false, // flip to true after first to satisfy conditional in componentDidUpdate which loads song
        loading: false, // tracks whether to show buffer symbol
        btn: false,
        expand: true,
      };
      this.nextSong = this.nextSong.bind(this);
      this.previousSong = this.previousSong.bind(this);
      this.getTime = this.getTime.bind(this);
      this.playTrack = this.playTrack.bind(this);
      this.pauseTrack = this.pauseTrack.bind(this);
      this.stall = this.stall.bind(this);
    }
  
    componentDidMount() {
      let aud = document.getElementById("audio-track2");
      aud.value = "0";
      this.audio1.addEventListener("loadedmetadata", (e) => {
        this.setState({
          duration: e.target.duration,
        });
      });
  
      this.audio1.addEventListener("timeupdate", (e) => {
        this.setState({
          currentTime: e.target.currentTime,
        });
      });

      this.audio1.addEventListener("canplaythrough", (e) => {
        this.setState({
          loading: false,
        });
      });

      this.audio1.addEventListener("loadstart", (e) => {
        this.setState({
          loading: true,
        });
      });
  
      this.audio1.addEventListener("timeupdate", (e) => {
        this.seekbar1.value = e.target.currentTime;
      });
    }

    componentWillUnmount() {
      this.audio1.removeEventListener("timeupdate", () => {});
    }
  
    playTrack(callback,data) {
      debugger
      if (this.source1.src.split("http://localhost:3000/")[1] !== "") {
        if (typeof callback === 'function' && typeof data !== 'object') { 
          callback(); 
          this.audio1.play();
        }
        
        if (typeof callback === 'function' && typeof data === 'object') {
          this.props.openSong(data)
          this.stall();
          callback();
        }
      }
    }

    stall() {
      setTimeout(() => {
          this.audio1.play();
      }, 1000);
    }

    pauseTrack(callback) {
      debugger
      this.audio1.pause();
      if (callback) {callback()};
    }

    getTime(time) {
      if (!isNaN(time)) {
        return (
          Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
      }
    }
  
    nextSong(songListLength) {
      if (this.state.counter < songListLength - 1) {
        this.setState({
          counter: this.state.counter + 1,
          loaded: false,
        });
      }
    }
  
    previousSong() {
      if (this.state.counter >= 1) {
        this.setState({
          counter: this.state.counter - 1,
          loaded: false,
        });
      }
    }
  
    toggleExpand() {
      this.setState((prevState) => ({
        expand: !prevState.expand,
      }));
    }
  
    componentDidUpdate(prevProps) {
      
      let src_url = this.props.song
        ? this.props.song.song_url
        : "";

      if (prevProps.song.id && this.props.song.id && prevProps.song.id !== this.props.song.id) {
        this.source1.src = src_url;
        this.audio1.load();
      }

      if (this.source1.src === "" && this.state.loaded === false && src_url) {
        this.source1.src = src_url;
        this.audio1.load();
        this.setState({
          ...this.state,
          loaded: true,
        });
      }
  
      // loads audio to remove buffered audio (no TimeRanges obj) and sets duration to 0 so
      // upon changing albums song duration === to '0:00' instead of the duration of buffered song
      if (
        this.props.songs.length === 0 &&
        this.audio1.buffered.length === 1 &&
        this.source1
      ) {
        this.audio1.load();
        this.setState({
          duration: 0,
        });
      }
    }
  
    
  
    render() {
      const dur = this.getTime(this.state.duration);
      const ct = this.getTime(this.state.currentTime);
  
      // const AlLength = this.props.songs.length;
  
      let title = this.props.song ? this.props.song.title : ""
  
      // if (this.state.counter === this.props.songs.length && this.props.songs) {
      //   let src_url = this.props.songs.length
      //     ? this.props.songs[this.state.counter - 1].song_url
      //     : "";
      // }
  
      if (document.getElementById("ply1")) {
        if (this.audio1.ended) {
          this.audio1.currentTime = 0;
          // this.pauseTrack();
        }
      }

      return (
        <>
          <div id="audio-player2">
            {/* <AudioPlayer src_url={src_url}/> */}
            <audio
              id="ply1"
              ref={(ref) => (this.audio1 = ref)}
              type="audio/mpeg"
              preload="auto"
              onLoadedMetadata={() =>
                (this.seekbar1.max = this.audio1.duration)
              }
            >
              <source ref={(ref) => (this.source1 = ref)} id="src2" />
            </audio>
            <MainAudioButton
              loading={this.state.loading}
              playTrack={this.playTrack}
              pauseTrack={this.pauseTrack}
              btnType="btn2"
              classType="btns2"
            />
            <div className="audio-label2">
              <div className="weekly-label">
                <h3 className="weekly">{title}</h3>
                <div className="timer2">
                  <span id="curTimeText">{ct}</span>/
                  <span id="durTimeText">{dur}</span>
                </div>
              </div>
              <div className="lower-label">
                <input
                  ref={(ref) => (this.seekbar1 = ref)}
                  type="range"
                  min="0"
                  step="0.1"
                  id="audio-track2"
                  onChange={() =>
                    (this.audio1.currentTime = this.seekbar1.value)
                  }
                ></input>
                <div id="space-it-out">
                  <button
                    className="next-song-arrow"
                    onClick={() => this.previousSong()}
                  >
                    <FontAwesomeIcon icon={faFastBackward} />
                  </button>
                  <button
                    className="next-song-arrow"
                    onClick={() => this.nextSong(AlLength)}
                  >
                    <FontAwesomeIcon icon={faFastForward} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="songLinkList">
            <div id="tracks">
              Tracks
              {this.state.expand ? (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="expandable"
                  onClick={() => this.toggleExpand()}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className="expandable"
                  onClick={() => this.toggleExpand()}
                />
              )}
            </div>
            <div className="songListwindow">
              {this.props.songs.map((song, idx) => (
                <SongList
                  key={song.id}
                  sng={song}
                  song={this.props.song}
                  idx={idx}
                  pauseTrack={this.pauseTrack}
                  playTrack={this.playTrack}
                  btnType="btn3"
                  classType="btns3"
                  deleteSong={this.props.deleteSong}
                  bool={this.props.bool}
                  album_id={this.props.album_id}
                  id={song.id}
                />
              ))}
            </div>
          </div>
        </>
      );
    }
  }


export default AlbumAudioPlayer;

