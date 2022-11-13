import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.BASE_DISCORD_URL,
    timeout: 1200,
    withCredentials: true,
    headers: {
        'authorization' : process.env.WEB_DISCORD_TOKEN
    }
});