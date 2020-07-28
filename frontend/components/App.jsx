const { HashRouter } = require("react-router-dom")
import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import LoginContainer from './session_form/login_container'
import SignupContainer from './session_form/signup_container'

const App = () => (
    <div>
        <header>
            <h1>BandChamp!!!!</h1>
            
        </header>

        <AuthRoute exact path="/login" component={LoginContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
    </div>
);

export default App;