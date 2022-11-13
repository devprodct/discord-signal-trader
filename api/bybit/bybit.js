import { LinearClient } from 'bybit-api';

const client = new LinearClient({
    key: process.env.API_KEY,
    secret: process.env.PRIVATE_KEY,
    testnet: false
});


export const getPositionList = async () => client.getPosition();
export const setOrder = async (order) => client.placeActiveOrder(order);