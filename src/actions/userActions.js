export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = {
    type: USER_LOGIN,
    userName: 'tess.ting',
    title: 'Ms',
    lastName: 'Ting',
    games: ['Placeholder'],
    isModalOpen: false,
    loggedIn: true
}

export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = {
    type: USER_LOGOUT,
    userName: '',
    title: '',
    lastName: '',
    games: [],
    isModalOpen: false,
    loggedIn: false
};

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = (isModalOpen) => ({
    type: TOGGLE_MODAL,
    isModalOpen
});