import { connection } from '../../db/index.js';


const insertData = {
    async insertOne(req, res, next) {
        const xdata = req.body;
        const data = [xdata.username, xdata.language, xdata.stdin, xdata.code];
        const query = 'INSERT INTO userData (username,language,stdin,code) VALUES(?)';

        await connection.query(query, [data], (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.json(result);
        })
    }
}
export default insertData;