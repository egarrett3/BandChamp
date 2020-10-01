import React from 'react'

const DailyItem = props => {

    return (
        <div id='showcase'>
            <img src={props.song.photo_url} id='showcase-pic' />
            <div id="frame">
                <div>
                    <h2 id='main-title'>Lorem ipsum. Veni vidi vici. Alia iacta est.</h2>
                    <div id='by-title'> by {props.song.title}</div>
                    <div id='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </div>
                </div>
                <div className="feature">FEATURE</div>
            </div>
        </div>
    )

}

export default DailyItem