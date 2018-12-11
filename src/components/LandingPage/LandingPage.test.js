import React from 'react';
import {shallow} from 'enzyme';
import {LandingPage} from './LandingPage';
import {SignUpForm} from '../SignUpForm/SignUpForm';

describe('<LandingPage />', () => {

    it('renders without crashing', () => {
        shallow(<LandingPage />);
    });

})