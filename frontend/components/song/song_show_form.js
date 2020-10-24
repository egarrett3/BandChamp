import React from 'react';
import SellingItems from '../carousel/carousel';
import FooterItem from '../footer/footer';
import Daily from '../bandchampdaily/daily';
import GreetingContainer from "../greeting/greeting_container";
import SongSwitch from './song_switch';
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

    whichOne() {
      const plist = this.props.songs.map((song) => song.photo_url);
      const songlist = this.props.songs.map((song) => song);

      const swing = !this.props.song ? (
        <div
          className={`img-container ${
            this.currentUsr() ? "adjust-small" : "adjust-large"
          }`}
        >
          <div className="graf-container">
            <img src={plist[0]} className="graffiti-image" />
            <AudioPlayer songs={this.props.songs} />
          </div>
          <div className="sidebar-container">
            {this.props.songs.map(function(song, idx) {
              if (idx > 0 && idx < 4) {
                return <SideContainer key={idx} song={song} />;
              }
            })}
          </div>
        </div>
      ) : (<SongSwitch />)

      return swing
    }

    render() {
    
        return (
          <div>
            <GreetingContainer />
            {this.whichOne()}
            <SellingItems songs={this.props.songs} />
            <Daily songs={this.props.songs} />
            <FooterItem />
          </div>
        );  
    }
}


export default SongShow;