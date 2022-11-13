import "./config.js";
import { getJSONMessages } from './actions/discord.js';
import { addRecord } from "./actions/storage.js";

// const client = require('./orders/order');
// client.getPosition().then(res => res.result.filter(target => target.data.entry_price !== 0) );
const app = async () => {

    const jsonMessages = await getJSONMessages();

    // Write records to DB
    jsonMessages.map(item => {
        addRecord(item);
    })
}

app();