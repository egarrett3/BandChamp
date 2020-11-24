import { editUser } from '../util/user_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

const receiveEditedUser = (currentUser) => {
  
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const changeUser = (user,id) => dispatch => editUser(user,id)
        .then(user => dispatch(receiveEditedUser(user)))