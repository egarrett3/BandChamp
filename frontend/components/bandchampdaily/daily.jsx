import React from 'react'
import {connect} from 'react-redux'
import { fetchSong } from '../../util/song_api_util'
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
            <div id="bandchamp-daily">
                
                <h3 id="daily-title">BANDCHAMP DAILY</h3>

                <div id="song-collage">
                    {this.props.songs.map(function (song, idx) {
                        if (idx === 0) {
                            return <DailyItem key={idx} song={song} />
                        }
                    })}
                    
                    {this.props.songs.map(function (song, idx) {
                        return <DailyItems key={idx} song={song} id={song.id}/>    
                    })}
                    
                </div>
            </div>
        )
    }

}



export default Daily


