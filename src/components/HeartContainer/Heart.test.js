import React from 'react';
import {shallow} from 'enzyme';
import Heart from './Heart';

describe('<Heart />', () => {

    it('renders without crashing', () => {
        shallow(<Heart />);
    });

})