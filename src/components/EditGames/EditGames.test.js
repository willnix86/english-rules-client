import React from 'react';
import {shallow} from 'enzyme';
import EditGames from './EditGames';

describe('<EditGames />', () => {

    it('renders without crashing', () => {
        shallow(<EditGames />);
    });

})