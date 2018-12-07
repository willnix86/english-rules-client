import * as actions from '../actions/userActions';

const initialState = {
    userName: 'tess.ting',
    title: 'Ms',
    lastName: 'Ting',
    games: ['Conjunctions', 'Word Types', 'Prepositions'],
    isModalOpen: false,
    loggedIn: true
};

export const userReducer = (state=initialState, action) => {
    if (action.type === actions.USER_LOGIN) {
        return Object.assign({}, state, {
            userName: action.userName,
            title: action.title,
            lastName: action.lastName,
            games: action.games,
            isModalOpen: false,
            loggedIn: true
        });
    }
    else if (action.type === actions.USER_LOGOUT) {
        return Object.assign({}, state, {
            userName: '',
            title: '',
            lastName: '',
            games: [],
            isModalOpen: false,
            loggedIn: false
        });
    }
    else if (action.type === actions.TOGGLE_MODAL) {
        return Object.assign({}, state, {
            isModalOpen: action.isModalOpen
        });
    }
    return state;
};