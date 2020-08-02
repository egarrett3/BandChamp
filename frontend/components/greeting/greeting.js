import React from 'react';
import { Link } from 'react-router-dom'

const Greeting = ({ currentUser, logout, login, openModal }) => {

    const signUpSession = () => (
        <nav className="login-signup">
            <a class='session-links' href="#" onClick={() => login({username:'user',password:'demologin'})}>demo login</a>
            <a class='session-links' href="#" onClick={() => openModal('signup')}>sign up</a>
            <Link class='session-links' to='/login'>log in</Link>
        </nav>
    )
    const welcomeGreeting = () => (
        <div class='demo-login-sign'>
            <div class='welcome'>Welcome {currentUser.username}, to BandChamp</div>
            <div class='logout-dropdown'>
                <span class='dot'></span>
                <a href='#' class='logout-dropdown-content' onClick={logout}>Log Out</a>
            </div>
        </div>
    );

    return (
        currentUser ?
        welcomeGreeting() :
        signUpSession()
    );

};

export default Greeting;