export const GET_NEWS    = 'GET_NEWS';
export const ADD_NEWS    = 'ADD_NEWS';
export const REMOVE_NEWS = 'REMOVE_NEWS';
export const CHECK_NEWS  = 'CHECK_NEWS';
export const SHOW_FORM   = 'SHOW_FORM';
export const LOGIN       = 'LOGIN';
export const LOGOUT      = 'LOGOUT';        


export const login = (user: { username: string, password: string }) => ({
    type: 'LOGIN',
    user
});

export const logout = ( ) => ({
    type: 'LOGOUT',
});

export const getNews = () => ({
    type: 'GET_NEWS',
});

export const addNews = (news: Object) => ({
    type: 'ADD_NEWS',
    news
});

export const removeNews = (id: Number) => ({
    type: 'REMOVE_NEWS',
    id
});

export const checkNews = (id: Number) => ({
    type: 'CHECK_NEWS',
    id
});

export const showForm = () => ({
    type: 'SHOW_FORM',
});