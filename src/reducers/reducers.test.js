import { conjunctionsReducer, initialState as conjunctionsState } from './conjunctionsReducer';
import { wordTypesReducer, initialState as wordTypesState } from './wordTypesReducer';
import { prepositionsReducer, initialState as prepositionsState } from './prepositionsReducer';
import { userReducer, initialState as usersState } from './userReducer';
import { setUserData, userLogout } from '../actions/userActions';
import { updateSentence, showResponse, resetGame as resetGameConjunctions } from '../actions/conjunctionsActions';
import { addWord, dropWord, resetGame as resetGameWordTypes, setUserWords } from '../actions/wordTypeActions';
import { addPoints, loseLife, resetGame as resetGamePrepositions, setUserSentences } from '../actions/prepositionsActions';

describe('usersReducer', () => {

    let user = {
        username: "test@test.com"
    }

    it('Should set the initial state when nothing is passed in', () => {
        const state = userReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual(usersState);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = userReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('setUserData', () => {
        it('Should update the user state with user info', () => {
            let state;
            state = userReducer(state, setUserData(user));
            expect(state.username).toEqual(user.username);
        })
    });

    describe('userLogout', () => {
        it('Should reset state on user logout', () => {
            let state;
            state = userReducer(state, userLogout());
            expect(state).toEqual(usersState);
        })
    })
})

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
            state = conjunctionsReducer(state, resetGameConjunctions());
            expect(state).toEqual(conjunctionsState);
        });
    });

});

describe('wordTypeReducer', () => {
    let droppedWord = {
        word: 'house',
        wordType: 'Nouns',
        target: 'Nouns',
        answer: 'correctType'
    };

    let word = {
        word: 'cheese',
        wordType: 'Nouns',
        target: 'Container',
        answer: ''}

    it('Should set the initial state when nothing is passed in', () => {
        const state = wordTypesReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual(wordTypesState);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = wordTypesReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('setUserWord', () => {

        let wordObjs = [{
            word: 'cheese',
            wordType: 'Nouns',
            target: 'Container',
            answer: ''}];

        it('Should return custom words instead of initialState', () => {
            let state;
            state = wordTypesReducer(state, setUserWords(wordObjs));
            expect(state.words).toEqual(wordObjs);
        });

    });


    describe('addWord', () => {
        it('Should add word to state', () => {
            let state;
            state = wordTypesReducer(state, addWord(word));
            expect(state.words[state.words.length - 1]).toEqual(word);
        });
    });

    describe('dropWord', () => {
        it('Should update state with droppedWord', () => {
            let state;
            state = wordTypesReducer(state, dropWord(droppedWord.word, droppedWord.target, droppedWord.answer));
            expect(state.words[(state.words.length - 1)]).toEqual(droppedWord);
        });
    });

    describe('resetGame', () => {
        it('Should reset state back to initial state', () => {
            let state;
            state = wordTypesReducer(state, resetGameWordTypes());
            expect(state).toEqual(state);
        });
    });

});

describe('prepositionsReducer', () => {

    it('Should set the initial state when nothing is passed in', () => {
        const state = prepositionsReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual(prepositionsState);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = prepositionsReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('setUserSentences', () => {

        let sentencesObj = [{
            sentence: 'I went _____ to the attic',
            answer: 'up'
        }];

        let prepositions = ['up'];

        it('Should return custom sentences instead of initialState', () => {
            let state;
            state = prepositionsReducer(state, setUserSentences(sentencesObj));
            expect(state.prepositions).toEqual(prepositions);
            expect(state.sentences).toEqual(sentencesObj);
        });

    });

    describe('addLife', () => {
        it('Should add points to the player\'s score', () => {
            let state;
            state = prepositionsReducer(state, addPoints());
            expect(state.points).toEqual(100);
        });
    });

    describe('loseLife', () => {
        it('Should take a life away from the player', () => {
            let state;
            state = prepositionsReducer(state, loseLife());
            expect(state.lives).toEqual(2); 
        });
    });

    describe('resetGame', () => {
        it('Should reset state back to initial state', () => {
            let state;
            state = prepositionsReducer(state, resetGamePrepositions());
            expect(state).toEqual(state);
        });
    });

})