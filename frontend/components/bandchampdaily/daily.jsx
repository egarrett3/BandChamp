import React from 'react'
import DailyItem from './daily_item'
import DailyItems from './daily_items'
// import Carousel from "react-bootstrap/Carousel";

class Daily extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
        
    }
  }

  describers(id) {
    switch (id) {
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


  render() {

    let that = this;

    return (
        <div id="bandchamp-daily">
          <h3 id="daily-title">BANDCHAMP DAILY</h3>
            <div id="song-collage">
            
            {this.props.albums.map(function (album, idx) {
              if (idx === 0) {
                return <DailyItem key={idx} album={album} descrip={that.describers(album.id)}/>;
              }
            })}
            {this.props.albums.map(function (album, idx) {
              if (idx > 0 && idx < 7)
              return <DailyItems key={idx} album={album} id={album.id} descrip={that.describers(album.id)}/>;    
            })}
            
          </div>
        </div>
    );
  }
}

export default Daily


