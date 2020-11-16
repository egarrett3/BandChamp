import React from 'react'
import FooterItem from "../footer/footer";
import GreetingContainer from "../greeting/greeting_container";
import AlbumAudioPlayer from './album_audio_player';
import DownloadLink from './download_link';
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class AlbumShow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
          id : 1,
          counter : 0
        };
      this.nextSong = this.nextSong.bind(this);
      this.previousSong = this.previousSong.bind(this);
        
    }

    componentDidMount() {
      window.scroll(0,0);
      this.props.fetchSongs(this.props.match.params.albumId);
      this.props.fetchAlbum(this.props.match.params.albumId);
    }

  nextSong(songListLength) {
    if (this.state.counter < songListLength - 1) {
      this.setState({
        counter: this.state.counter + 1
      })
    }
    // this.loadSongURL(this.props.song_urls[this.state.counter]) 

  }

  previousSong() {
    if (this.state.counter >= 1) {
      this.setState({
        counter: this.state.counter - 1
      })
    }
    // this.loadSongURL(this.props.song_urls[this.state.counter]) 

  }

    // loadSongURL(song_src) {
    //   if (document.getElementById('src')) {
    //     if (this.props.album) {
    //         document.getElementById('src').src = song_src;
    //         document.getElementById('indi').load();
    //     }
    //   }
    // }

    render() {
      
        const photo_urls = this.props.album.map(song => song.photo_url);
        const song_urls = this.props.songs.map(song => song.song_url);
        const song_titles = this.props.songs.map(song => song.song_title);
        const AlLength = this.props.songs.length
        const title = this.props.album.map(song => song.album_title);
        // const title = this.props.album.album_title;
        // const song_url = this.props.album.song_url;
        
        return (
          <>
            <GreetingContainer />
            <div id="song-page">
              <div id="song-header"></div>
              <div id="single-track">
                <div id="music-community">
                  {/* <div className="song-tab">music</div>
                  <div className="song-tab">community</div> */}
                </div>

                <div id="song-info">
                  <div id="album-track-title">
                    <div id="song-info-title">
                      <div>{title[0]}</div>
                    </div>
                    <div id="trackANDalbum">
                      <div id="musicPlayerTrack">
                        <div>
                            {/* {this.loadSongURL(song_urls[0])}
                          <audio id="indi" controls>
                            <source
                              id ='src'
                              src={song_urls[0]}
                              type="audio/mp3"
                            />
                          </audio> */}
                          <div id='full-package'>
                            <AlbumAudioPlayer 
                              song_url={song_urls[this.state.counter]} 
                              song_title={song_titles[this.state.counter]}
                            />
                            <div id='space-it-out'>
                              <div className='next-song-arrow' onClick={() => this.previousSong()}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                              </div>
                              <div className='next-song-arrow' onClick={() => this.nextSong(AlLength)}>
                                <FontAwesomeIcon icon={faChevronRight} />
                              </div>
                            </div>
                          </div>
                          <ol id='songLinkList'>
                            {this.props.album.map((song,idx) => 
                              <DownloadLink key={idx} title={song.title} url={song.song_url} />
                            )}
                          </ol>
                          {/* <UploadLink /> */}
                          
                        </div>
                        {/* <div className="digital-track">Digital Track </div>
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
                        <div className="digital-track">all rights reserved</div> */}
                      </div>
                      <div id="album-picture">
                        <div>
                          <img src={photo_urls[0]} id="album-picture-frame" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="discogrpahy"></div>
                </div>
              </div>
            </div>
            <FooterItem />
          </>
        );
    }
}

export default AlbumShow;