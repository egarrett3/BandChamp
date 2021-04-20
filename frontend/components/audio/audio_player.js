import React, { useState } from "react";

const AudioPlayer = ({src_url}) => {

  return (
    <>
      <audio
        id="ply1"
        ref={(ref) => (this.audio1 = ref)}
        type="audio/mpeg"
        preload="auto"
        onLoadedMetadata={() => (this.seekbar1.max = this.audio1.duration)}
      >
        <source ref={(ref) => (this.source1 = ref)} id="src2" src={src_url} />
      </audio>
    </>
  );
};

export default AudioPlayer;
