import * as actions from '../actions/conjunctionsActions'

const initialState = {
    conjunctions: ['and', 'but', 'or', 'nor', 'for', 'yet', 'so'],
    sentence: '',
    message: '',
    mood: 'talking'
}

export const conjunctionsReducer = (state=initialState, action) => {
    if (action.type === actions.UPDATE_SENTENCE) {
        return Object.assign({}, state, {
            sentence: action.sentence
        });
    } else if (action.type === actions.SHOW_RESPONSE) {
        return Object.assign({}, state, {
            message: action.message,
            mood: action.mood
        });
    }
    return state;
};