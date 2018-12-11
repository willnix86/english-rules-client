import { combineReducers } from 'redux';
import { userReducer as user } from './userReducer';
import { conjunctionsReducer as conjunctions } from './conjunctionsReducer';
import { wordTypesReducer as wordTypes } from './wordTypesReducer';
import { prepositionsReducer as prepositions } from './prepositionsReducer';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
    user,
    conjunctions,
    wordTypes,
    prepositions,
    form
})

export default rootReducer;