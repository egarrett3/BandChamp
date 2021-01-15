import { RECEIVE_CURRENT_USER } from "../actions/session_actions"

const usersReducer = (state = {}, action) => {
    Object.freeze(state)
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const user = { [action.currentUser.id]: action.currentUser };
            const userObj = Object.assign({}, state, user);
            return userObj;
        default:
            return state;
    };
}

export default usersReducer;