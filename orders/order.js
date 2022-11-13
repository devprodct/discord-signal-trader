const { LinearClient } = require('bybit-api');

const client = new LinearClient({
    key: process.env.API_KEY,
    secret: process.env.PRIVATE_KEY,
    testnet: false
});


module.exports = client;