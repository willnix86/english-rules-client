import React from 'react';
import {shallow} from 'enzyme';
import {NavigationBar} from './NavigationBar';
import {LoginControl} from '../LoginControl/LoginControl';

describe('<NavigationBar />', () => {

    it('renders without crashing', () => {
        shallow(<NavigationBar />);
    });

    it('renders <LoginControl />', () => {
        const wrapper = shallow(<NavigationBar />);
        expect(wrapper.find(LoginControl).length).toEqual(1);
    });

})

