import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const getUserWords = (userId, authToken) => dispatch => {
    return fetch(`${API_BASE_URL}/wordtypes/protected/user/${userId}`, {
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
        .then(res => dispatch(setUserWords(res)))
        .catch(err => {
            const {code} = err;
            let message =
                code === 401
                    ? 'Incorrect username or password'
                    : 'Unable to get user data, please try again';
            dispatch(wordsError(err));
            return Promise.reject(
                new SubmissionError({
                    _error: message
                })
            );
    })

};

export const SET_USER_WORDS = 'SET_USER_WORDS';
export const setUserWords = (wordObjs) => ({
    type: SET_USER_WORDS,
    wordObjs
});

export const WORDS_ERROR = 'WORDS_ERROR';
export const wordsError = error => ({
    type: WORDS_ERROR,
    error
});

export const ADD_WORD = 'ADD_WORD';
export const addWord = (word) => ({
    type: ADD_WORD,
    word
});

export const DROP_WORD = 'DROP_WORD';
export const dropWord = (word, target, answer) => ({
    type: DROP_WORD,
    word,
    target,
    answer
});

export const START_TIMER = 'START_TIMER';
export const startTimer = (time) => ({
    type: START_TIMER,
    time
})

export const STOP_TIMER = 'STOP_TIMER';
export const stopTimer = (time) => ({
    type: STOP_TIMER,
    time
})

export const RESET_GAME = 'REST_GAME';
export const resetGame = () => ({
    type: RESET_GAME
})