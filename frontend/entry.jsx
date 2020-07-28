import React from "react";
import ReactDOM from "react-dom";
import * as APIutil from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {

    window.login = APIutil.login;
    window.signup = APIutil.signup;
    window.logout = APIutil.logout;
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Render Something</h1>, root);
});