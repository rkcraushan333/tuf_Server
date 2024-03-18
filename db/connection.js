import mysql from 'mysql2';
import { HOST, USER, PASSWORD, DBNAME } from '../config/index.js';

const connection = mysql.createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DBNAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test the connection
connection.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('MySQL connected successfully');
        connection.release(); // Release the connection
    }
});

export { connection };
