const { HashRouter } = require("react-router-dom")
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AuthRoute,ProtectedRoute } from '../util/route_util';
import LoginContainer from './session_form/login_container'
import GreetingContainer from "./greeting/greeting_container";
import SongShowContainer from './song/song_show_container';
import Modal from './modal/modal';
import Carousel from './carousel/carousel';

const App = () => {

    return (
        <div className='page'>
            <Modal />
            <header className='bandchamp-header'>
                <div className="logo">
                    <Link className='alignment' to='/'>
                        <div className="purple-box"></div>
                        <h1 className="title">bandchamp</h1>
                    </Link>
                    <h3>Discover amazing new music and <a className='gradient'>directly support </a>the artists who make it.</h3>
                </div>
                <div>
                    <input type='text' placeholder='Search and Discover Music              &#128269;' className='search-bar'></input>
                </div>
                <GreetingContainer />
            </header>
            
            <Switch>
                <Route exact path='/' component={SongShowContainer} />
                <Route exact path='/login' component={LoginContainer} />
            </Switch>
            
        </div>
    )
}

export default App;