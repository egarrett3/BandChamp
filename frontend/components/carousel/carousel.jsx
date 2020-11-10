import React from 'react';
import { connect } from 'react-redux';
import { fetchSgs } from '../../actions/song_actions';
import CarouselItem from './carousel_item';


class SellingItems extends React.Component {
    constructor(props) {
      super(props); 
        this.state = {
            
        }
    }

    render() {
      
        return (
          <div className="carousel-component">
            <div className="payment">
              <div className="dot-grid">
                <div className="line">
                  <span className="dot1"></span>
                  <span className="dot2"></span>
                  <span className="dot3"></span>
                  <span className="dot4"></span>
                  <span className="dot5"></span>
                  <span className="dot6"></span>
                  <span className="dot7"></span>
                  <span className="dot8"></span>
                </div>
                <div className="line">
                  <span className="dot1"></span>
                  <span className="dot2"></span>
                  <span className="dot3"></span>
                  <span className="dot4"></span>
                  <span className="dot5"></span>
                  <span className="dot6"></span>
                </div>
                <div className="line">
                  <span className="dot1"></span>
                  <span className="dot2"></span>
                  <span className="dot3"></span>
                  <span className="dot4"></span>
                  <span className="dot5"></span>
                  <span className="dot6"></span>
                  <span className="dot7"></span>
                  <span className="dot8"></span>
                </div>
              </div>

              <div className="payment-text">
                Fans have paid artists{" "}
                <span className="highlighted">$557 million</span> using
                Bandchamp, and{" "}
                <span className="highlighted">$12.8 million</span> in the last
                30 days alone.
              </div>
              <div className="dot-grid">
                <div className="line">
                  <span className="dot8"></span>
                  <span className="dot7"></span>
                  <span className="dot6"></span>
                  <span className="dot5"></span>
                  <span className="dot4"></span>
                  <span className="dot3"></span>
                  <span className="dot2"></span>
                  <span className="dot1"></span>
                </div>
                <div className="line">
                  <span className="dot6"></span>
                  <span className="dot5"></span>
                  <span className="dot4"></span>
                  <span className="dot3"></span>
                  <span className="dot2"></span>
                  <span className="dot1"></span>
                </div>
                <div className="line">
                  <span className="dot8"></span>
                  <span className="dot7"></span>
                  <span className="dot6"></span>
                  <span className="dot5"></span>
                  <span className="dot4"></span>
                  <span className="dot3"></span>
                  <span className="dot2"></span>
                  <span className="dot1"></span>
                </div>
              </div>
            </div>
            <ul className="album-block">
              {this.props.albs.map(function(album, idx) { 
                if (idx > 7 && idx < 15) {
                  return <CarouselItem key={idx} album={album} />
                }
              })}
            </ul>
          </div>
        );
    }
}


const mapStateToProps = ({ entities: { songs, albums } }) => {
    return {
        sng: Object.values(songs),
        albs: Object.values(albums)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSongs: () => dispatch(fetchSgs()),
        fetchAlbums: () => dispatch(fetchAls())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SellingItems)