const { stringExtractor } = require('./helper');


const getEntryPrice = (str) => {
    let entryPrice = stringExtractor(str, 'Entry:', '\\n')

    if (entryPrice) {
        entryPrice = entryPrice.trim();
        entryPrice
    }

    return entryPrice;
}

const getSymbol = (str) => {
    let symbol = stringExtractor(str, '$', '\\n')

    if (symbol) {
        symbol = symbol.split(' ');
        symbol = symbol[0];
        symbol = symbol.replace('$', '').trim();
    }

    return symbol
}

const getTargetPrice = (str) => {
    let targetPrice = stringExtractor(str, 'Target', '\\n')

    if (targetPrice) {
        targetPrice = targetPrice.replace(/([(].*?[)])/g, '');
        targetPrice = targetPrice.trim();
        targetPrice = targetPrice.replace('$', '');
        targetPrice = parseFloat(targetPrice.split(' ')[1].replace(',', '.'))
    }

    return targetPrice;
}

const getStopLossPrice = (str) => {
    let stoploss = stringExtractor(str, 'Stoploss:', '\\n');

    if (stoploss) {
        stoploss = stoploss.replace(":", "").replace('$', '');
        stoploss = parseFloat(stoploss.replace(',', '.'))
    }

    return stoploss;
}

const getTradingType = (str) => {
    return (str.match(/SELL/g) || str.match(/BUY/))[0];
}

module.exports = {
    getEntryPrice,
    getTargetPrice,
    getStopLossPrice,
    getTradingType,
    getSymbol
}