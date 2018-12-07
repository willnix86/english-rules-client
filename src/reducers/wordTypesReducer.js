import * as actions from '../actions/wordTypeActions';
import update from 'immutability-helper';

export const initialState = {
    words: [{
        word: 'house',
        wordType: 'noun',
        target: 'Container',
        answer: ''
    },
    {
        word: 'eggs',
        wordType: 'noun',
        target: 'Container',
        answer: ''
    },
    {
        word: 'children',
        wordType: 'noun',
        target: 'Container',
        answer: ''
    },
    {
        word: 'football',
        wordType: 'noun',
        target: 'Container',
        answer: ''
    },
    {
        word: 'glass',
        wordType: 'noun',
        target: 'Container',
        answer: ''
    },
    {
        word: 'red',
        wordType: 'adjective',
        target: 'Container',
        answer: ''
    },
    {
        word: 'yummy',
        wordType: 'adjective',
        target: 'Container',
        answer: ''
    },
    {
        word: 'wooden',
        wordType: 'adjective',
        target: 'Container',
        answer: ''
    },
    {
        word: 'quick',
        wordType: 'adjective',
        target: 'Container',
        answer: ''
    },
    {
        word: 'rough',
        wordType: 'adjective',
        target: 'Container',
        answer: ''
    },
    {
        word: 'play',
        wordType: 'verb',
        target: 'Container',
        answer: ''
    },
    {
        word: 'going',
        wordType: 'verb',
        target: 'Container',
        answer: ''
    },
    {
        word: 'skipped',
        wordType: 'verb',
        target: 'Container',
        answer: ''
    },
    {
        word: 'eat',
        wordType: 'verb',
        target: 'Container',
        answer: ''
    },
    {
        word: 'read',
        wordType: 'verb',
        target: 'Container',
        answer: ''
    }],
    startTime: 0,
    finishTime: 0
}

export const wordTypesReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_WORD) {
        return Object.assign({}, state, {
            words: [...state.words, {
                word: action.word.word,
                wordType: action.word.wordType,
                target: 'Container',
                answer: ''
            }]
        });
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
    else if (action.type === actions.RESET_GAME) {
        return initialState;
    }
    return state;
}