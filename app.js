const { schemePath, axiosInstance } = require('./api');

const {
    getEntryPrice,
    getSymbol,
    getTargetPrice,
    getStopLossPrice,
    getTradingType
} = require('./helpers/utilities');

const client = require('./order');

client.getPosition().then(res => console.log(res.result));

// axiosInstance.get(schemePath.channel).then(resp => {

//     const content = resp.data.reverse().filter(item => {
//         return item.content.match(/SELL/g) || item.content.match(/BUY/);
//     })

//     const parsed = content.map(item => {

//         const symbol = getSymbol(item.content);
//         const entryPrice = getEntryPrice(item.content);
//         const targetPrice = getTargetPrice(item.content);
//         const stopLoss = getStopLossPrice(item.content);
//         const tradingType = getTradingType(item.content);

//         return {
//             symbol,
//             entryPrice,
//             targetPrice,
//             stopLoss,
//             tradingType,
//             rawContent: item.content
//         }
//     });

//     //parsed.map(item => console.log(item));
// })  