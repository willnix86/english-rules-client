import React from 'react';
import {shallow, mount} from 'enzyme';
import WordContainer from '../WordContainer/WordContainer';

describe('<WordContainer />', () => {
    
    it('renders without crashing', () => {
        shallow(<WordContainer />);
    });

    it('should render children passed in as props', () => {

        const wrapper = mount(
            <WordContainer>
                <button>Test</button>
                <button>Test 2</button>
            </WordContainer>);

        expect(wrapper.find('button').length).toEqual(2);

    })

})