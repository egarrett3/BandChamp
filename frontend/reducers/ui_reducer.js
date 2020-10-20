import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import switchReducer from './switch_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    switch: switchReducer
});

export default uiReducer;