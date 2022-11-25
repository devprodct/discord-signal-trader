import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import lodash from 'lodash';

class LowWithLodash extends Low {
    chain = lodash.chain(this).get('data');
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, process.env.FILE_PATH)
const adapter = new JSONFile(file)
const DB = new LowWithLodash(adapter)

try {
    await DB.read();
} catch (err) {
    DB.data ||= { records: [] }
    await DB.write();
}


export { DB };