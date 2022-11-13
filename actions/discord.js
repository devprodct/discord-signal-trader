import { getMessagesFromDiscord } from '../api/discord/discord.js';

// import {
//     getEntryPrice,
//     getStopLossPrice,
//     getSymbol,
//     getTargetPrice,
//     getTradingType
// } from '../helpers/utilities'

export const getJSONMessages = async () => {

    const rawMessages = await getMessagesFromDiscord();

    const content = rawMessages.data.reverse().filter(item => {
        return item.content.match(/SELL/g) || item.content.match(/BUY/);
    })

    const parsed = content.map(item => {

        const symbol = getSymbol(item.content);
        const entryPrice = getEntryPrice(item.content);
        const targetPrice = getTargetPrice(item.content);
        const stopLoss = getStopLossPrice(item.content);
        const tradingType = getTradingType(item.content);

        return {
            symbol,
            entryPrice,
            targetPrice,
            stopLoss,
            tradingType,
            rawContent: item.content
        }
    });

    return parsed;
}