import * as actions from '../actions/wordTypeActions';
import update from 'immutability-helper';

export const initialState = {
    words: [{
        word: 'house',
        wordType: 'Nouns',
        target: 'Container',
        answer: ''
    },
    {
        word: 'eggs',
        wordType: 'Nouns',
        target: 'Container',
        answer: ''
    },
    {
        word: 'children',
        wordType: 'Nouns',
        target: 'Container',
        answer: ''
    },
    {
        word: 'football',
        wordType: 'Nouns',
        target: 'Container',
        answer: ''
    },
    {
        word: 'glass',
        wordType: 'Nouns',
        target: 'Container',
        answer: ''
    },
    {
        word: 'red',
        wordType: 'Adjectives',
        target: 'Container',
        answer: ''
    },
    {
        word: 'yummy',
        wordType: 'Adjectives',
        target: 'Container',
        answer: ''
    },
    {
        word: 'wooden',
        wordType: 'Adjectives',
        target: 'Container',
        answer: ''
    },
    {
        word: 'quick',
        wordType: 'Adjectives',
        target: 'Container',
        answer: ''
    },
    {
        word: 'rough',
        wordType: 'Adjectives',
        target: 'Container',
        answer: ''
    },
    {
        word: 'play',
        wordType: 'Verbs',
        target: 'Container',
        answer: ''
    },
    {
        word: 'going',
        wordType: 'Verbs',
        target: 'Container',
        answer: ''
    },
    {
        word: 'skipped',
        wordType: 'Verbs',
        target: 'Container',
        answer: ''
    },
    {
        word: 'eat',
        wordType: 'Verbs',
        target: 'Container',
        answer: ''
    },
    {
        word: 'read',
        wordType: 'Verbs',
        target: 'Container',
        answer: ''
    }],
    startTime: 0,
    finishTime: 0
}

export let userState;

export const wordTypesReducer = (state=initialState, action) => {
    if (action.type === actions.SET_USER_WORDS) {
        let wordObjs = action.wordObjs.map(wordObj => ({
            id: wordObj._id,
            word: wordObj.word,
            wordType: wordObj.wordType,
            target: 'Container',
            answer: ''
        }));
        if (wordObjs.length > 0) {
            userState = Object.assign({}, state, {
                words: wordObjs
            });
            return userState;
        } else {
            return initialState;
        }
    }
    else if (action.type === actions.ADD_WORD) {
        return Object.assign({}, state, {
            words: [...state.words, {
                word: action.word.word,
                wordType: action.word.wordType,
                target: 'Container',
                answer: ''
            }]
        });
    } 
    else if (action.type === actions.DELETE_WORD_SUCCESS) {
        const index = state.words.findIndex((wordObj => wordObj.id === action.wordId));
        const newState = update(state, {words: { $splice: [[index, 1]]}}
        );

        return newState;
    }
    else if (action.type === actions.DROP_WORD) {
        const index = state.words.findIndex((wordObj => wordObj.word === action.word))
        const updatedWord = update(state.words[index], {
            target: {$set: action.target},
            answer: {$set: action.answer}
        });

        const newState = update(state, {words: { $splice: [[index, 1]]} });

        newState.words = update(newState.words, {$push: [updatedWord]});

        return newState;
    }
    else if (action.type === actions.RESTORE_DEFAULT_WORDS) {
        return Object.assign({}, state, {
            words: initialState.words
        });
    } 
    else if (action.type === actions.RESET_GAME) {
        return userState || initialState;
    }
    return state;
}