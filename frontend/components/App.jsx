const { HashRouter } = require("react-router-dom")
import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1>BandChamp!!!!</h1>
            
        </header>

        {/* <AuthRoute exact path="/login" component={} />
        <AuthRoute exact path="/signup" component={} /> */}
    </div>
);

export default App;