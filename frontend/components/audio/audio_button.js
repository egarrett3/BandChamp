import React, { useState, useEffect } from "react";
import PauseButton from './pause_button'
import PlayButton from './play_button'

const AudioButton = ({duration,currentTime,btn,loading,playTrack,pauseTrack}) => {
  const [active, setActive] = useState(btn);

  const toggleButton = () => {
    setActive(!active)
    if (!active) {playTrack()}
    if (active) {pauseTrack()}
  }

  useEffect(() => {
    if (duration === currentTime && currentTime > "0:01") {
      setActive(!active);
    }
  }, [duration,currentTime])

  return (
    <div className="btns2">
      {active ? (
        <PauseButton>
          <div id="pause-btn2" onClick={toggleButton}></div>
        </PauseButton>
      ) : (
        <PlayButton loading={loading}>
          <div id="play-btn2" onClick={toggleButton}></div>
        </PlayButton>
      )}
    </div>
  );
};

export default AudioButton;
