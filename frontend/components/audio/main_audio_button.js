import React, { useState, useEffect } from "react";
import PauseButton from "./pause_button";
import PlayButton from "./play_button";

const AudioButton = ({ loading, playTrack, pauseTrack, btnType, classType, btn}) => {
    const [active, setActive] = useState(false);
    const [command, setCommand] = useState(false);

    const handleClick = (e) => {
      setActive(!active);
      setCommand(e.currentTarget.id);
    };

    useEffect(() => {
      if (command === "pause-btn2") {
        pauseTrack();
      }
      if (command === "play-btn2") {
        playTrack();
      }
    }, [command]);

    return (
      <div className={classType}>
        {active ? (
          <PauseButton btnType={btnType} handleClick={handleClick} />
        ) : (
          <PlayButton
            btnType={btnType}
            loading={loading}
            handleClick={handleClick}
          />
        )}
      </div>
    );
}


export default AudioButton;
