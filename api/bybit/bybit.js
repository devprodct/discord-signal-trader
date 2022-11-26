import { LinearClient } from 'bybit-api';

const client = new LinearClient({
    key: process.env.API_KEY,
    secret: process.env.PRIVATE_KEY,
    testnet: false
});

export const getPositionList = async () => client.getPosition();

export const setOrder = async (order) => client.placeActiveOrder(order);

export const getPriceUSDT = async (symbol) => {
    const response = await client.getOrderBook({ symbol })
    return response.result.length !== 0 && +response.result[0].price
}

export const getOrders = async () => client.getActiveOrderList();