import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './components/@App/App';
import * as serviceWorker from './serviceWorker';
import Modal from 'react-modal';
import {loadAuthToken} from './localStorage';
import {setAuthToken, refreshAuthToken, storeAuthInfo} from './actions/auth';
import './index.css';

Modal.setAppElement('#root');

const authToken = loadAuthToken();
(async function init() {
    if (authToken) {
        const token = authToken.authToken;
        const userId = authToken.userId;
        await store.dispatch(storeAuthInfo(token, userId));
        store.dispatch(setAuthToken(token));
        await store.dispatch(refreshAuthToken());
    };

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root')
    );
})()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
