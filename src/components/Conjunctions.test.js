import React from 'react';
import {shallow, mount} from 'enzyme';
import {Conjunctions} from './Conjunctions';
import { updateSentence, showResponse } from '../actions/conjunctionsActions';

describe('<Conjunctions />', () => {

    it('renders without crashing', () => {
        shallow(<Conjunctions />);
    });

    it('dispatches updateSentence from addWord', () => {
        const dispatch = jest.fn();
        const sentence = "The prince was once a ";
        const wrapper = mount(<Conjunctions sentence={sentence} dispatch={dispatch} /> );
        
        const instance = wrapper.instance();
        const word = 'frog';

        instance.addWord(word);
        expect(dispatch).toHaveBeenCalledWith(updateSentence(((sentence + " " + word).trim())));
    });

    it('dispatches updateSentence from handleChange', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<Conjunctions dispatch={dispatch} /> );
        const event = {
            preventDefault() {},
            target: {value: 'value'}
        };
        dispatch.mockClear();
        wrapper.find('form').find('input').simulate('change', event);
        expect(dispatch).toHaveBeenCalledWith(updateSentence('value'));
    });

    it('dispatches showResponse from handleSubmit if sentence is empty', () => {
        const dispatch = jest.fn();
        const sentence = "";
        const wrapper = mount(<Conjunctions sentence={sentence} dispatch={dispatch} /> );

        dispatch.mockClear();
        const message = 'Don\'t forget to write something!';
        const mood = 'uhoh';

        wrapper.find('form').simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(showResponse(message, mood));
    })

});