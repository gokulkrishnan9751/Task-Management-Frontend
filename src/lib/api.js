import axios from "axios";
import { replace } from "react-router-dom";

export const api = axios.create({
    baseURL: 'http://localhost:8000/app',
    withCredentials: true
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const statusCode = error?.response?.status;
        const message = error?.response?.data?.detail || 'An error occurred';

        if(statusCode === 401) {
            localStorage.removeItem('token');
            window.history.push('/login', replace(true));
        }

        if(statusCode === 403) {
            localStorage.removeItem('token');
            history.push('/login', replace(true));
        }


        return Promise.reject(error);
    }
)
    