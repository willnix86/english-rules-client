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

export const RESET_GAME = 'REST_GAME';
export const resetGame = () => ({
    type: RESET_GAME
})