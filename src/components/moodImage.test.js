import React from 'react';
import {shallow, mount} from 'enzyme';
import MoodImage from './moodImage';
import image from './../../public/talking.png';

describe('<MoodImage />', () => {

  it('renders without crashing', () => {
      shallow(<MoodImage />);
    });

  it('renders an image', () => {
    const wrapper = shallow(<MoodImage mood="talking" />);
    expect(wrapper.find('img').prop('src')).toEqual("http://localhost/" + image);
    expect(wrapper.find('img').prop('alt')).toEqual("talking face");

  })

  it('rerenders <MoodImage /> when MOOD prop is happy', () => {
      const wrapper = mount(<MoodImage mood="talking" />);
      expect(wrapper.find(MoodImage).props()).toEqual({"mood": "talking"});
      wrapper.setProps({mood: "happy"});
      wrapper.update();
      expect(wrapper.find(MoodImage).props()).toEqual({"mood": "happy"});
      expect(wrapper.find('img').prop('alt')).toEqual("happy face");
    });

    it('rerenders <MoodImage /> when MOOD prop is sad', () => {
      const wrapper = mount(<MoodImage mood="talking" />);
      expect(wrapper.find(MoodImage).props()).toEqual({"mood": "talking"});
      wrapper.setProps({mood: "sad"});
      wrapper.update();
      expect(wrapper.find(MoodImage).props()).toEqual({"mood": "sad"});
      expect(wrapper.find('img').prop('alt')).toEqual("sad face");
    });

    it('rerenders <MoodImage /> when MOOD prop is woops', () => {
      const wrapper = mount(<MoodImage mood="talking" />);
      expect(wrapper.find(MoodImage).props()).toEqual({"mood": "talking"});
      wrapper.setProps({mood: "woops"});
      wrapper.update();
      expect(wrapper.find(MoodImage).props()).toEqual({"mood": "woops"});
      expect(wrapper.find('img').prop('alt')).toEqual("woops face");
    });

});