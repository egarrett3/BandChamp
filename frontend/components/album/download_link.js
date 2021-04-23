import React from "react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DownloadLink = ({url}) => {

    return (
        <>
            <li className='song-links'>
                <div className='song-actions'>
                    <a href={url} target="_blank" rel="noopener noreferrer" className='link-link' download>
                        <FontAwesomeIcon icon={faDownload} />
                    </a>
                </div>
            </li>
        </>
    );
}

export default DownloadLink;