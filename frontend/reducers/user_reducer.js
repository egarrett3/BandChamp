import { RECEIVE_USER } from "../actions/user_actions";

const userReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      const user = action.currentUser;
      const userObj = Object.assign({}, state, user);
      return userObj;
    default:
      return state;
  }
};

export default userReducer;
