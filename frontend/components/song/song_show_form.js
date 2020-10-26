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

    // whichOne() {
    //   const plist = this.props.songs.map((song) => song.photo_url);
    //   const songlist = this.props.songs.map((song) => song);

    //   const swing = !this.props.song ? (
    //     <div
    //       className={`img-container ${
    //         this.currentUsr() ? "adjust-small" : "adjust-large"
    //       }`}
    //     >
    //       <div className="graf-container">
    //         <img src={!this.props.song ? plist[0] : this.props.song.photo_url} 
    //           className={!this.props.song ? "graffiti-image" : "full-screen-img"} 
    //         />
    //         {!this.props.song ? <></> : <div onClick={closeSong} id="close-audio">
    //           CLOSE SONG
    //         </div>}
    //         <AudioPlayer songs={this.props.songs} />
    //       </div>
    //       <ul className="sidebar-container">
    //         {this.props.songs.map(function(song, idx) {
    //           if (idx > 0 && idx < 4) {
    //             return <SideContainer key={idx} song={song} />;
    //           }
    //         })}
    //       </ul>
    //     </div>
    //   ) : (<SongSwitch />)

    //   return swing
    // }

    render() {
    
      const plist = this.props.songs.map((song) => song.photo_url);
      const songlist = this.props.songs.map((song) => song);

        return (
          <div>
            <GreetingContainer />
            <div
              className={`img-container ${this.currentUsr() ? "adjust-small" : "adjust-large"
                }`}
            >
              <div className="graf-container">
                <img src={!this.props.song ? plist[0] : this.props.song.photo_url}
                  className={!this.props.song ? "graffiti-image" : "full-screen-img"}
                />
                {!this.props.song ? <></> : <button onClick={this.props.closeSong} id="close-audio">
                  X CLOSE SONG
                </button>}
                <AudioPlayer songs={this.props.songs} />
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