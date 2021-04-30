import React, { useState, useEffect } from "react";
import PauseButton from './pause_button';
import PlayButton from './play_button';

const AudioButton = ({pauseTrack,playTrack,btnType,classType,sng,song,toggle,idx}) => {
  const [active, setActive] = useState(toggle);
 
  useEffect(() => {
    if (sng.id === song.id) {
      setActive(toggle)
    }
  }, [toggle]);
    
  return (
    <div className={classType}>
      {active ? (
        <PauseButton btnType={btnType} pauseTrack={pauseTrack} />          
      ) : (
        <PlayButton btnType={btnType} playTrack={playTrack} sng={sng} song={song} idx={idx}/>
      )}
    </div>
  );
};

export default AudioButton;
