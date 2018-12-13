import * as actions from '../actions/prepositionsActions';
import update from 'immutability-helper';

export const initialState = {
    prepositions: ['in', 'on', 'at', 'around', 'above', 'during', 'after', 'across', 'up', 'behind'],
    sentences: [
        {
            sentence: 'My brother has a new job. He works _____ the evening.',
            answer: 'in'
        },
        {
            sentence: 'Tom\'s birthday is next week, _____ January 14.',
            answer: 'on'
        },
        {
            sentence: 'I like to get up early, _____ sunrise, when the birds start to sing.',
            answer: 'at'
        },
        {
            sentence: 'My aunt wrapped her arms _____ me.',
            answer: 'around'
        },
        {
            sentence: 'Ted looked up at the sky _____ him. Wow, look at all those stars!',
            answer: 'above'
        },
        {
            sentence: 'It snowed six inches _____ the night. That\'s normal for Chicago in winter!',
            answer: 'during'
        },
        {
            sentence: 'I can\'t come round yet, but I\'ll come over _____ dinner.',
            answer: 'after'
        },
        {
            sentence: 'Erin lives _____ the street from me. She\'s my best friend.',
            answer: 'across'
        },
        {
            sentence: 'The goats climbed _____ the cliff quickly.',
            answer: 'up'
        },
        {
            sentence: 'Watch out, he\'s _____ you!',
            answer: 'behind'
        }       
    ],
    currentSentence: 'Complete each sentence with the correct preposition.',
    currentAnswer: '',
    lives: 3,
    points: 0
}

export let userState;

export const prepositionsReducer = (state=initialState, action) => {
    if (action.type === actions.SET_USER_SENTENCES) {
        let sentenceObjs = action.sentences.map(sentence => ({
            sentence: sentence.sentence,
            answer: sentence.answer
        }));
        let prepositions = sentenceObjs.map(sentence => sentence.answer);
        if (sentenceObjs.length > 0) {
            userState = Object.assign({}, state, {
                prepositions: prepositions,
                sentences: sentenceObjs
            });
            return userState;
        } else {
            return initialState;
        }
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
        return userState || initialState;
    }
    return state;
}