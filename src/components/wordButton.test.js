import React from 'react';
import {shallow, mount} from 'enzyme';
import WordButton from './wordButton';

describe('<WordButton />', () => {

    it('renders without crashing', () => {
        shallow(<WordButton />);
    });

    it('renders with correct className', () => {
        const wrapper = mount(<WordButton className="happyButton" />);
        
        expect(wrapper.hasClass('happyButton')).toEqual(true);
    });

    it('renders with correct value', () => {
        const wrapper = mount(<WordButton value="happy" />);
        
        expect(wrapper.props().value).toEqual('happy');
    });

    it('should fire the onClick callback when the button is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<WordButton onClick={callback} />);
        wrapper.simulate('click');
        expect(callback).toHaveBeenCalled();
    });

});

