import React from 'react';
import {shallow, mount} from 'enzyme';
import WordContainer from './wordContainer';
import WordButton from './wordButton';

describe('<WordContainer />', () => {

    const happyWordList = ['happy', 'joyful', 'gleeful', 'jovial', 'glad'];

    const sadWordList = ['sad', 'miserable', 'depressed', 'bad', 'grumpy'];
    
    it('renders without crashing', () => {
        shallow(<WordContainer happyWords={happyWordList} sadWords={sadWordList} />);
    });

    it('renders the correct amount of buttons', () => {
        
        const wrapper = mount(<WordContainer happyWords={happyWordList} sadWords={sadWordList} />);

        expect(wrapper.find('ul').children('li').length).toEqual(happyWordList.length + sadWordList.length);

    })
    



})