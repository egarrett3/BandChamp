import { signup, login, logout } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
});    /*(regular action creator)*/


const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});    /*(regular action creator)*/


const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors,
});    /*(regular action creator)*/

export const logIn = (userCreds) => dispatch => login(userCreds)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

/*thunk action creator*/


export const logOut = () => dispatch => logout()
    .then(() => dispatch(logoutCurrentUser(), err => dispatch(receiveErrors(err.responseJSON))));

/*(thunk action creator)*/


export const signUp = (userForm) => dispatch => signup(userForm)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));
   /*(thunk action creator)*/