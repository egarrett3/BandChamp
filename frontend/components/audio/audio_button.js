import React, { useState } from "react";
import PauseButton from './pause_button'
import PlayButton from './play_button'
import { faSpinner } from "@fortawesome/free-solid-svg-icons";


const AudioButton = (props) => {
  const [active, setActive] = useState(props.active);
  const [loading, setLoading] = useState(props.loading);

  const toggleButton = () => {
      setActive(!active)
  }
  
  return (
    <div className="btns2">
      {active ? (
        <PauseButton toggleButton={toggleButton} />
      ) : !loading ? (
        <PlayButton toggleButton={toggleButton} />
      ) : (
        <FontAwesomeIcon icon={faSpinner} />
      )}
    </div>
  );
};

export default AudioButton;
