import axios from "axios";
import cookie from "./lib/cookie";

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

api.interceptors.request.use((config) => {
    const token = cookie.get();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})