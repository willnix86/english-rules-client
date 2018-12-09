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