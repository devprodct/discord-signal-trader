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

export const processOrders = async (items) => {

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