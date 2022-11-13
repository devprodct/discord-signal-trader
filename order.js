const { InverseClient } = require('bybit-api');
const { env } = require('process');

const client = new InverseClient({
    key: env.API_KEY,
    secret: env.PRIVATE_KEY,
    testnet: false
});


module.exports = client;