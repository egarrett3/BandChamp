import React from 'react';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PlayButton = (props) => {

    return (
      <>  
        {!props.loading ? 
        ( <div id={"play-"+props.btnType} 
               onClick={props.toggleButton}
          ></div> )
          :
        <FontAwesomeIcon icon={faSpinner} />}
      </>
    );
};


export default PlayButton