import React from "react";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteLink = ({album_id,song_id,deleteSong}) => {
 
  return (
    <>
      <div
          className={deleteSong ? "delete-link-icon" : "disappear"}
          onClick={() => deleteSong(album_id, song_id)}
      > 
          <FontAwesomeIcon icon={faBan} />
      </div>
    </>
  );
}


export default DeleteLink;
