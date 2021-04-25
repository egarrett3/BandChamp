import React, { useState, useEffect } from "react";
import PauseButton from './pause_button'
import PlayButton from './play_button'

const AudioButton = React.forwardRef(({duration,currentTime,btn,loading,playTrack,pauseTrack,btnType,classType,loadTrack,url},ref) => {
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
    <div className={classType}>
      {active ? (
        <PauseButton btnType={btnType} toggleButton={toggleButton}/>          
      ) : (
        <PlayButton btnType={btnType} loading={loading} toggleButton={toggleButton}/>
      )}
    </div>
  );
});

export default AudioButton;
