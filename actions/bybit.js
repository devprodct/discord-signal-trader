import { setOrder, getPriceUSDT} from "../api/bybit/bybit.js";
import { addRecord, isSymbolExists } from "./storage.js";

export const generateOrder = async (trade, usdt) => {

    const price = await getPriceUSDT(trade.exchangeSymbol); 

    return {
        symbol: trade.exchangeSymbol,
        side: `${trade.tradingType}`,
        order_type: `Market`,
        qty: usdt / price, 
        price: trade.entryPrice,
        time_in_force: 'GoodTillCancel',
        reduce_only: false,
        close_on_trigger: false
    }
}

export const processOrders = async (items) => {

    if (!items.length) return;

    const orders = items.map(async (item) => {

        const orderIsExist = await isSymbolExists(item.symbol);

        if (!orderIsExist) {
            
            setOrder(await generateOrder(item, 2));
            return await addRecord(item);
        } 

    })
}

