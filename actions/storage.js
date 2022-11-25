import { DB } from "../helpers/db.js"

const isExist = (symbol) => DB.chain.get('records').find({ symbol }).value()

export const addRecord = async (record) => {
    DB.data.records.push(record)
    DB.write()
}