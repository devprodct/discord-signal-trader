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

export const checkIfOrderExist = async () => {
    const currentOrders = await client.getActiveOrderList();
    console.log(currentOrders)
}

export const generateOrderInfo = async (trade) => {
    if (await checkIfOrderExist(trade)) return;

    const price = await getPriceUSDT(trade.exchangeSymbol);

    // return {
    //     symbol,
    //     side: `${trade.tradingType}`,
    //     order_type: `Limit`,
    //     qty: 2 / price, 
    //     price: `${trade.entryPrice}`,
    //     time_in_force: 'GoodTillCancel',
    //     reduce_only: false,
    //     close_on_trigger: false
    // }
}

export const processOrders = async (items) => {

    if (!items.length) return;

    items.map(item => {

        setOrder(
            // Get object to place at exchange.
            generateOrderInfo(item)
        )
    })
}