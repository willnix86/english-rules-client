import React from 'react';
import {shallow, mount} from 'enzyme';
import WordContainer from '../WordContainer/WordContainer';

describe('<WordContainer />', () => {

    const conjunctions = ['and', 'but', 'or', 'nor', 'for', 'yet', 'so'];
    
    it('renders without crashing', () => {
        shallow(<WordContainer words={conjunctions} />);
    });

    it('renders the correct amount of children', () => {
        
        const wrapper = mount(<WordContainer words={conjunctions} className={'buttons'} />);

        expect(wrapper.find('ul').children('li').length).toEqual(conjunctions.length);

    })

})