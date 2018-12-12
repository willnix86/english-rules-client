import React from 'react';
import {shallow } from 'enzyme';
import { LoginControl } from './LoginControl';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

describe('<LoginControl />', () => {

    let store = mockStore({});

    it('renders without crashing', () => {
        shallow(<LoginControl store={store}/>);
    });

})