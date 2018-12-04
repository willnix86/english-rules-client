import { UPDATE_SENTENCE, updateSentence, SHOW_RESPONSE, showResponse, RESET_GAME, resetGame } from './conjunctionsActions';
import { ADD_WORD, addWord, DROP_WORD, dropWord, RESET_GAME as RESET_GAME_WORDTYPES, resetGame as resetGameWordTypes } from './wordTypeActions';

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
