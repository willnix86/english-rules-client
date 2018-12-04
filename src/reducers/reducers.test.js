import { conjunctionsReducer } from './conjunctionsReducer';
import { wordTypesReducer, initialState } from './wordTypesReducer';
import { updateSentence, showResponse, resetGame } from '../actions/conjunctionsActions';
import { addWord, dropWord, resetGame as resetGameWordTypes } from '../actions/wordTypeActions';

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

    describe('resetGame', () => {
        it('Should reset state back to initial state', () => {
            let state;
            state = conjunctionsReducer(state, resetGame());
            expect(state).toEqual({
                conjunctions: ['and', 'but', 'or', 'nor', 'for', 'yet', 'so'],
                sentence: '',
                message: 'Type or click the buttons below to write a compound sentence.',
                mood: 'talking'
            })
        })
    })

});

describe('wordTypeReducer', () => {
    let droppedWord = {
        word: 'house',
        wordType: 'noun',
        target: 'Nouns',
        answer: 'correctType'
    };

    let word = {
        word: 'cheese',
        wordType: 'noun',
        target: 'Container',
        answer: ''}

    it('Should set the initial state when nothing is passed in', () => {
        const state = wordTypesReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual(initialState);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = wordTypesReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('addWord', () => {
        it('Should add word to state', () => {
            let state;
            state = wordTypesReducer(state, addWord(word));
            expect(state.words[state.words.length - 1]).toEqual(word);
        })
    });

    describe('dropWord', () => {
        it('Should update state with droppedWord', () => {
            let state;
            state = wordTypesReducer(state, dropWord(droppedWord.word, droppedWord.target, droppedWord.answer));
            expect(state.words[(state.words.length - 1)]).toEqual(droppedWord);
        })
    })

    describe('resetGame', () => {
        it('Should reset state back to initial state', () => {
            let state;
            state = wordTypesReducer(state, resetGameWordTypes());
            expect(state).toEqual(initialState);
        })
    })

});