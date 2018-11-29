import React from 'react';
import {shallow} from 'enzyme';
import {LandingPage} from './LandingPage';
import {SignUpForm} from './SignUpForm';

describe('<LandingPage />', () => {

    it('renders without crashing', () => {
        shallow(<LandingPage />);
    });

    it('renders <SignUpForm />', () => {
        const wrapper = shallow(<LandingPage/>);
        expect(wrapper.find(SignUpForm).length).toEqual(1);
        expect(wrapper.find("section").length).toEqual(5);
    });

})