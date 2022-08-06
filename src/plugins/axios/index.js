import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
    responseType: 'json',
    headers: {  'Content-Type': 'application/json' },
    withCredentials: false,
    timeout: 10000,
});


axiosInstance.interceptors.request.use(request => {
    return request;
}, error => {
    console.error(error);
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => {
    return response;
}, error => {
    console.error(error);
    return Promise.reject(error);
});

export {axiosInstance}