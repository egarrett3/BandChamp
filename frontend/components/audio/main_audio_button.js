import React, { useState, useEffect, useCallback } from "react";
import SongList from "../album/audio_list";
import PauseButton from "./pause_button";
import PlayButton from "./play_button";

const MainAudioButton = ({ loading, playTrack, pauseTrack, btnType, classType, mainToggle}) => {
  
    return (
      <div className={classType}>
        {mainToggle ? (
          <PauseButton 
            btnType={btnType} 
            pauseTrack={pauseTrack} 
            loading={loading}
          />
        ) : (
          <PlayButton
            btnType={btnType}
            loading={loading}
            playTrack={playTrack}
          />
        )}
      </div>
    );
}

export default MainAudioButton;
