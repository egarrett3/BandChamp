import React from 'react';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PlayButton = (props) => {

    return (
      <>
        {!props.loading ? props.children 
          :
        <FontAwesomeIcon icon={faSpinner} />}
      </>
    );
};


export default PlayButton