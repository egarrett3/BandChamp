import React from 'react'
import FooterItem from "../footer/footer";
import GreetingContainer from "../greeting/greeting_container";
import AlbumAudioPlayer from './album_audio_player';
import UserAlbums from './user_albums';
import { faChevronDown, faChevronUp, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      counter: 0,
      show: false,
      songs: [],
      expand: true,
      uploading: false,
      ready: false,
      play: false,
    };
  
  }

  componentDidMount() {
    // window appears at top of the page
    window.scroll(0, 0); 
    this.props.clearAlbums();
    //fetch album click on/passed through pathname and associated albums through user of clicked on album
    
    this.props.fetchAlbum(this.props.match.params.songId).then((album) => {
      if (album.album.albums.length > 1) {
        const albs = album.album.albums ? album.album.albums.length : 0;
          for (let i=0;i<albs;i++) {
            if (album.album.albums[i].id === this.props.match.params.songId) {
            } else {
              this.props.fetchAlbum(album.album.albums[i].id);
            }
          }
        }
        
        if (!this.props.currentUser) {this.props.fetchUser(album.album.user.id)}
        if (!album.album.has_song) {
          this.props.fetchSongs(this.props.match.params.songId).then(() => {
            this.props.fetchSong(this.props.match.params.songId,0);
          });
        }
      })
  }

  componentWillUnmount() {
    this.props.clearSongs();
    this.props.clearSong();
  }

  componentDidUpdate(prevProps) {
    let albId = this.props.match.params.songId
    let ids = this.props.album.map(album => album.id)
    let currentAl = this.props.album.filter((album) => (album.id === parseInt(albId)))
    if (prevProps.match.params.songId !== albId) {
      this.props.clearSongs()
      this.props.clearSong()
      if (!currentAl[0].has_song) {
        this.props.fetchSongs(albId);
        this.props.fetchSong(albId, 0);
      }
    } 
    if (prevProps.album.length > this.props.album.length && (!(ids.includes(parseInt(albId))))) {
      for (let i = 0; i < this.props.album.length; i++) {
        if (this.props.album[i]) {
          window.location.href = `/#/SongPage/${this.props.album[i].id}`;
        } else if (this.props.album.length < 1) {
          window.location.href = "/#/usrprofile";
        }
      }
    }
    if (this.props.song.id === "undefined") {
      this.props.fetchSong(albId, 0);
    }
  }

  handleSubmit(e) {
    this.setState({
      uploading:true
    })
    e.preventDefault();
    const album_id = this.props.match.params.songId;
    let title = e.currentTarget.files[0].name.split(".").slice(0, -1).join(".");
    const song = new FormData();
    song.append("song[sg]", e.currentTarget.files[0]);
    song.append("song[title]", title);
    song.append("song[album_id]", album_id);
    this.props.createSong(song, album_id).then(() => {
      this.setState({
        uploading: false
      })
    })
  }

  render() {
    let showAlb = false;
    let lb = [];
    let bool = false;
    
    //when props exist, find id of album to be shown then key into to access album obj (showAlb)
    if (this.props.album) {     
      lb = this.props.album.filter((album) => this.props.match.params.songId == album.id) 
      showAlb = lb[0]
    }

    let photo_url = showAlb
      ? showAlb.photo_url
      : "";
    
    let title = showAlb
      ? showAlb.title
      : "";
      
    let username
    if (showAlb) {
      username = showAlb.user
        ? showAlb.user.username
        : ""
    }

    let user = this.props.currentUser 
      ? this.props.currentUser.username 
      : "";

    if (username && user) {
      if (user === username) {
        bool = true;
      }
    }
    
    return (
      <>
        <GreetingContainer />
        <div id="song-page">
          <div id="song-header"></div>
          <div id="single-track">
            <div id="music-community"></div>
            <div className="song-info">
              <div id="audio-title-container">
                <div id="song-info-title">
                  <div>
                    {" "}
                    {title}
                    <div className="username-for-album">
                      album by: {username}
                    </div>
                  </div>
                </div>
                <div id="musicPlayerTrack">
                  <div id="full-package">
                    <AlbumAudioPlayer
                      titles={this.props.songs.map((song) => song.title)}
                      songs={this.props.songs}
                      song={this.props.song}
                      deleteSong={bool ? this.props.deleteSong : bool}
                      album_id={this.props.match.params.songId}
                      bool={bool}
                      openSong={this.props.openSong}
                    />
                  </div>
                
                  {bool ? (
                    <div>
                      <input
                        type="file"
                        name="file"
                        id="file"
                        className="inputfile"
                        onInput={(e) => {
                          this.handleSubmit(e);
                        }}
                      />
                      {this.state.uploading ? (
                        <label htmlFor="file">
                          <FontAwesomeIcon icon={faSpinner} />
                        </label>
                      ) : (
                        <label htmlFor="file">Upload Song</label>
                      )}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>

              <div id="trackANDalbum">
                <div id="album-picture">
                  <div>
                    <img src={photo_url} id="album-picture-frame" />
                  </div>
                  <div className="album-collection">
                    <div id="album-frame-label">{username}'s albums</div>
                    <ul className="user-albums2">
                      {this.props.album.map((album, idx) => (
                        <UserAlbums
                          key={album.id}
                          photo_url={album.photo_url}
                          title={album.title}
                          id={album.id}
                          bool={bool}
                          deleteAlbum={bool ? this.props.deleteAlbum : bool}
                          fetchSongs={this.props.fetchSongs}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterItem />
      </>
    );
  }
}

export default AlbumShow;