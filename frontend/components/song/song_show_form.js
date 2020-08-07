import React from 'react';
import Carousel from '../carousel/carousel';

class SongShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0,
            duration: 0 
        }
    }
    
    componentDidMount() {
        this.props.fetchSongs();
        let aud = document.getElementById('audio-track');
        aud.value = '0';
        this.audio.addEventListener("timeupdate", e => {
            this.setState({
                currentTime: e.target.currentTime,
                duration: e.target.duration
            });
        });
        this.audio.addEventListener("timeupdate", e => {
            this.seekbar.value = e.target.currentTime
        });
    }


    flipPlaybtn() {
        $('div#play-btn').addClass('disappear')
        $('div#pause-btn').removeClass('disappear')
    }

    flipPausebtn() {
        $('div#pause-btn').addClass('disappear')
        $('div#play-btn').removeClass('disappear')
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
        this.audio.removeEventListener("timeupdate", () => { });
    }

    getTime(time) {
    if (!isNaN(time)) {
        return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        }
    }

    render() {
        const slist = this.props.songs.map(song => song.song_url)
        const plist = this.props.songs.map(song => song.photo_url)

        const ct = this.getTime(this.state.currentTime);
        const dur = this.getTime(this.state.duration);

        return (
            <div>
                <div class='img-container'>
                    <img src={plist[0]} class='graffiti-image'/>
                        <div id='audio-player'>
                            <audio 
                                ref={ref => this.audio = ref} src={slist[0]} duration type="audio/mpeg"
                                onLoadedMetadata ={ () =>  this.seekbar.max = this.audio.duration}
                                />
                                <div class='btns'>
                                    <div id="timer"></div>
                                    <div id='play-btn' class=''
                                        onClick={() => {
                                            this.audio.play();
                                            this.flipPlaybtn();
                                        }}>
                                    </div>
                                <div class='disappear' id='pause-btn'
                                        onClick={() => {
                                            this.audio.pause();
                                            this.flipPausebtn();
                                        }}>
                                    </div>
                                </div>
                                <div class='audio-label'>
                                    <div class='weekly-label'>
                                        <h3 class='weekly'>BandChamp Weekly</h3>
                                        <div class='date'>{this.time()}</div>
                                    </div>
                                    <div class='lower-label'>
                                        <div class='afan'>past shows</div>
                                    </div>
                                    <div class='feature-artist'></div>
                                    <div class='hosts'></div>
                                </div>

                            <input ref={ref => this.seekbar = ref} type='range' min='0' step='0.01' id='audio-track'
                                onChange ={() => 
                                    this.audio.currentTime = this.seekbar.value
                                }>
                            </input>
                            <div class='timer'>
                            <span id="curTimeText">{ct}</span>/<span id="durTimeText">{dur}</span>
                            </div>
                        </div>
                    <div class='sidebar-container'>
                        <img src={plist[6]} class='building-image' />
                            <div id='building-image'>Idris Ickamoor and the Pyramids continue their musical journey</div>
                        <img src={plist[2]} class='cloud-image' />
                            <div id='cloud-image'>This Friday, support artists all over the world impacted by COV-ID 19</div>
                        <img src={plist[5]} class='lake-image' />
                            <div id='lake-image'>The Best Lo-Fi chill-hop beats by BandChamp</div>
                    </div>
                </div>
                <Carousel />
            </div>
        )  
    }
}


export default SongShow;