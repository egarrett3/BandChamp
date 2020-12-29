import React from 'react'
import FooterItem from "../footer/footer";
import GreetingContainer from "../greeting/greeting_container";
import AlbumAudioPlayer from './album_audio_player';
import UserAlbums from './user_albums';
import DownloadLink from './download_link';
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      counter: 0,
      show: false,
      songs: [],
      expand: true
    };
    this.toggleExpand = this.toggleExpand.bind(this)
  }

  componentDidMount() {
    window.scroll(0, 0); // window appears at top of the page
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
      })
      this.props.fetchSongs(this.props.match.params.songId)
  }


  componentWillUnmount() {
    this.props.clearSongs();
  }

  handleSubmit(e) {
    e.preventDefault();
    const album_id = this.props.match.params.songId;
    let title = e.currentTarget.files[0].name.split(".").slice(0, -1).join(".");
    const song = new FormData();
    song.append("song[sg]", e.currentTarget.files[0]);
    song.append("song[title]", title);
    song.append("song[album_id]", album_id);
    this.props.createSong(song, album_id)
  }

  toggleExpand() {
    this.setState((prevState) => ({
      expand : !prevState.expand
    }));
  }
 
  render() {
    let showAlb = false;
    let lb = [];
    let bool = false;

    if (this.props.album) {     //when props exist, find id of album to be shown then key into to access album obj (showAlb)
      lb = this.props.album.filter((album) => this.props.match.params.songId == album.id) 
      showAlb = lb[0]
    }
    
    let photo_url = showAlb
      ? showAlb.photo_url
      : "";

    let title = showAlb
      ? showAlb.title
      : "";
      
    let alb = showAlb
      ? showAlb.albums
      : [];

    // let albs = this.props.album
    //   ? this.props.album.albums
    //   : [];
      
    let username
    if (showAlb) {
      let username = showAlb.user
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
              <div id="album-track-title">
                <div id="song-info-title">
                  <div>
                    "{title}" posted by:
                    <span className="username-for-album"> {username}</span>
                  </div>
                </div>
                <div id="trackANDalbum">
                  <div id="musicPlayerTrack">
                    <div>
                      <div id="full-package">
                        <AlbumAudioPlayer
                          titles={this.props.songs.map((song) => song.title)}
                          songs={this.props.songs}
                        />
                      </div>
                      <ol id="songLinkList">
                        <div id="tracks">
                          Tracks
                          {this.state.expand ? <FontAwesomeIcon
                            icon={faChevronDown}
                            className="expandable"
                            onClick={() => this.toggleExpand()}
                          /> :
                          <FontAwesomeIcon
                            icon={faChevronUp}
                            className="expandable"
                            onClick={() => this.toggleExpand()}
                          /> }
                        </div>
                        <div
                          className={
                            this.state.expand ? "songListwindow" : "songList"
                          }
                        >
                          {this.props.songs.map((song, idx) => (
                            <DownloadLink
                              key={idx}
                              id={song.id}
                              deleteSong={this.props.deleteSong}
                              title={song.title}
                              url={song.song_url}
                              album_id={this.props.match.params.songId}
                            />
                          ))}
                        </div>
                      </ol>
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
                          <label htmlFor="file">Upload Song</label>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                  <div id="album-picture">
                    <div>
                      <img src={photo_url} id="album-picture-frame" />
                    </div>
                    <div>
                      <div id="album-frame-label">{username}'s albums</div>
                      <div id="album-frame">
                        <div className="user-albums2">
                          {this.props.album.map(function (album, idx) {
                            return (
                              <UserAlbums
                                key={idx}
                                photo_url={album.photo_url}
                                title={album.title}
                                id={album.id}
                              />
                            );
                          })}
                        </div>
                      </div>
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