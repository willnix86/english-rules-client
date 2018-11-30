import { combineReducers } from 'redux';
import { userReducer as user } from './userReducer';
import { conjunctionsReducer as conjunctions } from './conjunctionsReducer';

const rootReducer = combineReducers({
    user,
    conjunctions
})

export default rootReducer;