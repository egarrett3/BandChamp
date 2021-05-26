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
        toggle:false,
        mainToggle: false,
      };
      this.nextSong = this.nextSong.bind(this);
      this.previousSong = this.previousSong.bind(this);
      this.getTime = this.getTime.bind(this);
      this.playTrack = this.playTrack.bind(this);
      this.pauseTrack = this.pauseTrack.bind(this);
      this.stall = this.stall.bind(this);
      this.loadAdjacentSong = this.loadAdjacentSong.bind(this);
      this.flipAudioBtn = this.flipAudioBtn.bind(this);
    }
  
    componentDidMount() {
      let aud = document.getElementById("audio-track2");
      aud.value = "0";
      this.audio1.addEventListener("durationchange", (e) => {
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
          duration: 0,
        });
      });
  
      this.audio1.addEventListener("timeupdate", (e) => {
        this.seekbar1.value = e.target.currentTime;
      });
    }

    componentWillUnmount() {
      this.audio1.removeEventListener("timeupdate", () => {});
      this.audio1.removeEventListener("durationchange", () => {});
      this.audio1.removeEventListener("loadstart", () => {});
      this.audio1.removeEventListener("canplaythrough", () => {});
    }
  
    playTrack(data,idx) {
      if (this.source1.src.split("http://localhost:3000/")[1] !== "") {
        if (typeof data !== 'object') { 
          this.playSong();
        }
        
        if (typeof data === 'object' && data.id !== this.props.song.id) {
          this.flipAudioBtn(idx)
              .then(() => this.props.openSong(data))
          
          this.stall()
              .then(() => { this.playSong() });
        }
      }
    }

    stall() {
      return Promise.resolve(setTimeout(()=>{},500))
    }

    flipAudioBtn(idx) {
      return Promise.resolve(
        this.setState({
          toggle: false,
          mainToggle: false,
          counter: idx,
        })
      );
    }
    
    playSong() {
      this.setState({
        toggle: true,
        mainToggle: true,
      });
      this.audio1.play();
    }

    pauseTrack() {
      this.setState({
        toggle: false,
        mainToggle: false,
      });
      this.audio1.pause();
    }

    loadAdjacentSong() {
      this.props.openSong(this.props.songs[this.state.counter]);
    }

    getTime(time) {
      if (!isNaN(time)) {
        return (
          Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
      }
    }

    setSong(op) {
      return new Promise((resolve) => {
        this.setState({
          counter: this.addOrSubCounter(op),
        });
        resolve();
      })
    }

    addOrSubCounter(op) {
      if (op === 'add') {
        return this.state.counter+1;
      } else if (op === 'sub') {
        return this.state.counter-1;
      }
    }

    nextSong() {
      let numOfSongs = this.props.songs.length;

      if (this.state.counter < numOfSongs - 1) {
        this.setSong('add')
          .then(()=> { this.flipAudioBtn(this.state.counter) })
            .then(()=> { this.loadAdjacentSong() })
      }
    }
  
    previousSong() {
      if (this.state.counter >= 1) {
        this.setSong('sub')
          .then(() => { this.flipAudioBtn(this.state.counter) })
            .then(() => { this.loadAdjacentSong() })
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

      if (src_url === undefined && this.state.loaded) {
        this.source1.setAttribute('src',"");
        this.audio1.setAttribute('src', "");
        this.audio1.load();
        this.setState({
          loaded: false
        })
      }

      if (src_url && this.state.loaded === false && this.source1.src.split("http://localhost:3000/")[1] !== src_url) {
        this.source1.src = src_url;
        this.audio1.load();
        this.setState({
          loaded:true
        })
      }
    }
  
    
  
    render() {
      const dur = this.getTime(this.state.duration);
      const ct = this.getTime(this.state.currentTime);
    
      let title = this.props.song ? this.props.song.title : ""
  
      // if (this.state.counter === this.props.songs.length && this.props.songs) {
      //   let src_url = this.props.songs.length
      //     ? this.props.songs[this.state.counter - 1].song_url
      //     : "";
      // }
  
      if (document.getElementById("ply1")) {
        if (this.audio1.ended) {
          this.audio1.currentTime = 0;
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
              <source ref={(ref) => (this.source1 = ref)} id="src2" />
            </audio>
            <MainAudioButton
              mainToggle={this.state.mainToggle}
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
                    onClick={() => this.nextSong()}
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
                  toggle={this.state.toggle}
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

