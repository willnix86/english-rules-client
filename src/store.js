import {createStore} from 'redux';
import {userReducer} from './reducers';

export default createStore(userReducer);