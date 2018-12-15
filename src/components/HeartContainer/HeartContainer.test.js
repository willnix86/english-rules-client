import React from 'react';
import {shallow, mount} from 'enzyme';
import HeartContainer from './HeartContainer';

describe('<HeartContainer />', () => {

    it('renders without crashing', () => {
        shallow(<HeartContainer />);
    });

    it('renders the children it\'s passed in', () => {
        const wrapper = mount(
            <HeartContainer>
                <button>Test</button>
                <button>Test 2</button>
            </HeartContainer>
        );

        expect(wrapper.find('button').length).toEqual(2);
    })

})