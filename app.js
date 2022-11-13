require('dotenv').config()
const { schemePath, axiosInstance } = require('./api/api');

const {
    getEntryPrice,
    getSymbol,
    getTargetPrice,
    getStopLossPrice,
    getTradingType
} = require('./helpers/utilities');

const client = require('./orders/order');

client.getPosition().then(res => res.result.filter(target => target.data.entry_price !== 0) );