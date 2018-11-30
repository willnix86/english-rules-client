import React from 'react';
import {shallow, mount} from 'enzyme';
import {Conjunctions} from './Conjunctions';
import MoodImage from './MoodImage';

describe('<Conjunctions />', () => {

    it('renders without crashing', () => {
        shallow(<Conjunctions />);
    });

    it('initially renders <MoodImage /> with TALKING prop', () => {
        const wrapper = mount(<Conjunctions />);
        expect(wrapper.find(MoodImage).length).toEqual(1);
        expect(wrapper.find(MoodImage).props()).toEqual({"mood": "talking"});
        wrapper.unmount();
    });
    
    it('initially renders "startText" div', () => {
        const wrapper = shallow(<Conjunctions />);
        expect(wrapper.find('.startText').length).toEqual(1);
        expect(wrapper.find('.startText').find('p').text()).toEqual("Type or click on the words below to write a compound sentence.");
    })

});