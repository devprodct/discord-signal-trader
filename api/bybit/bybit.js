import { LinearClient } from 'bybit-api';
import { findRecord } from '../../actions/storage.js';

const client = new LinearClient({
    key: process.env.API_KEY,
    secret: process.env.PRIVATE_KEY,
    testnet: false
});

export const getPositionList    = async () => client.getPosition();
export const setOrder           = async (order) => client.placeActiveOrder(order);
export const checkTrade         = (newTrade) => {

    const record = findRecord(newTrade.hash)

    if (record.isPlaced) {
        return false;
    }

    return record;
}

export const processOrders = async (items) => {

    items.map(item => {
        checkTrade(item);
    })

    // setOrder({
    //     symbol: "BTCUSDT",
    //     side: "Sell",
    //     order_type: "Limit",
    //     qty: 0.001,
    //     price: 16332,
    //     time_in_force: "GoodTillCancel",
    //     reduce_only: false,
    //     close_on_trigger: false
    // })
}