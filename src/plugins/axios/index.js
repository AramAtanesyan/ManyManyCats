import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
    responseType: 'json',
    headers: {  'Content-Type': 'application/json' },
    withCredentials: false,
    timeout: 10000,
});


axiosInstance.interceptors.request.use(request => {
    console.log(request);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export {axiosInstance}