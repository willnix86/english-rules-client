import React from 'react';
import {shallow, mount} from 'enzyme';
import ProgressBar from './ProgressBar';

describe('<ProgressBar />', () => {

    it('renders without crashing', () => {
        shallow(<ProgressBar />);
    });

    it('rerenders <ProgressBar /> when props change', () => {
        const wrapper = mount(<ProgressBar AMOUNT={0} />);
        expect(wrapper.find(ProgressBar).props()).toEqual({"AMOUNT": 0});
        wrapper.setProps({AMOUNT: 75});
        wrapper.update();
        expect(wrapper.find(ProgressBar).props()).toEqual({"AMOUNT": 75});
    });

    // it('<p> shows correct percentages', () => {
    //     const wrapper = mount(<ProgressBar AMOUNT="75" />);
    //     expect(wrapper.find('p').text()).toEqual("Your sentence was 75% happy")
    // });

    it('should render a bar the correct width', () => {
        const wrapper = mount(<ProgressBar AMOUNT="75" />);

        expect(wrapper.find('div').children('div').props().style.width).toEqual('75%');
    });

});