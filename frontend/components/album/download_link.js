import React from "react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                    <div className='song-actions'>
                        <a href={url} target="_blank" rel="noopener noreferrer" className='link-link' download>
                            <FontAwesomeIcon icon={faDownload} />
                        </a>
                        <div
                        className={this.props.deleteSong ? 'delete-link-icon' : 'disappear'}
                        onClick={() => this.props.deleteSong(this.props.album_id,this.props.id)}
                        >X</div>
                    </div>
                </li>
            </>
        );
    }
}

export default DownloadLink;