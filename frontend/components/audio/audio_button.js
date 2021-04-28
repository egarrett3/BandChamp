import React, { useState, useEffect } from "react";
import PauseButton from './pause_button';
import PlayButton from './play_button';

const AudioButton = ({played,pauseTrack,playTrack,btnType,classType,sng,song}) => {
  const [active, setActive] = useState(false);
  const [command, setCommand] = useState(false);
  // const playbtn2 = document.querySelector("#play-btn2");
  // const pausebtn2 = document.querySelector("#pause-btn2");

  const toggleActive = () => {
    setActive(!active)
  };
  
  const handleClick = (e) => {
    setCommand(e.currentTarget.id)
  }

  useEffect(() => {
    if (command === "pause-btn3") {
      pauseTrack(toggleActive)
    } 
    if (command === "play-btn3") {
      if (sng.id === song.id) {
        playTrack(toggleActive)
      } else {
        playTrack(toggleActive,sng)
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

export default AudioButton;
