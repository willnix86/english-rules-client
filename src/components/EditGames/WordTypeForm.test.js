import React from 'react';
import {mount} from 'enzyme';
import WordTypeForm from './EditGames';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const mockStore = configureMockStore([thunk]);

describe('<WordTypeForm />', () => {

    let store = mockStore({});

    it('renders without crashing', () => {

        mount(
            <Provider store={store}>
                <WordTypeForm />
            </Provider>
        );

    });

})