const axios = require('axios');
const { env } = require('process');

const schemePath = {
    channel: 'channels/1016413603949195394/messages?limit=100'
};

const axiosInstance = axios.create({
    baseURL: "https://discord.com/api/v9/",
    timeout: 12000,
    withCredentials: true,
    headers: {
        'authorization' : env.WEB_DISCORD_TOKEN
    }
});

module.exports = {
    schemePath,
    axiosInstance
};