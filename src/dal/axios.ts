import axios from "axios";

export const Axios = axios.create({
    baseURL: '/api',
    responseType: 'json'
})


Axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})