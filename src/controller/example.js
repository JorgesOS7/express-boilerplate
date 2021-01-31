import db from '@db/database';

class Example {

    async index(req,res) {
        const { rows } = await db.executeSql(`SELECT NOW()`);
        return res.send({ message: 'Example Router', rows });
    }


}

export default new Example();