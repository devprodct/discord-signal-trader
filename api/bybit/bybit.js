import { LinearClient } from 'bybit-api';
import { findRecordByHash } from '../../actions/storage.js';
import { DateTime } from 'luxon';

const client = new LinearClient({
    key: process.env.API_KEY,
    secret: process.env.PRIVATE_KEY,
    testnet: false
});

export const getPositionList    = async () => client.getPosition();
export const setOrder           = async (order) => client.placeActiveOrder(order);

export const generateOrderInfo = (trade) => {

    return {
        symbol: `${trade.symbol}USDT`,
        side: `${trade.tradingType}`,
        order_type: `Limit`,
        qty: 0.01, // need to calculate from api 
        price: `${trade.entryPrice}`,
        time_in_force: 'GoodTillCancel',
        reduce_only: false,
        close_on_trigger: false
    }
}

export const processOrders = async (items) => {

    if (!items.length) return;

    items.map(item => {

        setOrder(
            generateOrderInfo(item)
        )
    })
}