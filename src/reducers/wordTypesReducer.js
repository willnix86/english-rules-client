import * as actions from '../actions/wordTypeActions';
import update from 'immutability-helper';

export const initialState = {
    words: [],
    startTime: 0,
    finishTime: 0
}

let userState;

export const wordTypesReducer = (state=initialState, action) => {
    if (action.type === actions.SET_USER_WORDS) {
        let wordObjs = action.wordObjs.map(wordObj => ({
            word: wordObj.word,
            answer: wordObj.answer,
            wordType: wordObj.wordType,
            target: 'Container',
            answer: ''
        }))
        userState = Object.assign({}, state, {
            words: wordObjs
        });
        return userState;
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
        return userState;
    }
    return state;
}