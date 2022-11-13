import { getMessagesFromDiscord } from '../api/discord/discord.js';
import hash from 'object-hash';
import {
    getEntryPrice,
    getStopLossPrice,
    getSymbol,
    getTargetPrice,
    getTradingType
} from '../helpers/utilities.js'

export const getJSONMessages = async () => {

    const rawMessages = await getMessagesFromDiscord();

    const content = rawMessages.data.reverse().filter(item => {
        return item.content.match(/SELL/g) || item.content.match(/BUY/);
    })

    const parsed = content.map(item => {

        const result = {
            symbol: getSymbol(item.content),
            entryPrice: getEntryPrice(item.content),
            targetPrice: getTargetPrice(item.content),
            stopLoss: getStopLossPrice(item.content),
            tradingType: getTradingType(item.content),
            timestamp: item.timestamp,
            rawContent: item.content
        }

        return {
            ...result,
            isPlaced: false,
            isSended: false,
            profit: null,
            hash: hash(result)
        }
    });

    return parsed;
}