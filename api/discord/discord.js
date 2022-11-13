const axiosInstance = require('../instance');
const urlScheme = requrie('../scheme');

const getMessagesFromDiscord = () => axiosInstance.get(urlScheme.channel);

module.exports = {
    getMessagesFromDiscord
}