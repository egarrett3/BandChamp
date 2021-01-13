import { editUser,fetchUser } from '../util/user_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

const receiveUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const changeUser = (user,id) => dispatch => editUser(user,id)
        .then(user => dispatch(receiveUser(user)))

export const fetchUser = (id) => dispatch => fetchUser(id)
        .then(user => dispatch(receiveUser(user)))