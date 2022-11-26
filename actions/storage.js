import { DB } from "../helpers/db.js"

export const isSymbolExists = (symbol) => DB.chain.get('records').find({ symbol }).value()

export const addRecord = async (record) => {

    record.isPlaced = true;
    
    DB.data.records.push(record)
    DB.write()

    return record;
}