import * as actions from '../actions/userActions';

const initialState = {
    userName: 'tess.ting',
    title: 'Ms',
    lastName: 'Ting',
    games: ['Conjunctions'],
    loggedIn: true
};

export const userReducer = (state=initialState, action) => {
    if (action.type === actions.USER_LOGIN) {
        return Object.assign({}, state, {
            userName: action.userName,
            title: action.title,
            lastName: action.lastName,
            games: action.games,
            loggedIn: true
        });
    }
    else if (action.type === actions.USER_LOGOUT) {
        return Object.assign({}, state, {
            userName: '',
            title: '',
            lastName: '',
            games: [],
            loggedIn: false
        });
    }
    return state;
};