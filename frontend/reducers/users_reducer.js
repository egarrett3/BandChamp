import { RECEIVE_CURRENT_USER } from "../actions/session_actions"
import { PLACE_PHOTO } from '../actions/user_actions'


const usersReducer = (state = {}, action) => {
    Object.freeze(state)
    debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
        case PLACE_PHOTO:
            return Object.assign({}, state, { photo })
        default:
            return state;
    };
}

export default usersReducer;