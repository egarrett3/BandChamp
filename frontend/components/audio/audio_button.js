import React, { useState } from "react";
import PauseButton from './pause_button'
import PlayButton from './play_button'
import { faSpinner } from "@fortawesome/free-solid-svg-icons";


const AudioButton = (props) => {
  const [active, setActive] = useState(props.active);

  const toggleButton = () => {
      setActive(!active)
  }


  return (
    <div className="btns2">
      {
        active ?
        ( <PauseButton toggleButton={toggleButton} /> ) : 
        ( <PlayButton toggleButton={toggleButton} loading={props.loading} /> )
      }
    </div>
  );
};

export default AudioButton;
