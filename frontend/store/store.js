import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import logger from 'redux-logger';
import thunk from '../thunk/thunk';

const configureStore = (preloadedState = {}) => 
    createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));


export default configureStore;

