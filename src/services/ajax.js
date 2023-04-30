import axios from "axios";

const api = axios.create({
    // baseURL: 'http://nextwchat.test/api/v1',
    baseURL: 'https://nextwchat.umendom.ml/api/v1'
});

//REGISTRATION
export const getStatus = () => api.get('/');

export const getSignUp = () => api.get('/signup');

export const signUp = (data) => api.post('/signup', data);