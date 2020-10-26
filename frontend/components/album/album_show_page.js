import React from 'react'
import FooterItem from "../footer/footer";
import GreetingContainer from "../greeting/greeting_container";


class AlbumShow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
          id : 1
        };
        
    }

    componentDidMount() {
        this.props.fetchSong(this.props.match.params.songId)
    }

    loadSongURL() {
        if (this.props.song.song_url) {
            document.getElementById('src').src = this.props.song.song_url;
            document.getElementById('indi').load();
        }
    }

    render() {

        const photo_url = this.props.song.photo_url;
        const song_url = this.props.song.song_url;
        const title = this.props.song.title;
        
        return (
          <div>
            <GreetingContainer />
            <div id="song-page">
              <div id="song-header"></div>
              <div id="single-track">
                <div id="music-community">
                  <div className="song-tab">music</div>
                  <div className="song-tab">community</div>
                </div>

                <div id="song-info">
                  <div id="album-track-title">
                    <div id="song-info-title">
                      <div>{title}</div>
                    </div>
                    <div id="trackANDalbum">
                      <div id="musicPlayerTrack">
                        <div>
                            {this.loadSongURL()}
                          <audio id="indi" controls>
                            <source
                              id ='src'
                              src={this.props.song.song_url}
                              type="audio/mp3"
                            />
                          </audio>
                        </div>
                        <div className="digital-track">Digital Track </div>
                        <div id="streaming-download">Streaming + Download</div>
                        <div id="includes-free">
                          Includes unlimited streaming via the free Bandcamp
                          app, plus high-quality download in MP3, FLAC and more.
                        </div>
                        <div id="buy-digi-track">
                          Buy Digital Track €3 EUR or more Send as Gift{" "}
                        </div>
                        <div id="buy-full">Buy the Full Digital Album</div>
                        <div className="digital-track">
                          from Mousse T´s Classic Remixes Vol. 1, released
                          September 3, 2020 <br />
                          <br />
                        </div>
                        <div className="digital-track">all rights reserved</div>
                      </div>
                      <div id="album-picture">
                        <div>
                          <img src={photo_url} id="album-picture-frame" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="discogrpahy"></div>
                </div>
              </div>
            </div>
            <FooterItem />
          </div>
        );
    }
}

export default AlbumShow;