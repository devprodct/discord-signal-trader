import { stringExtractor } from './helper.js';

export const getEntryPrice = (str) => {
    let entryPrice = stringExtractor(str, 'Entry:', '\\n')

    if (entryPrice) {
        entryPrice = entryPrice.replace('$', '');
        entryPrice = entryPrice.replace(',', '.').trim();
        entryPrice = parseFloat(entryPrice);
    }

    return entryPrice;
}

export const getSymbol = (str) => {
    let symbol = stringExtractor(str, '$', '\\n')

    if (symbol) {
        symbol = symbol.split(' ');
        symbol = symbol[0];
        symbol = symbol.replace('$', '').trim();
    }

    return symbol
}

export const getTargetPrice = (str) => {
    let targetPrice = stringExtractor(str, 'Target', '\\n')

    if (targetPrice) {
        targetPrice = targetPrice.replace(/([(].*?[)])/g, '');
        targetPrice = targetPrice.trim();
        targetPrice = targetPrice.replace('$', '');
        targetPrice = parseFloat(targetPrice.split(' ')[1].replace(',', '.'))
    }

    return targetPrice;
}

export const getStopLossPrice = (str) => {
    let stoploss = stringExtractor(str, 'Stoploss', '$|\n');

    if (stoploss) {
        stoploss = stoploss.replace(":", "").replace('$', '');
        stoploss = parseFloat(stoploss.replace(',', '.'))
    }

    return stoploss;
}

export const getTradingType = (str) => {
    return (str.match(/SELL/g) || str.match(/BUY/))[0];
}
