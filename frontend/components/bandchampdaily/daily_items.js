import React from 'react'
import { Link } from "react-router-dom";


const DailyItems = props => {
    debugger
    return (
        <Link className='album-page' to={{
            pathname:`/songPage/${props.album.id}`
        }}>
            <img src={props.album.photo_url} className='alb-pics d-block'/>
            <div className='frames'>
                <div>
                    <div className='descriptions'>{props.descrip}</div>
                    <div className="sng-title">{props.album.title}</div>
                </div>
                <div className="feature">FEATURE</div>
            </div>
        </Link>
    )
}

export default DailyItems