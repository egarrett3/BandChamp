import React, { useState, useEffect } from "react";
import PauseButton from './pause_button';
import PlayButton from './play_button';

const MainAudioButton = ({openSong,played,pauseTrack,playTrack,btnType,classType,sng}) => {
  const [active, setActive] = useState(false);
  const [command, setCommand] = useState(false);

  const handleClick = (e) => {
    setCommand(e.currentTarget.id)
  }

  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (command === "pause-btn3") {
      pauseTrack(toggleActive)
    } 
    if (command === "play-btn3") {
      if (played) {
        playTrack(toggleActive)
      } else {
        playTrack(sng)
      }
    }
  }, [command,played])

  return (
    <div className={classType}>
      {active ? (
        <PauseButton btnType={btnType} handleClick={handleClick}/>          
      ) : (
        <PlayButton btnType={btnType} handleClick={handleClick}/>
      )}
    </div>
  );
};

export default MainAudioButton;
