import React from 'react'
import FooterItem from "../footer/footer";
import GreetingContainer from "../greeting/greeting_container";


class AlbumShow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
          id: localStorage.getItem("id")
            ? JSON.parse(localStorage.getItem("id"))
            : [],
        };
        
    }

    componentDidMount() {
        let id = this.props.location.aboutProps.id ? this.props.location.aboutProps.id : this.state.id;
        this.props.fetchSong(id)
        if (this.props.location.aboutProps.id) {localStorage.setItem('id',(this.props.location.aboutProps.id))};
    }

    render() {
        let id = this.props.location.aboutProps.id ? this.props.location.aboutProps.id : this.state.id
        id = (id - 1) % 7;
        const photo_url = this.props.songs[id].photo_url;
        const song_url = this.props.songs[id].song_url;
        const title = this.props.songs[id].title;
        
        debugger
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
                          <audio id="indi" controls>
                            <source src={song_url} type="audio/mp3" />
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
                          September 3, 2020 <br /><br />
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