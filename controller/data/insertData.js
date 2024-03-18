import { connection } from '../../db/index.js';

const insertData = {
    async insertOne(req, res, next) {
        try {
            const { username, language, stdin, sourcecode, output } = req.body;

            if (!username || !language || !stdin || !sourcecode || !output) {
                return res.status(400).json({ error: 'Incomplete data provided' });
            }

            const query = 'INSERT INTO userData (username, language, stdin, sourcecode, output) VALUES (?,?,?,?,?)';
            const result = await connection.promise().query(query, [username, language, stdin, sourcecode, output]);

            res.json({ message: 'Data inserted successfully', insertId: result[0].insertId });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

export default insertData;
