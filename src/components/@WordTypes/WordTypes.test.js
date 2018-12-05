import React from 'react';
import { shallow, mount } from 'enzyme';
import { WordTypes } from './WordTypes';
import { DraggableWord } from '../@DraggableWord/DraggableWord';

describe('<WordTypes />', () => {

    it('renders without crashing', () => {
        shallow(<WordTypes />)
    });

})