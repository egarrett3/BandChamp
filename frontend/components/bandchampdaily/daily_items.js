import React from 'react'

const DailyItems = props => {
    
    return (
        <div className='album-page'>
            <img src={props.song.photo_url} className='alb-pics'/>
            <div className='frames'>
                <div>
                    <div className='descriptions'>Lorem ipsum. Veni vidi vici. alia iacta est.</div>
                    <div className="sng-title">{props.song.title}</div>
                </div>
                <div className="feature">FEATURE</div>
            </div>
        </div>
    )

}

export default DailyItems