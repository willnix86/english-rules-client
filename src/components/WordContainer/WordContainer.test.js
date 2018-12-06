import React from 'react';
import {shallow} from 'enzyme';
import WordContainer from '../WordContainer/WordContainer';

describe('<WordContainer />', () => {
    
    it('renders without crashing', () => {
        shallow(<WordContainer />);
    });

})