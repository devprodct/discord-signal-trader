const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 12000,
    withCredentials: true,
    headers: {
        'authorization' : process.env.WEB_DISCORD_TOKEN
    }
});

module.exports = {
    axiosInstance
};