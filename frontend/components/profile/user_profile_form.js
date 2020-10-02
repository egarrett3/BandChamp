import React from 'react'
import GreetingContainer from "../greeting/greeting_container";
import { faCamera, faEdit, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class UserProf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <div>
                <GreetingContainer />
                <div id='Profile-canvas'>
                    <div id='profile-banner'>
                        <div id='spacer-banner'>
                            <div id='add-banner'>
                                <FontAwesomeIcon icon={faCamera} size='2x'/>
                                <div className='banner-image'>set banner image</div>
                            </div>
                        </div>
                    </div>
                    <div id='profile-settings'>
                        <div id='profile-spacer'>
                            <div id='prof-pic'>
                                <div className='specifications'>
                                    <FontAwesomeIcon icon={faCamera} size='2x' />
                                    <div id='spec'>
                                        <div id='spec2'>jpg or png</div>
                                        <div id='spec3'>480px min - 4MB max</div>
                                    </div>
                                </div>
                            </div>
                            <div id='profile-editors'>
                                <div id='this-user'>{this.props.currentUser.username}</div>
                                <button id='edit-profile'>
                                    <FontAwesomeIcon icon={faEdit} size='1x' />
                                    <div className='pointer-underline'>EDIT PROFILE</div>
                                </button>
                                <div id='share-profile'>
                                    <FontAwesomeIcon icon={faPaperPlane} size='1x' />
                                    <div className='pointer-underline'>share profile</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProf;