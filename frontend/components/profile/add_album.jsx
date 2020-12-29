import React from 'react'
import { connect } from 'react-redux';
import { createAl } from '../../actions/album_actions'
import { closeModal } from "../../actions/modal_actions";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AddAlbum extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photo: null,
            title: "",
        }
        // this.handleFile = this.handleFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.currentTarget.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const artist_id = this.props.currentUser.id
        const album = new FormData();
        album.append('album[photo]', e.currentTarget.files[0]);
        album.append('album[title]', this.state.title);
        album.append('album[artist_id]', artist_id);
        this.props.makeAl(album).then(() => this.props.closeModal());
    }

    render() {
        return (
            <div id='choose-file'>
                <form className="modal-login-form" onSubmit={this.handleSubmit}>
                    <div className="username">
                        <input
                            type="text"
                            placeholder="title"
                            className="modal-username-field"
                            value={this.state.title}
                            name="title"
                            onChange={(e) => this.handleChange(e)}
                        />
                    </div>

                    <label htmlFor="file">
                        Upload an image from my Computer<div id='computer-icon'><FontAwesomeIcon icon={faDesktop} /></div>
                            <input type='file'
                            name="file" id="file"
                            className="inputfile"
                            onChange={(e) => { this.handleSubmit(e) }} />
                    </label>
                    <button className="save-changes"
                      type="submit"
                      >UPLOAD ALBUM
                    </button>
                </form>
                <div id='stipulations'>480 pixels minimum (bigger is better), .jpg, .gif or .png, 4MB max</div>
            </div>
        )
    }
}

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id],
        id: session.id,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        makeAl: (album) => dispatch(createAl(album)),
        closeModal: () => dispatch(closeModal())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddAlbum);