import { userReducer } from './userReducer';
import { conjunctionsReducer } from './conjunctionsReducer';
import { updateSentence, showResponse } from '../actions/conjunctionsActions';

// NEED TO ADD USER TESTS

describe('conjunctionsReducer', () => {
    const sentence = "I like to play games and so do my friends.";
    const mood = "uhoh";
    const message = "A generic message";

    it('Should set the initial state when nothing is passed in', () => {
        const state = conjunctionsReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            conjunctions: ['and', 'but', 'or', 'nor', 'for', 'yet', 'so'],
            sentence: '',
            message: 'Type or click the buttons below to write a compound sentence.',
            mood: 'talking'
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = conjunctionsReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('updateSentence', () => {
        it('Should update the sentence', () => {
            let state;
            state = conjunctionsReducer(state, updateSentence(sentence));
            expect(state.sentence).toEqual(sentence);
        });
    });

    describe('showResponse', () => {
        it('Should show a response to player\'s sentence', () => {
            let state;
            state = conjunctionsReducer(state, showResponse(message, mood));
            expect(state.message).toEqual(message);
            expect(state.mood).toEqual(mood);
        });
    });

});