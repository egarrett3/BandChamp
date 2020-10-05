import React from 'react'
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AddImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <div id='choose-file'>
                <input type='file' name="file" id="file" className="inputfile"/>

                <label htmlFor="file"><div id='computer-icon'><FontAwesomeIcon icon={faDesktop} /></div>Upload an image from my Computer</label>

                <div id='stipulations'>480 pixels minimum (bigger is better), .jpg, .gif or .png, 4MB max</div>
            </div>
        )
    }
}

export default AddImage;