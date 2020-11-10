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
        };
    }

    componentDidMount() {
        let aud = document.getElementById("audio-track2");
        aud.value = "0";
        this.audio.addEventListener('loadedmetadata', (e) => {
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
        $("div#play-btn2").addClass("disappear");
        $("div#pause-btn2").removeClass("disappear");
    }

    flipPausebtn() {
        $("div#pause-btn2").addClass("disappear");
        $("div#play-btn2").removeClass("disappear");
    }

    componentWillUnmount() {
        this.audio.removeEventListener("timeupdate", () => { });
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
                <div id="audio-player2">
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
                            src={this.props.src}
                        />
                    </audio>
                    <div className="btns2">
                        <div id="timer2"></div>
                        <div
                            id="play-btn2"
                            onClick={() => {
                                this.audio.play();
                                this.flipPlaybtn();
                            }}
                        ></div>
                        <div
                            className="disappear"
                            id="pause-btn2"
                            onClick={() => {
                                this.audio.pause();
                                this.flipPausebtn();
                            }}
                        ></div>
                    </div>
                    <div className="audio-label2">
                        <div className="weekly-label">
                            <h3 className="weekly">{this.props.title}</h3>
                            {/* <div className="date">{this.time()}</div> */}
                            <div className="timer2">
                                <span id="curTimeText">{ct}</span>/
                                <span id="durTimeText">{dur}</span>
                            </div>
                            <div id='space-it-out'>
                                <div className='next-song-arrow'>
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </div>
                                <div className='next-song-arrow'>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </div>
                            </div>
                        </div>
                        <div className="lower-label">
                            {/* <div className="afan">past shows</div> */}
                        <input
                            ref={(ref) => (this.seekbar = ref)}
                            type="range"
                            min="0"
                            step="0.01"
                            id="audio-track2"
                            onChange={() => (this.audio.currentTime = this.seekbar.value)}
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

