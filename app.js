import "./config.js";
import { getJSONMessages } from './actions/discord.js';
import { addRecord } from "./actions/storage.js";
import { setOrder, processOrders } from "./api/bybit/bybit.js";

const app = async () => {

    // Get Messages from Channel 
    const lastMessages = await getJSONMessages();

    // Get positions from exchange
    processOrders(lastMessages)

    // Place order 

    // Send Telegram Message
}

// set interval for 1 minute
// setInterval(app, 60000)

// run single time
app();