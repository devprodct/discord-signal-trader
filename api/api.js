const axios = require('axios');

const schemePath = {
    channel: 'channels/1016413603949195394/messages?limit=100'
};

const axiosInstance = axios.create({
    baseURL: "https://discord.com/api/v9/",
    timeout: 12000,
    withCredentials: true,
    headers: {
        'authorization' : process.env.WEB_DISCORD_TOKEN
    }
});

module.exports = {
    schemePath,
    axiosInstance
};