import React from "react";

class UserAlbums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.routeAlbumPath = this.routeAlbumPath.bind(this);
  }

  routeAlbumPath(albumId) {
    // let newPath
    if (albumId) {
      // window.location.href/Pathname -> next album, clearSongs, fetchSongs
      window.location.href = `/#/SongPage/${albumId}`
    } else {
      // fnc ( if no more albums, route to usrProf page )
      window.location.href = "/#/usrprofile"
    }
    // return newPath
  }

  render() {
    const bool = this.props.bool;
    
    return (
      <li className="album-page2">
        <div className="album-title-delete">
          <span
            className={bool ? "delete-album" : 'disappear'}
            onClick={() => {
              this.props.deleteAlbum(this.props.id)
            }}
            //need to call pathname to adjacent album after deleteAlbum
          >
            DELETE
          </span>
        </div>
        <span 
          className="img-title"
          onClick={() => {
            this.routeAlbumPath(this.props.id);
          }}
        >{this.props.title}</span>
        <img
          className="img-block2"
          src={this.props.photo_url}
          onClick={() => {
              this.routeAlbumPath(this.props.id);
          }}
        />
      </li>
    );
  }
}

export default (UserAlbums);
