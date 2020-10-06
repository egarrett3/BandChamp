import { editUser } from '../util/user_api_util';

export const PLACE_PHOTO = "PLACE_PHOTO";

const placePhoto = (photo) => {
    return {
        type: PLACE_PHOTO,
        photo
    }
}

export const updateUser = (formData,id) => dispatch => editUser(formData,id)
        .then(photo => dispatch(placePhoto(photo)))