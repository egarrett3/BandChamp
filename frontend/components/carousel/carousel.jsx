import React from 'react';
import { connect } from 'react-redux';
import { fetchSgs } from '../../actions/song_actions';
import CarouselItem from './carousel_item';

class Carousel extends React.Component {
    componentDidMount() {
        this.props.fetchSongs();
    }

    render() {
        return (
            <div className='carousel-component'>
                <div className='payment'>
                    <div className='payment-text'>Fans have paid artists <span className='highlighted'>$557 million</span> using Bandchamp, and <span className='highlighted'>$12.8 million</span> in the last 30 days alone.</div>
                </div>
                <ul className='album-block'>
                    {
                    this.props.songs.map((song,idx) => (
                        <CarouselItem
                        key={idx}
                        song={song}
                        />
                        ))
                    }
                </ul>
            </div>
        )
    }
}


const mapStateToProps = ({ entities: { songs } }) => {
    return {
        songs: Object.values(songs)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSongs: () => dispatch(fetchSgs()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)