import React, { useState, useEffect } from "react";
import PauseButton from "./pause_button";
import PlayButton from "./play_button";

const MainAudioButton = ({ loading, playTrack, pauseTrack, btnType, classType, }) => {
    const [active, setActive] = useState(false);
    const [command, setCommand] = useState(false);
    const [isInit, setisInit] = useState(false);
    // const songBtns = document.querySelectorAll('div.btns3')
    
    const toggleActive = () => {
      debugger
        setActive(!active)
    }

    useEffect(() => {
      debugger
      window.onload = (event) => {
        debugger
        const songBtns = document.querySelectorAll("div.btns3");
        songBtns.forEach(node => {
          debugger
          node.addEventListener('click', (e) => {
            debugger
            toggleActive();
          })
        })
      }

        // if (songBtns.length > 0 && !isInit) {
        //   setisInit(true);
        // }

        // if (pausebtn3.length > 0 && !pauseInit) {
        //   debugger
        //   setpauseInit(true)
        //   pausebtn3.forEach((node) => {
        //     node.addEventListener("click", (e) => {
        //       debugger
        //       toggleActive();
        //     });
        //   });
        // }
          
          return () => {
            // playbtn3.forEach((node) => {
            //   node.removeEventListener("click", (e) => {
            //   });
            // });
          
            // pausebtn3.forEach((node) => {
            //   node.removeEventListener("click", (e) => {
            //   });
            // });
            
          };
        },[])
      
    const handleClick = (e) => {
        debugger
        setCommand(e.currentTarget.id)
        debugger
    };

    useEffect(() => {
      debugger
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
          <PauseButton btnType={btnType} 
          handleClick={handleClick} />
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
