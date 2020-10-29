import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import logger from 'redux-logger';
import thunk from '../thunk/thunk';

const configureStore = (preloadedState = {}) => {
  let middleware = [thunk, logger];

  if (process.env.NODE_ENV === "production") {
    middleware = [thunk];
  }
  
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  );
};




export default configureStore;

