import React from 'react'
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AddImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photo: null
        }
        // this.handleFile = this.handleFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleFile(e) {
    //     this.setState({ photo: e.currentTarget.files[0] });
    //     debugger
    // }

    handleSubmit(e) {
        e.preventDefault();
        let user = Object.assign({}, this.props.currentUser, { photo: e.currentTarget.files[0] })
        const id = this.props.currentUser.id
        // this.props.placePic(formData, id);
        debugger
        $.ajax({
            url: `/api/users/${id}`,
            method: 'PATCH',
            data: { user },
            contentType: false,
            processData: false,
        }).then(
            (response) => console.log(response.message),
            (response) => console.log(response.responseJSON)
        )
    }

    render() {
        return (
            <div id='choose-file'>
                
                <input type='file' 
                    name="file" id="file" 
                    className="inputfile" 
                    onInput={(e) => {this.handleSubmit(e)}}/>
                <label htmlFor="file"><div id='computer-icon'><FontAwesomeIcon icon={faDesktop} /></div>
                       Upload an image from my Computer</label>
                <div id='stipulations'>480 pixels minimum (bigger is better), .jpg, .gif or .png, 4MB max</div>
            </div>
        )
    }
}

export default AddImage;