import React from 'react';
import SellingItems from '../carousel/carousel';
import FooterItem from '../footer/footer';
import Daily from '../bandchampdaily/daily';
import GreetingContainer from "../greeting/greeting_container";
import AudioPlayer from './audio_player';


class SongShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
    
    componentDidMount() {
        this.props.fetchSongs();
    }

    LoggedIn() {
        this.setState(() => ({
            user: this.currentUsr()
        }))
    }

    currentUsr() {
        let bool;
        if (this.props.currentUser) {
            bool = true
        } else {
            bool = false
        }
        return bool;
    }


    render() {
       debugger
        // const slist = this.props.songs.map(song => song.song_url)
        const plist = this.props.songs.map(song => song.photo_url)

        // const ct = this.getTime(this.state.currentTime);
        // const dur = this.getTime(this.state.duration);
        
        return (
          <div>
            <GreetingContainer />
            <div
              className={`img-container ${
                this.currentUsr() ? "adjust-small" : "adjust-large"
              }`}
            >
              <div className="graf-container">
                <img src={plist[0]} className="graffiti-image" />
                <AudioPlayer songs={this.props.songs} />
                {/* <div id="audio-player">
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
                </div> */}
              </div>
              <div className="sidebar-container">
                <img src={plist[6]} className="building-image" />
                <div className="building-image-words">
                  <div>Lorem Ipsum</div>
                  <div>Veni Vidi Vici. Alia Iacta Est.</div>
                </div>
                <img src={plist[4]} className="cloud-image" />
                <div className="cloud-image-words">
                  <div>Lorem Ipsum</div>
                  <div>Ad Astra per Aspera</div>
                </div>
                <img src={plist[5]} className="lake-image" />
                <div className="lake-image-words">
                  <div>Lorem Ipsum</div>
                  <div className='smaller-print'>Audentes Fortuna Iuvat</div>
                </div>
              </div>
            </div>
            <SellingItems songs={this.props.songs} />
            <Daily songs={this.props.songs} />
            <FooterItem />
          </div>
        );  
    }
}


export default SongShow;