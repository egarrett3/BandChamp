import React from 'react';
import { Link } from 'react-router-dom'
import { AuthRoute } from '../../util/route_util';

const Greeting = ({ currentUser, logout, login, openModal }) => {

    const signUpSession = () => (
        <nav className="login-signup">
            <a className='session-links' onClick={() => login({username:'user',password:'password'})}>demo login</a>
            <a className='session-links' onClick={() => openModal('signup')}>sign up</a>
            <Link className='session-links' to='/login'>log in</Link>
        </nav>
    )
    const welcomeGreeting = () => (
        <div className='demo-login-sign'>
            <div className='welcome'></div>
            <div className='logout-dropdown'>
                <span className='dot'></span>
                <a className='logout-dropdown-content' onClick={logout}>Log Out</a>
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