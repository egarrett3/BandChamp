import React from 'react'
import GreetingContainer from "../greeting/greeting_container";
import { merge } from 'lodash';
import { faCamera, faEdit, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class UserProf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edited: true,
      user: {
        username: this.props.currentUser.username,
        location: '',
        website: '',
        description: '',
      }
    };
  }

  componentDidMount() {
    this.props.getUser(this.props.currentUser.id);
  }

  profileFrame() {
    if (this.props.photo) {
      return <img id="profile-picture" src={this.props.photo} />;
    } else {
      return <></>;
    }
  }

  toggleEdit() {
    this.setState((prevState) => ({
      edited: !prevState.edited,
    }));
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.currentTarget.value,
    });
  }

  SubmitForm(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state.user)
    this.props.editUser(user);
  }

  render() {
    return (
      <div>
        <GreetingContainer />
        <div id="Profile-canvas">
          <div id="profile-banner">
            <div id="spacer-banner">
              <div id="add-banner">
                <FontAwesomeIcon icon={faCamera} size="2x" />
                <div
                  className="banner-image"
                  onClick={() => this.props.openModal("addbanner")}
                >
                  set banner image
                </div>
              </div>
            </div>
          </div>
          <div id="profile-settings">
            <div id="profile-spacer">
              <div
                id="prof-pic"
                onClick={() => this.props.openModal("addimage")}
              >
                {this.profileFrame()}
                <div className="specifications">
                  <FontAwesomeIcon icon={faCamera} size="2x" />
                  <div id="spec">
                    <div id="spec2">jpg or png</div>
                    <div id="spec3">480px min - 4MB max</div>
                  </div>
                </div>
              </div>
              <div
                className={this.state.edited ? "profile-editors" : "disappear"}
              >
                <div id="this-user">{this.props.currentUser.username}</div>
                <button id="edit-profile">
                  <FontAwesomeIcon icon={faEdit} size="1x" />
                  <div
                    className="pointer-underline"
                    onClick={() => this.toggleEdit()}
                  >
                    EDIT PROFILE
                  </div>
                </button>
                {/* <div id='share-profile'>
                                    <FontAwesomeIcon icon={faPaperPlane} size='1x' />
                                    <div className='pointer-underline'>share profile</div>
                                </div> */}
              </div>
              <div
                className={this.state.edited ? "disappear" : "userEditField"}
              >
                <form id="edit-frame">
                  <div className="input-col-name">
                    <div className="input-label" htmlFor="name-input">
                      your name
                    </div>
                    <input
                      id="name-input"
                      name="username"
                      value={this.state.user.username}
                      onChange={this.handleChange}
                    ></input>
                  </div>

                  <div className="row">
                    <div className="input-col">
                      <div className="input-label" htmlFor="location-input">
                        location
                      </div>
                      <input
                        id="location-input"
                        name="location"
                        value={this.state.user.location}
                        onChange={this.handleChange}
                      ></input>
                    </div>

                    <div className="input-col">
                      <div className="input-label" htmlFor="link-input">
                        link to your website or blog
                      </div>
                      <input
                        id="link-input"
                        name="website"
                        value={this.state.user.website}
                        onChange={this.handleChange}
                      ></input>
                    </div>
                  </div>

                  <div className="input-col-about">
                    <div className="input-label" htmlFor="about-me">
                      about you
                    </div>
                    <textarea
                      id="about-me"
                      name="description"
                      value={this.state.user.description}
                      onChange={this.handleChange}
                    ></textarea>
                  </div>

                  <div className="row arranged">
                    <button className="save-changes" type="submit">
                      SAVE CHANGES
                    </button>
                    <button
                      onClick={() => this.toggleEdit()}
                      className="cancel-changes"
                    >
                      CANCEL
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProf;