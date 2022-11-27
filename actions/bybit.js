import { getPriceUSDT, getPosition, setOrder } from "../api/bybit.js";
import { filterOrders } from "../helpers/filters.js";

export const generateOrder = async (trade, usdt, leverage) => {

    const price = await getPriceUSDT(trade.exchangeSymbol);

    const qty = ((usdt / price) * leverage).toFixed(4)

    return {
        symbol: trade.exchangeSymbol,
        side: `${trade.tradingType}`,
        order_type: `Market`,
        qty, 
        price: trade.entryPrice,
        time_in_force: 'GoodTillCancel',
        reduce_only: false,
        close_on_trigger: false
    }
}

export const isCurrentOrderExist =  async (symbol) => {
    const orders = await getPosition(symbol);
    const availableOrders = orders.result.filter(filterOrders).map(item => item.data);

    return availableOrders.length > 0 ? availableOrders[0] : null;
}

export const processOrders = async (items) => {

    if (!items.length) return;

    items.map(async (item) => {

        console.log(item);

        const order = await isCurrentOrderExist(item.exchangeSymbol);

        if (!order) {
            const orderInfo = await generateOrder(item, 5, 5);
            await setOrder(orderInfo)
        }

    })
}