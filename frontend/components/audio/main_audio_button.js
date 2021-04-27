import React, { useState, useEffect } from "react";
import PauseButton from "./pause_button";
import PlayButton from "./play_button";

const MainAudioButton = ({ loading, playTrack, pauseTrack, btnType, classType, }) => {
    const [active, setActive] = useState(false);
    const [command, setCommand] = useState(false);
    const playbtn3 = document.querySelectorAll('#play-btn3')
    const pausebtn3 = document.querySelectorAll("#pause-btn3")

    const handleClick = (e) => {
      if (e) {setCommand(e.currentTarget.id)};
    };

    const toggleActive = () => {
        setActive(!active)
    }

    useEffect(() => {
        if (playbtn3.length > 0) {
          playbtn3.forEach(node => {
            node.addEventListener('click', (e) => {
              toggleActive() 
            })
          })
        }
        if (pausebtn3.length > 0) {
          pausebtn3.forEach(node => {
            node.addEventListener('click', (e) => {
              toggleActive()
            })
          })
        }

      return () => {
        if (playbtn3.length > 0) {
          playbtn3.forEach((node) => {
            node.removeEventListener("click", (e) => {
              toggleActive();
            });
          });
        }
        if (pausebtn3.length > 0) {
          pausebtn3.forEach((node) => {
            node.removeEventListener("click", (e) => {
              toggleActive();
            });
          });
        }
      };
    },[playbtn3,pausebtn3])

    useEffect(() => {
      if (command === "pause-btn2") {
        pauseTrack(toggleActive);
      }
      if (command === "play-btn2") {
        playTrack(toggleActive);
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


export default MainAudioButton;
