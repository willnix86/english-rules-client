import React from 'react';
import {shallow, mount} from 'enzyme';
import {SignUpForm} from './SignUpForm';

describe('<SignUpForm />', () => {

    it('renders without crashing', () => {
        shallow(<SignUpForm />);
    });

    // it('should fire the onSubmit callback when the button is clicked', () => {
    //     const callback = jest.fn();
    //     const wrapper = mount(<SignUpForm onSubmit={callback} />);
    //     wrapper.simulate('click');
    //     expect(callback).toHaveBeenCalled();
    // });

})