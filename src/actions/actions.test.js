import { UPDATE_SENTENCE, updateSentence, SHOW_RESPONSE, showResponse, RESET_GAME, resetGame } from './conjunctionsActions';
import { ADD_WORD, addWord, DROP_WORD, dropWord, RESET_GAME as RESET_GAME_WORDTYPES, resetGame as resetGameWordTypes } from './wordTypeActions';
import { SET_SENTENCE, setSentence, SET_ANSWER, setAnswer, ADD_POINTS, addPoints, LOSE_LIFE, loseLife, RESET_GAME as RESET_GAME_PREPOSITIONS, resetGame as resetGamePrepositions } from './prepositionsActions';

describe('Conjunctions Actions', () => {
    
    describe('updateSentence', () => {
        it('Should return the action', () => {
            const sentence = "I like football, but my brother doesn't";
            const action = updateSentence(sentence);
            expect(action.type).toEqual(UPDATE_SENTENCE);
            expect(action.sentence).toEqual(sentence);
        });
    });
    
    describe('showResponse', () => {
        it('Should return the action', () => {
            const message = 'A message about the sentence';
            const mood = 'happy';
            const action = showResponse(message, mood);
            expect(action.type).toEqual(SHOW_RESPONSE);
            expect(action.message).toEqual(message);
            expect(action.mood).toEqual(mood);
        });
    });

    describe('resetGame', () => {
        it('Should return the action', () => {
            const action = resetGame();
            expect(action.type).toEqual(RESET_GAME);
        });
    });

});

describe('Word Type Actions', () => {
    
    describe('addWord', () => {
        it('Should return the action', () => {
            const word = {
                word: 'cheese',
                wordType: 'noun',
                target: 'Container',
                answer: ''
            };
            const action = addWord(word);
            expect(action.type).toEqual(ADD_WORD);
            expect(action.word).toEqual(word);
        });
    });
    
    describe('dropWord', () => {
        it('Should return the action', () => {
            const word = 'house';
            const target = 'Verbs';
            const answer = 'incorrectType';
            const action = dropWord(word, target, answer);
            expect(action.type).toEqual(DROP_WORD);
            expect(action.word).toEqual(word);
            expect(action.target).toEqual(target);
            expect(action.answer).toEqual(answer);
        });
    });

    describe('resetGame', () => {
        it('Should return the action', () => {
            const action = resetGameWordTypes();
            expect(action.type).toEqual(RESET_GAME_WORDTYPES);
        });
    });

});

describe('Prepositions Actions', () => {

    const sentence = 'I had a great time tonight looking _____ at the sky.';
    const answer = 'up';

    describe('setSentence', () => {
        it('Should return the action', () => {
            const action = setSentence(sentence);
            expect(action.type).toEqual(SET_SENTENCE);
            expect(action.sentence).toEqual(sentence);
        });
    });

    describe('setAnswer', () => {
        it('Should return the action', () => {
            const action = setAnswer(answer);
            expect(action.type).toEqual(SET_ANSWER);
            expect(action.answer).toEqual(answer);
        });
    });

    describe('addPoints', () => {
        it('Should return the action', () => {
            const action = addPoints();
            expect(action.type).toEqual(ADD_POINTS);
        });
    });

    describe('addPoints', () => {
        it('Should return the action', () => {
            const action = addPoints();
            expect(action.type).toEqual(ADD_POINTS);
        });
    });

    describe('loseLife', () => {
        it('Should return the action', () => {
            const action = loseLife();
            expect(action.type).toEqual(LOSE_LIFE);
        });
    });

    describe('resetGame', () => {
        it('Should return the action', () => {
            const action = resetGamePrepositions();
            expect(action.type).toEqual(RESET_GAME_PREPOSITIONS);
        });
    });
});
