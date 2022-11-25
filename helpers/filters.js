import { DateTime, Interval } from 'luxon';

export const filterLastMessages = (record) => {

    const now = DateTime.fromISO(DateTime.now());
    const recordDate = DateTime.fromISO(record.timestamp);
    const diff = Interval.fromDateTimes(recordDate, now);

    return diff.length('minutes') < 5;
}

export const filterSignals = (item) => {
    return item.content.match(/SELL/g) || item.content.match(/BUY/);
}