import { placePic,getPic } from '../util/picture_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

const receivePhoto = (currentUser) => {
    
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

export const updateUser = (user,id) => dispatch => placePic(user,id)
        .then(currentUser => dispatch(receivePhoto(currentUser)))

export const getUser = (id) => dispatch => getPic(id)
        .then(currentUser => dispatch(receivePhoto(currentUser)))