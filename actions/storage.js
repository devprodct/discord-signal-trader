import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import lodash from 'lodash';

class LowWithLodash extends Low {
    chain = lodash.chain(this).get('data');
}

const __dirname     = dirname(fileURLToPath(import.meta.url));
const file          = join(__dirname, process.env.FILE_PATH)
const adapter       = new JSONFile(file)
const db            = new LowWithLodash(adapter)

db.data ||= { records: [] }

await db.write()

const writeDB = async () => await db.write()

export const addRecord = async (record) => {
    db.data.records.push(record)
    writeDB()
}

export const addRecords = async (items) => {
    items.map(item => addRecord(item));
}