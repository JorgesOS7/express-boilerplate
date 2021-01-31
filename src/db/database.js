import { Pool } from 'pg';
import { config } from 'dotenv';
import path from 'path';
import '@db/database.log';
class db {

    constructor () {
        this.pool = new Pool();
        config({path: path.join(__dirname, '..', 'vars/.pg.env')});
    }

    async executeSql(text,params) {
        return await this.pool.query(text,params);
    }

    async rollback() {
        return await this.pool.query('ROLLBACK');
    }

    async commit() {
        return await this.pool.query('COMMIT');
    }

}

export default new db();