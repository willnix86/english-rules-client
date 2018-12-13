import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const getUserSentences = (userId, authToken) => dispatch => {
    return fetch(`${API_BASE_URL}/prepositions/protected/user/${userId}`, {
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
        .then(res => dispatch(setUserSentences(res)))
        .catch(err => {
            const {code} = err;
            let message =
                code === 401
                    ? 'Incorrect username or password'
                    : 'Unable to get user data, please try again';
            dispatch(sentencesError(err));
            return Promise.reject(
                new SubmissionError({
                    _error: message
                })
            );
    })

};

export const SET_USER_SENTENCES = 'SET_USER_SENTENCES';
export const setUserSentences = (sentences) => ({
    type: SET_USER_SENTENCES,
    sentences
})

export const SENTENCES_ERROR = 'SENTENCES_ERROR';
export const sentencesError = error => ({
    type: SENTENCES_ERROR,
    error
});

export const SET_SENTENCE = 'SET_SENTENCE';
export const setSentence = (sentence) => ({
    type: SET_SENTENCE,
    sentence
});

export const SET_ANSWER = 'SET_ANSWER';
export const setAnswer = (answer) => ({
    type: SET_ANSWER,
    answer
});

export const ADD_POINTS = 'ADD_POINTS';
export const addPoints = () => ({
    type: ADD_POINTS
});

export const LOSE_LIFE = 'LOSE_LIFE';
export const loseLife = () => ({
    type: LOSE_LIFE
});

export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
    type: RESET_GAME
});