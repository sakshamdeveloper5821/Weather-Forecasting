import axios from 'axios';
import config from '../../config';
export const baseUrl = `${config.api}`;

const baseService = axios.create({
    baseURL: baseUrl
});
// axios.defaults.headers.common['Access-Control-Allow-origin'] = '*'
// axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true

baseService.interceptors.response.use((config) => {
    return config;
}, (error) => {
    return window.Promise.reject(error);
});

if (sessionStorage.getItem('userData')) {
    baseService.addAuthToken();
}

export default baseService;