import React from 'react';
import { shallow, mount } from 'enzyme';
import { WordTypes } from './WordTypes';
import { WordBox } from './WordBox';

describe('<WordTypes />', () => {

    it('renders without crashing', () => {
        shallow(<WordTypes />)
    });

})