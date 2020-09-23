const { HashRouter } = require("react-router-dom")
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AuthRoute,ProtectedRoute } from '../util/route_util';
import LoginContainer from './session_form/login_container'
import GreetingContainer from "./greeting/greeting_container";
import SongShowContainer from './song/song_show_container';
import Modal from './modal/modal';

const App = () => {

    return (
      <div className="page">
        <Modal />

        <Switch>
          <Route exact path="/" component={SongShowContainer} />
          <Route exact path="/login" component={LoginContainer} />
        </Switch>
        
      </div>
    );
}

export default App;