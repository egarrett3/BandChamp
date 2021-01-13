import React from 'react'
import GreetingContainer from "../greeting/greeting_container";
import UserAlbums from "../album/user_albums";
import { faCamera, faEdit, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class UserProf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edited: true,
      username: props.currentUser.username,
      location: props.currentUser.location,
      website: props.currentUser.website,
      description: props.currentUser.description,  
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showWebsite = this.showWebsite.bind(this);
    this.showDescription = this.showDescription.bind(this);
    this.showLocation = this.showLocation.bind(this);
  }

  componentDidMount() {
    this.props.clearAlbums();
    this.props.fetchUser(this.props.currentUser.id)
    .then((user) => {
      if (user.currentUser.albums.length > 0) {
        for (let i=0; i < user.currentUser.albums.length; i++) {
          this.props.fetchAlbum(user.currentUser.albums[i].id)
        }
      }
    });
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

  submitForm(e) {
    e.preventDefault();
    // const user = merge({}, this.state);
    const user = new FormData();
    user.append("user[username]",this.state.username);
    user.append("user[website]", this.state.website);
    user.append("user[location]", this.state.location);
    user.append("user[description]", this.state.description);
    this.props.changeUser(user,this.props.currentUser.id);
  }

  showLocation() {
    if (this.props.currentUser.location !== "undefined") {
      return <div id="web-location">location: {this.props.currentUser.location}</div>;
    } else {
      return <div></div>;
    }
  }
  showWebsite() {
    if (this.props.currentUser.website !== "undefined") {
      return <div id="web-link"> personal site: {this.props.currentUser.website}</div>
    } else {
      return <div></div>
    }
  }
  showDescription() {
    if (this.props.currentUser.description !== "undefined") {
      return (
        <div id="web-description">about me: {this.props.currentUser.description}</div>
      );
    } else {
      return <div></div>;
    }
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
              <div className={this.state.edited ? "settings-col" : "disappear"}>
                <div className="profile-editors">
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
                <div className="profile">
                  {this.showLocation()}
                  {this.showWebsite()}
                  {this.showDescription()}
                </div>
              </div>
              <div
                className={this.state.edited ? "disappear" : "userEditField"}
              >
                <form id="edit-frame" onSubmit={this.submitForm}>
                  <div className="input-col-name">
                    <div className="input-label" htmlFor="name-input">
                      your name
                    </div>
                    <input
                      id="name-input"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="row">
                    <div className="input-col">
                      <div className="input-label" htmlFor="location-input">
                        location
                      </div>
                      <input
                        id="location-input"
                        name="location"
                        value={this.state.location}
                        onChange={this.handleChange}
                      />
                    </div>

                    <div className="input-col">
                      <div className="input-label" htmlFor="link-input">
                        link to your website or blog
                      </div>
                      <input
                        id="link-input"
                        name="website"
                        value={this.state.website}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div className="input-col-about">
                    <div className="input-label" htmlFor="about-me">
                      about you
                    </div>
                    <textarea
                      id="about-me"
                      name="description"
                      value={this.state.description}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="row arranged">
                    <button
                      className="save-changes"
                      type="submit"
                      onClick={() => this.toggleEdit()}
                    >
                      SAVE CHANGES
                    </button>
                    <button
                      onClick={() => this.toggleEdit()}
                      className="cancel-changes"
                      type="button"
                    >
                      CANCEL
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id='prof-albs'>
          <div id="alb-owner">{this.props.currentUser.username}'s albums</div>
          <button id="create-alb"
            onClick={() => this.props.openModal("addalbum")}
          >+ CREATE ALBUM</button>
        </div>
        <div className="align-items">
          <div className="album-spacer">
            {
              this.props.album.map(function(alb, idx) {
                return (
                  <UserAlbums id={alb.id} photo_url={alb.photo_url} title={alb.title} key={idx}/>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default UserProf;