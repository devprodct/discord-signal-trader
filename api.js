const axios = require('axios');

const schemePath = {
    channel: 'channels/1016413603949195394/messages?limit=100'
};

const axiosInstance = axios.create({
    baseURL: "https://discord.com/api/v9/",
    timeout: 12000,
    withCredentials: true,
    headers: {
        'authorization' : 'OTQ1NzM3NTU2MDgxOTA1NzA0.GtVsIN.RHj5_uZKpIDsB3WkG_WtfNzJWcUTZGydCRjaYw'
    }
});

module.exports = {
    schemePath,
    axiosInstance
};