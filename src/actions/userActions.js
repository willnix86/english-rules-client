import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const registerUser = user => dispatch => {

    let res; 

    const regUser = async () => {
        res = await fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return normalizeResponseErrors(res);
    }

    regUser().json().catch(err => {
        return err;
    });

};

export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = {
    type: USER_LOGOUT
};

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = (isModalOpen) => ({
    type: TOGGLE_MODAL,
    isModalOpen
});