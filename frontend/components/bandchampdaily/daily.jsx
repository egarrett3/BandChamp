import React from 'react'
import {connect} from 'react-redux'
import DailyItem from './daily_item'
import DailyItems from './daily_items'

class Daily extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {

        return (
            <div id="bandcamp-daily">
                <h3>BandChamp Daily</h3>
                <div id="song-collage">
                    {this.props.songs.map(function (song, idx) {
                        if (idx === 0) {
                            return <DailyItem key={idx} song={song} />
                        }
                    })}
                    
                    {this.props.songs.map(function (song, idx) {
                        return <DailyItems key={idx} song={song} />
                    })}
                    
                </div>
            </div>
        )
    }

}

// const mapStateToProps = ({ entities: { songs } }) => {
//     return {
//         sng: Object.values(songs)
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchSongs: () => dispatch(fetchSgs()),
//     }
// }

export default Daily
