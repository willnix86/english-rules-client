import React from 'react';
import {shallow, mount} from 'enzyme';
import {LoginControl} from './LoginControl';

describe('<LoginControl />', () => {

    it('renders without crashing', () => {
        shallow(<LoginControl />);
    });

    it('should render LOGIN button if no user is logged in', () => {
        const wrapper = mount(<LoginControl />);
        expect(wrapper.find(LoginControl).props()).not.toEqual({"loggedIn":"false"});
        expect(wrapper.find('button').prop('children')).toEqual("Login");
    });

    it('should render LOGOUT button if user is logged in', () => {
        const wrapper = mount(<LoginControl loggedIn="true"/>);
        expect(wrapper.find(LoginControl).props()).toEqual({"loggedIn":"true"});
        expect(wrapper.find('button').prop('children')).toEqual("Logout");
    });

    // it('should fire the onSubmit callback when the button is clicked', () => {
    //     const callback = jest.fn();
    //     const wrapper = mount(<SignUpForm onSubmit={callback} />);
    //     wrapper.simulate('click');
    //     expect(callback).toHaveBeenCalled();
    // });

})