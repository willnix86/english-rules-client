import React from 'react';
import {shallow, mount} from 'enzyme';
import {Conjunctions} from './Conjunctions';

describe('<Conjunctions />', () => {

    it('renders without crashing', () => {
        shallow(<Conjunctions />);
    });

});