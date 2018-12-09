import { combineReducers } from 'redux';
import { userReducer as user } from './userReducer';
import { conjunctionsReducer as conjunctions } from './conjunctionsReducer';
import { wordTypesReducer as wordTypes } from './wordTypesReducer';
import { prepositionsReducer as prepositions } from './prepositionsReducer';

const rootReducer = combineReducers({
    user,
    conjunctions,
    wordTypes,
    prepositions
})

export default rootReducer;