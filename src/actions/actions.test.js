import { UPDATE_SENTENCE, updateSentence, SHOW_RESPONSE, showResponse } from './conjunctionsActions';


describe('Conjunctions Actions', () => {
    
    describe('updateSentence', () => {
        it('Should update sentence', () => {
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

});

