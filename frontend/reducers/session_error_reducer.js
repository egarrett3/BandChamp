import { bindActionCreators } from 'redux';
import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';

const _nullErrors = [];

const sessionErrorReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return _nullErrors;
        case CLEAR_ERRORS:
            action.errors = [];
            return action.errors;
        default:
            return state
    }
}

export default sessionErrorReducer;