import React from 'react';
import {shallow } from 'enzyme';
import { LoginControl } from './LoginControl';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('<LoginControl />', () => {

    let store = mockStore({});

    it('renders without crashing', () => {
        shallow(<LoginControl store={store}/>);
    });

})