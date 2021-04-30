import React from "react";

const PauseButton = (props) => {

  return (
    <>
      <div id={"pause-" + props.btnType} 
        onClick={props.pauseTrack}>
      </div>
    </>
  );
};

export default PauseButton;
