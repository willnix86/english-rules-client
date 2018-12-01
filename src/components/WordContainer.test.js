import React from 'react';
import {shallow, mount} from 'enzyme';
import WordContainer from './WordContainer';

describe('<WordContainer />', () => {

    const conjunctions = ['and', 'but', 'or', 'nor', 'for', 'yet', 'so'];
    
    it('renders without crashing', () => {
        shallow(<WordContainer conjunctions={conjunctions} />);
    });

    it('renders the correct amount of buttons', () => {
        
        const wrapper = mount(<WordContainer conjunctions={conjunctions}  />);

        expect(wrapper.find('ul').children('li').length).toEqual(conjunctions.length);

    })

})