import React from 'react'

const describers = (props) => {
    switch (props.song.id) {
        case (1):
            return 'The song of your dreams'
        case (2):
            return 'Who else but the best in their genre'
        case (3):
            return 'So good, So raw'
        case (4):
            return 'The strongest case for song of the year'
        case (5):
            return 'A crowd favorite'
        case (6):
            return 'Beauty to my Brains'
        case (7):
            return 'A top classic'
        case (8):
            return 'A bandchamp favorite'
        default:
            return "This band's number one hit"
    }
}

const DailyItem = props => {
    

    return (
        <div id='showcase'>
            <img src={props.song.photo_url} id='showcase-pic' />
            <div id="frame">
                <div>
                    <h2 id='main-title'>{props.descrip}</h2>
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