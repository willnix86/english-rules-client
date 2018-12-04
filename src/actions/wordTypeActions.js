export const GET_WORDS = 'GET_WORDS';
export const getWords = (nouns, adjectives, verbs) => ({
    type: GET_WORDS,
    nouns,
    adjectives,
    verbs
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