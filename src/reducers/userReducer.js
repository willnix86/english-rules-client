import * as actions from '../actions/userActions';

import {
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR
} from '../actions/auth';


const initialState = {
    id: null,
    username: null,
    authToken: null,
    games: ['Conjunctions', 'Word Types', 'Prepositions'],
    isModalOpen: false,
    loggedIn: false,
    loading: false,
    error: null
};

export const userReducer = (state=initialState, action) => {
    if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken,
            id: action.userId
        });
    } else if (action.type === CLEAR_AUTH) {
        return Object.assign({}, state, {
            authToken: null,
            username: null
        });
    } else if (action.type === AUTH_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === AUTH_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            username: action.currentUser
        });
    } else if (action.type === AUTH_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    else if (action.type === actions.SET_USER_DATA) {
        return Object.assign({}, state, {
            username: action.user.username,
            loggedIn: true
        })
    }
    else if (action.type === actions.USER_LOGOUT) {
        return initialState;
    }
    else if (action.type === actions.TOGGLE_MODAL) {
        return Object.assign({}, state, {
            isModalOpen: action.isModalOpen
        });
    }
    return state;
};