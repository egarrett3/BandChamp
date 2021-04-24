import React from "react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DownloadLink = ({url}) => {

    return (
        <>
            <a href={url} target="_blank" rel="noopener noreferrer" className='link-link' download>
                <FontAwesomeIcon icon={faDownload} />
            </a>
        </>
    );
}

export default DownloadLink;