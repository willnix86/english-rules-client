import React from 'react';
import { shallow, mount } from 'enzyme';
import { Prepositions } from './Prepositions';
import { setSentence, setAnswer, resetGame } from '../../actions/prepositionsActions';

describe('<Prepositions />', () => {

    it('renders without crashing', () => {
        shallow(<Prepositions prepositions={['up']} />)
    });

    it('dispatches setAnswer from startGame', () => {
        const dispatch = jest.fn();
        const wrapper = mount(
        <Prepositions 
            dispatch={dispatch} 
            prepositions={['up']} 
            sentences={[{
                sentence: 'I went to my friend\'s ____ the road.', 
                answer: 'across'
            }]} />
        );
        
        const instance = wrapper.instance();
        const answer = 'across';

        instance.startGame();
        expect(dispatch).toHaveBeenCalledWith(setAnswer(answer));
    });

    it('dispatches setSentence and setAnswer from loadNextQuestion', () => {
        const dispatch = jest.fn();
        const wrapper = mount(
        <Prepositions 
            dispatch={dispatch}
            prepositions={['up']} 
            sentences={[{
                sentence: 'I went to my friend\'s ____ the road.', 
                answer: 'across'
            }, {
                sentence: 'This is a test for testing. It\'s _____ you!',
                answer: 'behind'
            }]} />
        );
        
        const instance = wrapper.instance();
        const sentence = 'This is a test for testing. It\'s _____ you!';
        const answer = 'behind'

        instance.loadNextSentence();
        expect(dispatch).toHaveBeenCalledWith(setSentence(sentence));
        expect(dispatch).toHaveBeenCalledWith(setAnswer(answer));
    });

    it('dispatches resetGame from resetGame', () => {
        const dispatch = jest.fn();
        const wrapper = mount(
        <Prepositions 
            dispatch={dispatch} 
            prepositions={['up']} 
            sentences={[{
                sentence: 'I went to my friend\'s ____ the road.', 
                answer: 'across'
            }]} />
        );
        
        const instance = wrapper.instance();

        instance.resetGame();
        expect(dispatch).toHaveBeenCalledWith(resetGame());
    })

})