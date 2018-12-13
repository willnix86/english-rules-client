import * as actions from '../actions/prepositionsActions';
import update from 'immutability-helper';

export const initialState = {
    prepositions: [],
    sentences: [],
    currentSentence: 'Complete each sentence with the correct preposition.',
    currentAnswer: '',
    lives: 3,
    points: 0
};

export const prepositionsReducer = (state=initialState, action) => {
    if (action.type === actions.SET_USER_SENTENCES) {
        let userPreps = action.sentences.map(sentence => sentence.answer);
        let userSentences = action.sentences.map(sentence => sentence.sentence);
        return Object.assign({}, state, {
            prepositions: userPreps,
            sentences: [...state.sentences, userSentences]
        });
    }
    else if (action.type === actions.SET_SENTENCE) {
        const newState = update(state, {
            currentSentence: {$set: action.sentence}
        });
        return newState;
    }
    else if (action.type === actions.SET_ANSWER) {
        const newState = update(state, {
            currentAnswer: {$set: action.answer}
        });
        return newState;
    }
    else if (action.type === actions.ADD_POINTS) {
        const newState = update(state, {
            points: {$set: state.points + 100}
        })
        return newState;
    }
    else if (action.type === actions.LOSE_LIFE) {
        const newState = update(state, {
            lives: {$set: state.lives - 1}
        })
        return newState;
    }
    else if (action.type === actions.RESET_GAME) {
        return initialState;
    }
    return state;
}