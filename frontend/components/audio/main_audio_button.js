import React, { useState, useEffect, useCallback } from "react";
import PauseButton from "./pause_button";
import PlayButton from "./play_button";

const MainAudioButton = ({ loading, playTrack, pauseTrack, btnType, classType, }) => {
    const [mainactive, setmainActive] = useState(false);
    const [command, setCommand] = useState(false);
    const [isInit, setisInit] = useState(false);
    // const songBtns = document.querySelectorAll('div.btns3')

    const mainToggleActive = useCallback(
      () => {
        setmainActive(!mainactive)
      },
      [mainactive],
    )

    useEffect(() => {
      debugger
      window.onload = (event) => {
        const nodeCollect = document.querySelector(".songListwindow");
        const songBtnCollection = nodeCollect.getElementsByTagName('div')
        debugger
        for (let index = 0; index < songBtnCollection.length; index++) {
          if (index % 7 === 1) {
            debugger
            songBtnCollection[index].addEventListener('click', (e) => {
              setmainActive(!mainactive)
            });
          }
        }
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
        },[mainactive])
      
    const handleClick = (e) => {
        setCommand(e.currentTarget.id)
        debugger
    };

    useEffect(() => {
      debugger
      if (command === "pause-btn2") {
        mainToggleActive();
        pauseTrack();
      }
      if (command === "play-btn2") {
        mainToggleActive();
        playTrack();
      }
    }, [command]);

    return (
      <div className={classType}>
        {mainactive ? (
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
