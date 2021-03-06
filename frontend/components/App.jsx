const { HashRouter } = require("react-router-dom")
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute,ProtectedRoute } from '../util/route_util';
import LoginContainer from './session_form/login_container'
import AlbumContainer from "./album/album_show_container";
import SongShowContainer from './song/song_show_container';
import Modal from './modal/modal';
import UserProfileContainer from './profile/user_container';

function App() {
  
  return (
    <div className="page">
      <Modal />
      <Switch>
        <Route exact path="/" component={SongShowContainer} />
        <AuthRoute exact path="/login" component={LoginContainer} />
        <Route exact path="/songPage/:songId" component={AlbumContainer} />
        <ProtectedRoute exact path="/usrprofile" component={UserProfileContainer} />
      </Switch>

    </div>
  );
}

export default App;