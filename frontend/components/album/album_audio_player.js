import React from "react";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AlbumAudioPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentTime: 0,
            duration: 0,
            user: false,
            counter: 0,
            loaded: false,
        };
        this.nextSong = this.nextSong.bind(this);
        this.previousSong = this.previousSong.bind(this);
        this.loadSongURL = this.loadSongURL.bind(this);
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
    }

    componentDidUpdate() {
        let src_url = this.props.songs.length ? this.props.songs[this.state.counter].song_url : "";
        
        if (this.state.loaded === false && src_url === "") {
            this.setState({
                ...this.state,
                loaded: true
            })
            this.loadSongURL(src_url)
        }
    }

    flipPlaybtn() {
        $("div#play-btn2").addClass("disappear");
        $("div#pause-btn2").removeClass("disappear");
    }

    flipPausebtn() {
        $("div#pause-btn2").addClass("disappear");
        $("div#play-btn2").removeClass("disappear");
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
                counter: this.state.counter + 1
            })
        }
        this.loadSongURL(this.props.songs[this.state.counter].song_url) 
    }

    previousSong() {
        if (this.state.counter >= 1) {
            this.setState({
                counter: this.state.counter - 1
            })
        }
        this.loadSongURL(this.props.songs[this.state.counter].song_url) 
    }

    loadSongURL(song_src) {
      if (this.source1) {
        if (this.props.songs) {
            this.source1.src = song_src;
            this.audio1.pause();
            this.audio1.load();
            // this.audio1.play();
            this.flipPausebtn();
        }
      }
    }

   
    render() {
        const dur = this.getTime(this.state.duration);
        const ct = this.getTime(this.state.currentTime);
        
        const AlLength = this.props.songs.length;
        const src_url = this.props.songs.length ? this.props.songs[this.state.counter].song_url : "";

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
                        id='ply1'
                        ref={(ref) => (this.audio1 = ref)}
                        type="audio/mpeg"
                        preload='auto'
                        onLoadedMetadata={() =>
                            (this.seekbar1.max = this.audio1.duration)
                        }
                    ><source
                            ref={(ref) => (this.source1 = ref)}
                            id='src2'
                            src={src_url}
                        />
                    </audio>
                    <div className="btns2">
                        <div id="timer2"></div>
                        <div
                            id="play-btn2"
                            onClick={() => {
                                this.audio1.play();
                                this.flipPlaybtn();
                            }}
                        ></div>
                        <div
                            className="disappear"
                            id="pause-btn2"
                            onClick={() => {
                                this.audio1.pause();
                                this.flipPausebtn();
                            }}
                        ></div>
                    </div>
                    <div className="audio-label2">
                        <div className="weekly-label">
                            {/* <div className="date">{this.time()}</div> */}
                            <div className="timer2">
                                <span id="curTimeText">{ct}</span>/
                                <span id="durTimeText">{dur}</span>
                            </div>
                            <h3 className="weekly">Title: {this.props.titles[this.state.counter]}</h3>
                            <div id='space-it-out'>
                                <button className='next-song-arrow' onClick={() => this.previousSong()}>
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                <button className='next-song-arrow' onClick={() => this.nextSong(AlLength)}>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </div>
                        <div className="lower-label">
                            {/* <div className="afan">past shows</div> */}
                        <input
                            ref={(ref) => (this.seekbar1 = ref)}
                            type="range"
                            min="0"
                            step="0.01"
                            id="audio-track2"
                            onChange={() => (this.audio1.currentTime = this.seekbar1.value)}
                        ></input>
                        </div>
                        
                    </div>
                    {/* <div className="timer">
                        <span id="curTimeText">{ct}</span>/
                        <span id="durTimeText">{dur}</span>
                    </div> */}
                </div>
            </>
        );
    }
}

export default AlbumAudioPlayer;

