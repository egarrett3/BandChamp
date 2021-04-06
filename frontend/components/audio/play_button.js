import React from 'react';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PlayButton = ({loading, toggleButton}) => {

    return (
      <>
        {!loading ? 
            (<div 
            id="play-btn2"
            onClick={toggleButton}>
            </div>) 
            :
        <FontAwesomeIcon icon={faSpinner} />}
      </>
    );
};


export default PlayButton