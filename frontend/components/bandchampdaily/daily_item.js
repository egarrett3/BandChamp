import React from 'react'

const DailyItem = props => {

    return (
        <div id='showcase'>
            <img src={props.song.photo_url} id='showcase-pic' />
            <div id="frame">
                <div>
                    <div>Lorem ipsum. Veni vidi vici. alia iacta est.</div>
                    <div>{props.song.title}</div>
                </div>
                <div>FEATURE</div>
            </div>
        </div>
    )

}

export default DailyItem