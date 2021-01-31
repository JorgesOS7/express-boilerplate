import { Query } from 'pg';
import fs from 'fs';
import path from 'path';

const submit = Query.prototype.submit;

Query.prototype.submit = function () {
    const text = this.text;
    const values = this.values || [];
    const query = text.replace(/\$([0-9]+)/g, (m, v) => JSON.stringify(values[parseInt(v) - 1]))
    fs.appendFileSync(path.join(__dirname, '..', 'logs/log-sql.txt'), `\n[${new Date()}]\n ${query}\n`)
    submit.apply(this, arguments);
  };