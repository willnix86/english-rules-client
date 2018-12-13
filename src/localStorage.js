
export const loadAuthToken = () => {
    sessionStorage.getItem('authToken');
    sessionStorage.getItem('userId');
};

export const saveAuthToken = (userId, authToken) => {
    try {
        sessionStorage.setItem('authToken', authToken);
        sessionStorage.setItem('userId', userId);
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        sessionStorage.clear();
    } catch (e) {}
};