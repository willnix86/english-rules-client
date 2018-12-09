import React from 'react';
import {shallow} from 'enzyme';
import HeartContainer from './HeartContainer';

describe('<HeartContainer />', () => {

    it('renders without crashing', () => {
        shallow(<HeartContainer />);
    });

})