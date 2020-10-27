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
        this.props.fetchSongs();
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
    
      const plist = this.props.songs.map((song) => song.photo_url);
      // const songlist = this.props.songs.map((song) => song);

        return (
          <div>
            <GreetingContainer />
            <div
              className={`img-container ${this.currentUsr() ? "adjust-small" : "adjust-large"
                }`}
            >
              <div className="graf-container">
                <div id='bandchamp-selection'>
                  Selection of BandChamp's Classics: {this.date()}
                </div>
                <button id='read-more'>
                  read more 
                  {/* <span id="arrow">&#8594;</span> */}
                </button>
                <img src={!this.props.song ? plist[0] : this.props.song.photo_url}
                  className={!this.props.song ? "graffiti-image" : "full-screen-img"}
                />
                {!this.props.song ? <></> : <button onClick={this.props.closeSong} id="close-audio">
                  X CLOSE SONG
                </button>}
                {!this.props.song ? <></> : 
                  <AudioPlayer songs={!this.props.song ? this.props.songs : [this.props.song] } />
                }
              </div>
              <ul className="sidebar-container">
                {this.props.songs.map(function (song, idx) {
                  if (idx > 0 && idx < 4) {
                    return <SideContainer key={idx} song={song} />;
                  }
                })}
              </ul>
            </div>
            <SellingItems songs={this.props.songs} />
            <Daily songs={this.props.songs} />
            <FooterItem />
          </div>
        );  
    }
}


export default SongShow;