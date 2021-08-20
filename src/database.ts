import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(conection => {
        pool.releaseConnection(conection);
        console.log('DB is connected')
    });

export default pool;    