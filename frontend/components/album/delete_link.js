import React from "react";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DownloadLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <>
        <div
            className={this.props.deleteSong ? "delete-link-icon" : "disappear"}
            onClick={() =>this.props.deleteSong(this.props.album_id, this.props.id)}
        > 
            <FontAwesomeIcon icon={faBan} />
        </div>
      </>
    );
  }
}

export default DownloadLink;
