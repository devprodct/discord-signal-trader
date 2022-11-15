import { getMessagesFromDiscord } from '../api/discord/discord.js';
import {
    getEntryPrice,
    getStopLossPrice,
    getSymbol,
    getTargetPrice,
    getTradingType
} from '../helpers/utilities.js'

import { DateTime, Interval } from 'luxon';
import { testJson } from '../storage/test.js';

export const filterLastMessages = (record) => {

    const now = DateTime.fromISO(DateTime.now());
    const recordDate = DateTime.fromISO(record.timestamp);
    const diff = Interval.fromDateTimes(recordDate, now);

    return diff.length('minutes') < 5;
}

export const getJSONMessages = async () => {

    const rawMessages = await getMessagesFromDiscord();

    const content = rawMessages.data.reverse().filter(item => {
        return item.content.match(/SELL/g) || item.content.match(/BUY/);
    })

    const records = content.map(item => {

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
            ...result
        }
    });

    return testJson.filter(filterLastMessages);
}