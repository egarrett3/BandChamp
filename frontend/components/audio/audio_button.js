import React, { useState } from "react";
import PauseButton from './pause_button'
import PlayButton from './play_button'

const AudioButton = ({btn,loading,playTrack,pauseTrack}) => {
  const [active, setActive] = useState(btn);

  const toggleButton = () => {
      setActive(!active)
      if (!active) {playTrack()}
      if (active) {pauseTrack()}
  }

  return (
    <div className="btns2">
      {
        active ?
        ( <PauseButton toggleButton={toggleButton} /> ) : 
        ( <PlayButton toggleButton={toggleButton} loading={loading} /> )
      }
    </div>
  );
};

export default AudioButton;
