import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import {loadAuthToken} from './localStorage';
import {setAuthToken, refreshAuthToken, storeAuthInfo} from './actions/auth';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)),
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken.authToken;
    const userId = authToken.userId;

    store.dispatch(storeAuthInfo(token, userId));
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
};

export default store;