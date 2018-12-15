import React from 'react';
import {shallow, mount} from 'enzyme';
import GameCartridge from './GameCartridge';

describe('<GameCartridge />', () => {

    it('renders without crashing', () => {
        shallow(<GameCartridge title={'a game'} />);
    });

    it('renders an image with the right source and alt', () => {
        const wrapper = mount(<GameCartridge title={'a game'} />);
        expect(wrapper.find('img').prop('src')).toEqual(window.location.origin + "/" + "agame.png");
        expect(wrapper.find('img').prop('alt')).toEqual("Image of a game");
    })

})