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