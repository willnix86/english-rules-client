import React from 'react';
import {shallow} from 'enzyme';
import {Home} from './Home';

describe('<Home />', () => {

    const games = ['Placeholder'];

    it('renders without crashing', () => {
        shallow(<Home games={games} />);
    });

})
