import "./config.js";
import { getJSONMessages } from './actions/discord.js';
import { processOrders } from "./actions/bybit.js";

const app = async () => {

    // Get Messages from Channel 
    const lastMessages = await getJSONMessages();

    // Get positions from exchange
    processOrders(lastMessages)
}

// set interval for 1 minute
//setInterval(app, 60000)

// run single time
app();