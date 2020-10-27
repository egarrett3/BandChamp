import React from 'react'
import { Link } from 'react-router-dom'


const DailyItem = props => {
    

    return (
        <Link id='showcase' to={{
            pathname: `/songPage/${props.song.id}`
        }}>
            <img src={props.song.photo_url} id='showcase-pic' />
            <div id="frame">
                <div>
                    <h2 id='main-title'>{props.descrip}</h2>
                    <div id='by-title'> Title: {props.song.title}</div>
                    <div id='paragraph'>Cowboy Bebop, one of the most critically 
                    acclaimed anime, will definitely knock your socks off with its 
                    unique style of music. One of the best examples of this is 
                    the show's opening―Tank!
                    </div>
                </div>
                <div className="feature">FEATURE</div>
            </div>
        </Link>
    )

}

export default DailyItem