import React from 'react';
import { shallow } from 'enzyme';
import { WordTypes } from './WordTypes';

describe('<WordTypes />', () => {

    it('renders without crashing', () => {
        shallow(<WordTypes />)
    });

})