import React from 'react';
import {shallow, mount} from 'enzyme';
import {SentenceVariation} from './SentenceVariation';
import MoodImage from './MoodImage';

describe('<SentenceVariation />', () => {

    it('renders without crashing', () => {
        shallow(<SentenceVariation />);
    });

    it('initially renders <MoodImage /> with TALKING prop', () => {
        const wrapper = mount(<SentenceVariation />);
        expect(wrapper.find(MoodImage).length).toEqual(1);
        expect(wrapper.find(MoodImage).props()).toEqual({"mood": "talking"});
        wrapper.unmount();
    });
    
    it('initially renders "startText" div', () => {
        const wrapper = shallow(<SentenceVariation />);
        expect(wrapper.find('.startText').length).toEqual(1);
        expect(wrapper.find('.startText').find('p').text()).toEqual("Type or click on the words below to write a compound sentence.");
    })

});