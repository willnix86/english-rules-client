import React from 'react';
import { mount } from 'enzyme';
import { WordBox } from './WordBox';


describe('<WordBox />', () => {

    it('renders without crashing', () => {
        mount(<WordBox />);
    });

});