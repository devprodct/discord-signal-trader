import "./config.js";
import { getJSONMessages } from './actions/discord.js';
import { addRecord } from "./actions/storage.js";
import { setOrder, setupOrders } from "./api/bybit/bybit.js";

const app = async () => {

    // Get Messages from Channel 
    const jsonMessages = await getJSONMessages();

    // Write and check if record exist 
    jsonMessages.map(item => {
        addRecord(item);
    })

    // Get positions from exchange
    processOrders(jsonMessages)

    // Place order 

    // Send Telegram Message
}

// set interval for 1 minute
// setInterval(app, 60000)

// run single time
app();