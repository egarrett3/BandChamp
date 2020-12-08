import React from 'react'
import FooterItem from "../footer/footer";
import GreetingContainer from "../greeting/greeting_container";
import AlbumAudioPlayer from './album_audio_player';
import UserAlbums from './user_albums';
import DownloadLink from './download_link';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      counter: 0,
      show: false,
      songs: []
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
    this.props.fetchAlbum(this.props.match.params.songId).then((album) => {
      debugger
      if (album.album.albums.length > 1) {
        const albs = album.album.albums ? album.album.albums.length : 0;
          for (let i=1;i<albs;i++) {
            debugger
            this.props.fetchAlbum(album.album.albums[i].id)
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

 
  render() {
    const showAlb = this.props.albums.filter((album) => this.props.match.params.songId == album.id)
    const photo_url = this.props.albums[this.props.match.params.songId]
      ? this.props.albums[this.props.match.params.songId].photo_url
      : "";
    const title = this.props.albums[this.props.match.params.songId]
      ? this.props.albums[this.props.match.params.songId].title
      : "";
    let bool = false;

    let alb = this.props.albums[this.props.match.params.songId]
      ? this.props.albums[this.props.match.params.songId].albums
      : [];

    let username = this.props.albums[this.props.match.params.songId]
      ? this.props.albums[this.props.match.params.songId].user.username
      : "";

    debugger

    if (alb) {
      bool = alb.filter((album) => this.props.match.params.songId == album.id);
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
                      </ol>
                      {bool.length ? (
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
                  </div>
                </div>
              </div>
              <div id="discogrpahy"></div>
            </div>
            <div className="user-albums">
              {this.props.albums.map(function (album, idx) {
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
        <FooterItem />
      </>
    );
  }
}

export default AlbumShow;