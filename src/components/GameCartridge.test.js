import React from 'react';
import {shallow} from 'enzyme';
import GameCartridge from './GameCartridge';

describe('<GameCartridge />', () => {

    it('renders without crashing', () => {
        shallow(<GameCartridge title={'a game'} />);
    });

})