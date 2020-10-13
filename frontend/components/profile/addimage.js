import React from 'react'
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AddImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // photoFile: null
        }
    }

    // handleFile(e) {
        
    //     debugger
    // }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        const id = this.props.id;
        formData.append('user[username]', this.props.currentUser.username);
        formData.append('user[photo]', e.currentTarget.files[0] );
        formData.append('user[id]', id );
        formData.append('user[email]', this.props.currentUser.email );
        // this.props.placePic(formData, id);
        $.ajax({
            url: `api/users/${id}`,
            method: 'PATCH',
            data: { formData },
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
                    onInput={
                        // this.handleFile.bind(this),
                        this.handleSubmit.bind(this)
                    }/>
                <label htmlFor="file"><div id='computer-icon'><FontAwesomeIcon icon={faDesktop} /></div>
                       Upload an image from my Computer</label>
                <div id='stipulations'>480 pixels minimum (bigger is better), .jpg, .gif or .png, 4MB max</div>
            </div>
        )
    }
}

export default AddImage;