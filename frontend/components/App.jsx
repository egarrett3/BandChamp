const { HashRouter } = require("react-router-dom")
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AuthRoute } from '../util/route_util';
import LoginContainer from './session_form/login_container'
import GreetingContainer from "./greeting/greeting_container";
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <header class='bandchamp-header'>
            <div class="logo">
                <Link class='alignment' to='/'>
                    <div class="purple-box"></div>
                    <h1 class="title">bandchamp</h1>
                </Link>
                <h3>Discover amazing new music and <a class='gradient'>directly support </a>the artists who make it.</h3>
            </div>
            <Route exact path='/' component={GreetingContainer} />
        </header>

        <AuthRoute exact path="/login" component={LoginContainer} />
    </div>
);

export default App;