import React from 'react';
import SellingItems from '../carousel/carousel';
import FooterItem from '../footer/footer';
import Daily from '../bandchampdaily/daily';
import GreetingContainer from "../greeting/greeting_container";
import SongSwitch from './song_switch';
import AudioPlayer from './audio_player';


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
            <img src={plist[6]} className="building-image" onClick={() => this.props.openSong(songlist[6])}/>
            <div className="building-image-words">
              <div>Lorem Ipsum</div>
              <div>Veni Vidi Vici. Alia Iacta Est.</div>
            </div>
            <img src={plist[4]} className="cloud-image" />
            <div className="cloud-image-words">
              <div>Lorem Ipsum</div>
              <div>Ad Astra per Aspera</div>
            </div>
            <img src={plist[5]} className="lake-image" />
            <div className="lake-image-words">
              <div>Lorem Ipsum</div>
              <div className='smaller-print'>Audentes Fortuna Iuvat</div>
            </div>
          </div>
        </div>
      ) : (<SongSwitch />)

      return swing
    }

    render() {
        const plist = this.props.songs.map(song => song.photo_url)
        const songlist = this.props.songs.map(song => song)
        
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