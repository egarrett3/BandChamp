import React from 'react'
import FooterItem from "../footer/footer";
import Greeting from '../greeting/greeting';
import GreetingContainer from "../greeting/greeting_container";


class AlbumShow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {

        }
        
    }

    render() {
        return (
          <div>
            <GreetingContainer />
            <div id="song-page">
              <div id="song-header"></div>
              <div id="single-track">
                <div id="music-community">
                  <div className="song-tab">music</div>
                  <div className="song-tab">community</div>
                </div>

                <div id="song-info">
                  <div id="album-track-title">
                    <div id="song-info-title">
                      <div>{this.props.currentUser.username}</div>
                      <div>from {this.props.currentUser.username}</div>
                    </div>
                    <div id="trackANDalbum">
                      <div id="musicPlayerTrack">
                        <div>
                            
                        </div>
                        <div>Digital Track Streaming + Download</div>
                        <div>
                          Includes unlimited streaming via the free Bandcamp
                          app, plus high-quality download in MP3, FLAC and more.
                          Buy Digital Track €3 EUR or more Send as Gift{" "}
                        </div>
                        <div>Buy the Full Digital Album</div>
                        <div>
                          from Mousse T´s Classic Remixes Vol. 1, released
                          September 3, 2020
                        </div>
                        <div>all rights reserved</div>
                      </div>
                      <div id="album-picture">
                          <div>

                          </div>
                      </div>
                    </div>
                  </div>
                  <div id="discogrpahy"></div>
                </div>
              </div>
            </div>
            <FooterItem />
          </div>
        );
    }
}

export default AlbumShow;