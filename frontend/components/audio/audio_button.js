import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import PauseButton from './pause_button';
import PlayButton from './play_button';

const AudioButton = React.forwardRef(({openSong,loading,playTrack,pauseTrack,btnType,classType,song},ref) => {
  const [active, setActive] = useState(false);
  const [command, setCommand] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    setActive(!active)
    setCommand(e.currentTarget.id)
  }

  useEffect(() => {
    if (command === "pause-btn2" || command === "pause-btn3") {
      pauseTrack()
    } 
    if (command === "play-btn2") {
      playTrack()
    }
    if (command === "play-btn3") {
      dispatch(openSong(song))
    }
  }, [command])

  return (
    <div className={classType}>
      {active ? (
        <PauseButton btnType={btnType} handleClick={handleClick}/>          
      ) : (
        <PlayButton btnType={btnType} loading={loading} handleClick={handleClick}/>
      )}
    </div>
  );
});

export default AudioButton;
