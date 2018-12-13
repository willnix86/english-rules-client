
export const loadAuthToken = () => {
    localStorage.getItem('authToken');
    localStorage.getItem('userId');
};

export const saveAuthToken = (userId, authToken) => {
    try {
        localStorage.setItem('authToken', authToken);
        localStorage.setItem('userId', userId);
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.clear();
    } catch (e) {}
};