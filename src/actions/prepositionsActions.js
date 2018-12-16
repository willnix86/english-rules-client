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

export const addUserSentences = (userId, authToken, sentence, answer) => dispatch => {
    return fetch(`${API_BASE_URL}/prepositions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: userId,
            sentence: sentence,
            answer: answer
        })
    })
    .then(res => {
        if (res.ok) {
            return normalizeResponseErrors(res)
        }
    })
    .then(res => res.json())
    .then(res => dispatch(getUserSentences(userId, authToken)))
    .catch(err => {
        dispatch(sentencesError(err));
        return Promise.reject(
            new SubmissionError({
                _error: err
            })
        );
    })
};

export const deleteUserSentence = (id) => dispatch => {
    return fetch(`${API_BASE_URL}/prepositions/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
        })
    .then(res => {
        if (res.ok) {
            return normalizeResponseErrors(res)
        }
    })
    .then(res => dispatch(deleteSentenceSuccess(id)))
    .catch(err => {
        dispatch(sentencesError(err));
        console.log(err)
        return Promise.reject(
            new SubmissionError({
                _error: err
            })
        );
    })
};

export const deleteAllUserSentences= (id) => dispatch => {
    return fetch(`${API_BASE_URL}/prepositions/user/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
        })
    .then(res => {
        if (res.ok) {
            return normalizeResponseErrors(res)
        }
    })
    .then(res => dispatch(restoreDefaultSentences()))
    .catch(err => {
        dispatch(sentencesError(err));
        console.log(err)
        return Promise.reject(
            new SubmissionError({
                _error: err
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

export const DELETE_SENTENCE_SUCCESS = 'DELETE_SENTENCE_SUCCESS';
export const deleteSentenceSuccess = (sentenceId) => ({
    type: DELETE_SENTENCE_SUCCESS,
    sentenceId
});

export const ADD_POINTS = 'ADD_POINTS';
export const addPoints = () => ({
    type: ADD_POINTS
});

export const LOSE_LIFE = 'LOSE_LIFE';
export const loseLife = () => ({
    type: LOSE_LIFE
});

export const RESTORE_DEFAULT_SENTENCES = 'RESTORE_DEFAULT_SENTENCES';
export const restoreDefaultSentences = () => ({
    type: RESTORE_DEFAULT_SENTENCES
});

export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
    type: RESET_GAME
});