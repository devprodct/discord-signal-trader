import { getMessagesFromDiscord } from '../api/discord.js';
import {
    getEntryPrice,
    getStopLossPrice,
    getSymbol,
    getTargetPrice,
    getTradingType
} from '../helpers/strings.js'

import { filterLastMessages, filterSignals } from '../helpers/filters.js';

export const getJSONMessages = async () => {

    const rawMessages = await getMessagesFromDiscord();

    const content = rawMessages.data.filter(filterSignals)

    const records = content
                        .filter(filterLastMessages)
                        .map(item => {

        return {
            symbol: getSymbol(item.content),
            exchangeSymbol: `${getSymbol(item.content)}USDT`,
            entryPrice: getEntryPrice(item.content),
            targetPrice: getTargetPrice(item.content),
            stopLoss: getStopLossPrice(item.content),
            tradingType: getTradingType(item.content),
            timestamp: item.timestamp,
            rawContent: item.content,
            isPlaced: false
        }
    });

    return records;
}