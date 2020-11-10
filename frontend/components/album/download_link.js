import React from "react";

class DownloadLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0,
            duration: 0,
            user: false,
        };
    }

    

    render() {
        const title = this.props.title;
        const url = this.props.url;

        return (
            <>
                <li className='song-links'>
                    <div>{title}</div>
                    <a href={url} target="_blank" rel="noopener noreferrer" className='link-link' download>
                        download 
                    </a>
                </li>
                    
            </>
        );
    }
}

export default DownloadLink;
