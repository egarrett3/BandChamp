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
            // counter: 0,
        };
        // this.nextSong = this.nextSong.bind(this);
        // this.previousSong = this.previousSong.bind(this);
        // this.loadSongURL = this.loadSongURL.bind(this);
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
        if (document.getElementById('src2') && this.props.song_url) {
            this.source1.src = this.props.song_url;
            this.audio1.load();
        }
    }

    componentWillUnmount() {
        this.audio1.removeEventListener("timeupdate", () => { });
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

    // loadSongURL() {
    //     if (this.source1) {
    //         if (this.props.song_url) {
    //             this.source1.src = this.props.song_url;
    //             this.audio1.load();
    //         }
    //     }
    // }

   
    render() {

        const song_url = this.props.song_url;
        const title = this.props.song_title;

        const ct = this.getTime(this.state.currentTime);
        const dur = this.getTime(this.state.duration);

        let that = this;

        if (document.getElementById('ply1')) {
            if (that.audio1.ended) {
                that.audio1.currentTime = 0;
                that.flipPausebtn();
            }
        }
        

        return (
            <>
                <div id="audio-player2">
                    <audio
                        id='ply1'
                        ref={(ref) => (this.audio1 = ref)}
                        type="audio/mpeg"
                        onLoadedMetadata={() =>
                            (this.seekbar.max = this.audio1.duration)
                        }
                    ><source
                            ref={(ref) => (this.source1 = ref)}
                            id='src2'
                            src={song_url}
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
                            <h3 className="weekly">{title}</h3>
                            {/* <div className="date">{this.time()}</div> */}
                            <div className="timer2">
                                <span id="curTimeText">{ct}</span>/
                                <span id="durTimeText">{dur}</span>
                            </div>
                            {/* <div id='space-it-out'>
                                <div className='next-song-arrow' onClick={() => this.previousSong()}>
                                    <FontAwesomeIcon icon={faChevronLeft} />
        
                                </div>
                                <div className='next-song-arrow' onClick={() => this.nextSong(songListLength)}>
                                    <FontAwesomeIcon icon={faChevronRight} />

                                </div>
                            </div> */}
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

