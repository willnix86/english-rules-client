export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = {
    type: USER_LOGIN,
    userName: 'tess.ting',
    title: 'Ms',
    lastName: 'Ting',
    games: ['Placeholder'],
    loggedIn: true
}

export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = {
    type: USER_LOGOUT,
    userName: '',
    title: '',
    lastName: '',
    games: [],
    loggedIn: false
};