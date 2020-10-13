import React from 'react'
import { fetchSg } from '../../actions/song_actions';
import { Link } from "react-router-dom";


const DailyItems = props => {

    return (
        <Link className='album-page' to={{
            pathname:`/songPage/${props.song.id}`
        }}>
            <img src={props.song.photo_url} className='alb-pics d-block'/>
            <div className='frames'>
                <div>
                    <div className='descriptions'>Lorem ipsum. Veni vidi vici. alia iacta est.</div>
                    <div className="sng-title">{props.song.title}</div>
                </div>
                <div className="feature">FEATURE</div>
            </div>
        </Link>
    )

}

export default DailyItems