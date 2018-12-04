import { combineReducers } from 'redux';
import { userReducer as user } from './userReducer';
import { conjunctionsReducer as conjunctions } from './conjunctionsReducer';
import { wordTypesReducer as wordTypes } from './wordTypesReducer';

const rootReducer = combineReducers({
    user,
    conjunctions,
    wordTypes
})

export default rootReducer;