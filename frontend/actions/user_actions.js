import { editUser,fetchUser } from '../util/user_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

const receiveU = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const changeUser = (user,id) => dispatch => editUser(user,id)
        .then(user => dispatch(receiveUser(user)))

export const fetchUsr = (id) => dispatch => fetchUser(id)
        .then(user => dispatch(receiveU(user)))