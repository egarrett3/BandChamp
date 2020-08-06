import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/Root';
import { fetchSong } from './actions/song_actions'
import { fetchSongs } from './actions/song_actions'
import { fetchsong } from './util/song_api_util'

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});