import jwtDecode from 'jwt-decode';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {saveAuthToken, clearAuthToken} from '../localStorage';
import {SubmissionError} from 'redux-form';
import { userLogin } from './userActions';
import { getUserSentences } from './prepositionsActions';
// import { getUserWordTypes } from './wordTypeActions';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = (authToken, userId) => ({
    type: SET_AUTH_TOKEN,
    authToken,
    userId
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});

const storeAuthInfo = async (authToken, userId, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    await dispatch(setAuthToken(authToken, userId));
    await dispatch(authSuccess(decodedToken.user.username));
    await dispatch(userLogin(userId, authToken));
    await dispatch(getUserSentences(userId, authToken));
    // await dispatch(getUserWordTypes(userId, authToken));
    await saveAuthToken(userId, authToken);
};

export const getJWT = (username, password) => dispatch => {
    dispatch(authRequest());
    return (
        fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(({token, id}) => storeAuthInfo(token, id, dispatch))
            .catch(err => {
                const {code} = err;
                const message =
                    code === 401
                        ? 'Incorrect username or password'
                        : 'Unable to login, please try again';
                dispatch(authError(err));
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                    })
                );
            })
    );
};

export const refreshAuthToken = () => (dispatch, getState) => {
    dispatch(authRequest());
    const authToken = getState().user.authToken;
    return fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            dispatch(authError(err));
            dispatch(clearAuth());
            clearAuthToken(authToken);
        });
};