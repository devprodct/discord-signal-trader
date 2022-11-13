import "./config.js";
import { getJSONMessages } from './actions/discord.js';
import { addRecord } from "./actions/storage.js";

const app = async () => {

    const jsonMessages = await getJSONMessages();

    // Write records to DB
    jsonMessages.map(item => {
        addRecord(item);
    })
}

app();