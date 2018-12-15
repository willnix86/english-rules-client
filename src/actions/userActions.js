
import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { getUserSentences } from './prepositionsActions';
import { getUserWords } from './wordTypeActions';

export const registerUser = user => dispatch => {
    
    return fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                dispatch(loginError(message));
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const userLogin = (userId, authToken) => dispatch => {
    return fetch(`${API_BASE_URL}/users/protected/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authToken
            }
        })
        .then(res => {
            if (res.ok) {
                return normalizeResponseErrors(res)
            }
        })
        .then(res => res.json())
        .then(res => dispatch(setUserData(res)))
        .then(res => dispatch(getUserWords(userId, authToken)))
        .then(res => dispatch(getUserSentences(userId, authToken)))
        .catch(err => {
            const {code} = err;
            const message =
                code === 422
                    ? 'Username already taken'
                    : 'Unable to register, please try again';
            dispatch(loginError(message));
            return Promise.reject(
                new SubmissionError({
                    _error: message
                })
            );
    })

};

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginError = error => ({
    type: LOGIN_ERROR,
    error
});

export const SET_USER_DATA = 'SET_USER_DATA';
export const setUserData = (user) => ({
    type: SET_USER_DATA,
    user
})

export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = () => ({
    type: USER_LOGOUT
});

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = (isModalOpen) => ({
    type: TOGGLE_MODAL,
    isModalOpen
});