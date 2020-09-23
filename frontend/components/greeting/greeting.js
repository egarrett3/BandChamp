import React from 'react';
import { Link } from 'react-router-dom'
import { AuthRoute } from '../../util/route_util';

const Greeting = ({ currentUser, logout, login, openModal }) => {

    const signUpSession = () => {
      return (
      <header className="bandchamp-header">
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
          <div>
            <input
              type="text"
              placeholder="Search and Discover Music              &#128269;"
              className="search-bar"
            ></input>
          </div>
          <nav className="login-signup">
            <a
              className="session-links"
              onClick={() => login({ username: "user", password: "password" })}
            >
              demo login
            </a>
            <a className="session-links" onClick={() => openModal("signup")}>
              sign up
            </a>
            <Link className="session-links" to="/login">
              log in
            </Link>
          </nav>
      </header>
      )
    };
    const welcomeGreeting = () => {
        
        return (
            <div className='demo-login-sign'>
                <div className='welcome'></div>
                <div className='logout-dropdown'>
                    <span className='dot'></span>
                    <a className='logout-dropdown-content' onClick={logout}>Log Out</a>
                </div>
            </div>
        )
    };
    
    return (
        currentUser ?
        welcomeGreeting() :
        signUpSession()
    );

};

export default Greeting;