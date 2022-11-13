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

        const symbol        = getSymbol(item.content);
        const entryPrice    = getEntryPrice(item.content);
        const targetPrice   = getTargetPrice(item.content);
        const stopLoss      = getStopLossPrice(item.content);
        const tradingType   = getTradingType(item.content);

        const result = {
            symbol,
            entryPrice,
            targetPrice,
            stopLoss,
            tradingType,
            timestamp: item.timestamp,
            rawContent: item.content
        }

        return {
            ...result,
            hash: hash(result)
        }
    });

    return parsed;
}