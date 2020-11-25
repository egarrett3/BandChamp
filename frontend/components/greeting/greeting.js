import React from 'react';
import { Link } from 'react-router-dom'
import { AuthRoute } from '../../util/route_util';
import { faBolt, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      user: false,
    };
    this.headers = this.headers.bind(this);
    this.showList = this.showList.bind(this);
    this.closeList = this.closeList.bind(this);
  }

  showList(e) {
    e.preventDefault();

    this.setState({ showList: true }, () => {
      document.addEventListener("click", this.closeList);
    });
  }

  closeList(e) {
    let ele = document.getElementById('logout-dropdown-content')
  
    if (ele) {
      if (!ele.contains(e.target)) {
        this.setState({ showList: false }, () => {
          document.removeEventListener("click", this.closeList);
        });
      }
    }
  }

  componentDidUpdate(prevState) {
    if (!prevState.currentUser) {
      this.setState({
        showList : false
      })
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.closeList);
  }

  // LoggedIn() {
  //   this.setState(() => ({
  //     user: this.currentUsr(),
  //   }));
  // }

  currentUsr() {
    let bool;
    if (this.props.currentUser) {
      bool = true;
    } else {
      bool = false;
    }
    return bool;
  }

  headers() {
    const bool = this.currentUsr();
    const { user } = this.state;

    const header = !bool ? (
      <header className="bandchamp-header">
        <div id="header-spacing">
          <div className="logo">
            <Link className="alignment" to="/">
              <div className="purple-box"></div>
              <h1 className="title">bandchamp</h1>
            </Link>
            <h3>
              Discover amazing new music and{" "}
              <a className="gradient">directly support </a>the artists who make
              it.
            </h3>
          </div>
          <div id="right-side-header">
            <input
              type="text"
              placeholder="Search and Discover Music                           &#128269;"
              className="search-bar"
            ></input>

            <nav className="login-signup">
              <a
                className="session-links"
                onClick={() =>
                  this.props.login({ username: "Tutu", password: "pineapple1" })
                }
              >
                demo login
              </a>
              <a
                className="session-links"
                onClick={() => this.props.openModal("signup")}
              >
                sign up
              </a>
              <Link className="session-links" to="/login">
                log in
              </Link>
            </nav>
          </div>
        </div>
      </header>
    ) : (
      <header className="bandchamp-loggedin-header">
        <div id="loggedin-header-spacing">
          <div id="left-loggedin-header">
            <div className="signedIn-logo">
              <Link className="signedIn-alignment" to="/">
                <div className="signedIn-purple-box"></div>
                <h1 className="signedIn-title">bandchamp</h1>
              </Link>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search and Discover Music                                 &#128269;"
                className="signedIn-search-bar"
              ></input>
            </div>
          </div>
          <div id="right-loggedin-header">
            {/* <div className="user-icons">
              <FontAwesomeIcon icon={faBolt} size="2x" />
            </div>
            <div className="user-icons">
              <FontAwesomeIcon icon={faHeart} size="2x" />
            </div> */}
            <div className="user-icons" onClick={this.showList}>
              <div className="dot"></div>
              {this.state.showList ? (
                <div id="logout-dropdown-content">
                  <Link id="username-content" to="/usrprofile">
                    <div id="username">{this.props.currentUser.username}</div>
                    <div id="user-collection">view collection</div>
                  </Link>
                  {/* <div className="drpdown-item">purchases</div> */}
                  <hr style={{ width: "85%", borderColor: "#f5f5f5" }} />
                  {/* <div className="drpdown-item">settings</div> */}
                  {/* <div className="drpdown-item">help</div> */}
                  <div onClick={this.props.logout} className="drpdown-item">
                    log out
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              
            </div>
          </div>
        </div>
      </header>
    );

    return header;
  }

  render() {
    return <>{this.headers()}</>;
  }
};

export default Greeting;