import React from 'react';

class SideContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {

        return (
          <li className="side-img-container">
            <img
            src={this.props.song.photo_url}
            className="building-image"
            onClick={() => this.props.openSong(song)}
            />
            <div className="building-image-words">
              <div>Lorem Ipsum</div>
              <div>Veni Vidi Vici. Alia Iacta Est.</div>
            </div>
          </li>
        );
    }
    
}

export default SideContainer;