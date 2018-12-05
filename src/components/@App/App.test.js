import React from 'react';
import {shallow} from 'enzyme';
import {App} from '../@App/App';
import {NavigationBar} from '../NavigationBar/NavigationBar';
import {Footer} from '../Footer/Footer';

describe('<App />', () => {

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders <NavigationBar /> and <Footer />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(NavigationBar).length).toEqual(1);
    expect(wrapper.find(Footer).length).toEqual(1);
  });

})

