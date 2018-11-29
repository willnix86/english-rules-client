import React from 'react';
import {shallow, mount} from 'enzyme';
import MoodBar from './moodBar';

describe('<MoodBar />', () => {

    it('renders without crashing', () => {
        shallow(<MoodBar />);
    });

    it('rerenders <MoodBar /> when props change', () => {
        const wrapper = mount(<MoodBar percentHappy={0} />);
        expect(wrapper.find(MoodBar).props()).toEqual({"percentHappy": 0});
        wrapper.setProps({percentHappy: 75});
        wrapper.update();
        expect(wrapper.find(MoodBar).props()).toEqual({"percentHappy": 75});
      });

    it('<p> shows correct percentages', () => {
        const wrapper = mount(<MoodBar percentHappy="75" percentSad="25" />);
        expect(wrapper.find('p').text()).toEqual("Your sentence was 75% happy and 25% sad")
    });

    it('should render a bar the correct width', () => {
        const wrapper = mount(<MoodBar percentHappy="75" />);

        expect(wrapper.find('div').children('div').props().style.width).toEqual('75%');
    });

});