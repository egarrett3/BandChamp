import React from "react";
import { Link } from "react-router-dom"


class UserAlbums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  routePathonDelete(albumId) {
    let newPath
    if (albumId) {
      newPath = (
        <Link
          to={{
            pathname: `/#/SongPage/${albumId}`
          }} 
        />
      ) // window.location.href/Pathname -> next album, clearSongs, fetchSongs
    } else {
      newPath = (
        <Link
          to={{
            pathname: "/usrprofile",
          }}
        />
      ); // fnc ( if no more albums, route to usrProf page )
    }
    return newPath
  }

  render() {
    
    return (
      <li className="album-page2">
        <div className="album-title-delete">
          <span className="img-title">{this.props.title}</span>
          <span
            className="delete-album"
            onClick={() => this.props.deleteAlbum(this.props.id)} 
            //need to call pathname to adjacent album after deleteAlbum
          >
            X
          </span>
        </div>
        <img
          className="img-block2"
          src={this.props.photo_url}
          onClick={() => {
            (window.location.href = `/#/SongPage/${this.props.id}`), 
              this.props.clearSongs(),
              this.props.fetchSongs(this.props.id);
          }}
        />
      </li>
    );
  }
}

export default (UserAlbums);
