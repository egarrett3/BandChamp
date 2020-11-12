import React from 'react';
import SellingItems from '../carousel/carousel';
import FooterItem from '../footer/footer';
import Daily from '../bandchampdaily/daily';
import GreetingContainer from "../greeting/greeting_container";
import AudioPlayer from './audio_player';
import SideContainer from './sidebar_component';


class SongShow extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
           openShow: true
        }
    }
    
    componentDidMount() {
        // this.props.fetchSongs();
        this.props.fetchAlbums();
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

    date() {
      let dt = new Date();
      let year = dt.getFullYear();
      let month = new Array();
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
      let dtStr = `${month[dt.getMonth()]}, ${year}`;
      return dtStr;
    }

    render() {
      const albumList = this.props.albums.map((album) => album.photo_url);
      // let album = this.props.album ? this.props.album : albumList;
      // const songlist = this.props.songs.map((song) => song);

        return (
          <div>
            <GreetingContainer />
            <div
              className={`img-container ${this.currentUsr() ? "adjust-small" : "adjust-large"
                }`}
            >
              <div className="graf-container">
                <div className='selection-container'>
                  <div id='bandchamp-selection'>
                    Selection of BandChamp's Classics: {this.date()}
                  </div>
                  {/* <button id='read-more'>
                    read more 
                    <span id="arrow">&#8594;</span>
                  </button> */}
                </div>
                <img src={!this.props.switchSong ? albumList[0] : albumList[this.props.switchSong-1] }
                  className={!this.props.switchSong ? "graffiti-image" : "full-screen-img"}
                />
                {!this.props.switchSong ? <></> : <button onClick={this.props.closeSong} id="close-audio">
                  X CLOSE SONG
                </button>}
                {!this.props.switchSong ? <></> : 
                  <AudioPlayer songs={!this.props.switchSong ? '' : this.props.album[0].song_url } />
                }
              </div>
              <ul className="sidebar-container">
                {this.props.albums.map(function (album, idx) {
                  if (idx < 3) {
                    // this.props.fetchAlbum(idx);
                    return <SideContainer key={idx} album={album} />;
                  }
                })}
              </ul>
            </div>
            <SellingItems albums={this.props.albums} />
            <Daily albums={this.props.albums} />
            <FooterItem />
          </div>
        );  
    }
}


export default SongShow;