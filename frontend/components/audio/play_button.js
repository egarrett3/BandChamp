import React from 'react';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PlayButton = ({loading, playTrack, sng, song, btnType}) => {

  function determineSong() {
    if (sng && sng.id === song.id) {
      return playTrack()
    } else {
      return playTrack(sng)
    }
  }

    return (
      <>
        {!loading ? 
            (<div 
            id={"play-"+btnType}
            onClick={determineSong}>
            </div>) 
            :
        <FontAwesomeIcon icon={faSpinner} />}
      </>
    );
};


export default PlayButton