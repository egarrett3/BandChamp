import React, { useState, useEffect, useReducer } from "react";
import PauseButton from './pause_button'
import PlayButton from './play_button'
import songReducer from '../../reducers/song_reducer';

const AudioButton = React.forwardRef(({passSong,btn,loading,playTrack,pauseTrack,btnType,classType,song},ref) => {
  const [active, setActive] = useState(btn);
  const [command, setCommand] = useState(false);
  const [state,dispatch] = useReducer(songReducer,song)

  const handleClick = (e) => {
    setActive(!active)
    setCommand(e.currentTarget.id)
  }

  useEffect(() => {
    if (command === "pause-btn2" || "pause-btn3") {
      pauseTrack()
    } 
    if (command === "play-btn2") {
      playTrack()
    }
    if (command === "play-btn3") {
      dispatch({type: 'OPEN_SONG',song: song})
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
