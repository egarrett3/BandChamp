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
          counter : 0,
        };
      // this.nextSong = this.nextSong.bind(this);
      // this.previousSong = this.previousSong.bind(this);
        
    }

    componentDidMount() {
      window.scroll(0,0);
      debugger
      this.props.fetchSongs(this.props.match.params.songId)
      this.props.fetchAlbum(this.props.match.params.songId)
    }

    handleSubmit(e) {
      e.preventDefault();
      const album_id = this.props.match.params.songId;
      let title = e.currentTarget.files[0].name.split('.').slice(0, -1).join('.');
      const song = new FormData();
      song.append('song[sg]', e.currentTarget.files[0]);
      song.append('song[title]', title);
      song.append('song[album_id]', album_id);
      this.props.createSong(song, album_id).then(() =>  this.props.fetchSongs(this.props.match.params.songId));
    }

    render() {
        const photo_url = this.props.album.photo_url;
        const title = this.props.album.album_title;
        // const AlLength = this.props.songs.length;

        debugger
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
                      <div>{title}</div>
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
                            <AlbumAudioPlayer titles={this.props.songs.map(song => song.title)} songs={this.props.songs}/>
                          </div>
                          {/* <div id='space-it-out'>
                            <button className='next-song-arrow' onClick={() => this.previousSong()}>
                              <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <button className='next-song-arrow' onClick={() => this.nextSong(AlLength)}>
                              <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                          </div> */}
                          <ol id='songLinkList'>
                            {this.props.songs.map((song,idx) => 
                              <DownloadLink key={idx} title={song.title} url={song.song_url} />
                            )}
                          </ol>
                          <input type='file'
                            name="file" id="file"
                            className="inputfile"
                            onInput={(e) => { this.handleSubmit(e) }} />
                          <label htmlFor='file'>Upload</label>
                          
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
          </>
        );
    }
}

export default AlbumShow;