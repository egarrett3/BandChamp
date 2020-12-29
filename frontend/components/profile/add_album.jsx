import React from 'react'
import { connect } from 'react-redux';
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AddAlbum extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photo: null
        }
        // this.handleFile = this.handleFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user_id = this.props.currentUser.id
        let u = 'User'
        const user = new FormData();
        user.append('picture[photo]', e.currentTarget.files[0]);
        user.append('picture[type]', u);
        this.props.placePic(user, user_id).then(() => this.props.closeModal());
    }

    render() {
        return (
            <div id='choose-file'>

                <input type='file'
                    name="file" id="file"
                    className="inputfile"
                    onInput={(e) => { this.handleSubmit(e) }} />
                <label htmlFor="file"><div id='computer-icon'><FontAwesomeIcon icon={faDesktop} /></div>
                       Upload an image from my Computer</label>
                <div id='stipulations'>480 pixels minimum (bigger is better), .jpg, .gif or .png, 4MB max</div>
            </div>
        )
    }
}

const mapStateToProps = ({}) => {
    return {

    }
}

const mapDispatchToProps = ({ }) => {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddAlbum);