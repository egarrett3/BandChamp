import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PauseButton = (props) => {

  return (
    <> 
      {!props.loading ?
        (<div id={"pause-" + props.btnType} 
          onClick={props.pauseTrack}>
        </div>)
        :
        <FontAwesomeIcon icon={faSpinner} />}
    </>
  );
};

export default PauseButton;
