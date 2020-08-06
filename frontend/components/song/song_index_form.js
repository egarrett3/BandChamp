import React from 'react';

class SongIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount() {
        this.props.fetchSongs();
    }
    render() {

    }
}

export default SongIndex;