import mysql from 'mysql2'
import { HOST, USER, PASSWORD, DBNAME } from '../config/index.js'

const connection = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DBNAME
}).promise()
connection.connect((err) => {
    if (err) {
        console.log('Error in DB connection' + JSON.stringify(err));
    }
    else {
        console.log('DB connection established');
    }
})
export { connection };