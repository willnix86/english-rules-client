
export const loadAuthToken = () => {
    console.log('loaded auth token');
    sessionStorage.getItem('authToken');
    sessionStorage.getItem('userId');
};

export const saveAuthToken = (userId, authToken) => {
    console.log('save auth token');
    try {
        sessionStorage.setItem('authToken', authToken);
        sessionStorage.setItem('userId', userId);
    } catch (e) {}
};

export const clearAuthToken = () => {
    console.log('clear auth token');
    try {
        sessionStorage.clear();
    } catch (e) {}
};