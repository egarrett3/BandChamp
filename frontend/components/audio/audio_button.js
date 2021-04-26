import React, { useState, useEffect } from "react";
import PauseButton from './pause_button'
import PlayButton from './play_button'

const AudioButton = React.forwardRef(({passSong,btn,loading,playTrack,pauseTrack,btnType,classType,song},ref) => {
  const [active, setActive] = useState(btn);
  const [command, setCommand] = useState(false);
  
  const handleClick = (e) => {
    setActive(!active)
    setCommand(e.currentTarget.id)
  }

  const changeMainBtn = () => {
    debugger
    if (ref && classType === "btns2" && ref.ended) {setActive(false)}
    if (ref && classType === "btns2" && !ref.ended) {setActive(true)}
  }

  useEffect(() => {
    if (command === "pause-btn2" || "pause-btn3") {
      
      pauseTrack()
      if (command === "pause-btn3") {changeMainBtn()}
    } 
    if (command === "play-btn2") {
      playTrack()
    }
    if (command === "play-btn3") {
      passSong(song)
      changeMainBtn()
    }
  }, [command,classType,ref])

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
