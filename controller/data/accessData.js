import { connection } from '../../db/index.js';


const accessData = {
    async accessAll(req, res, next) {
        try {
            const query = 'SELECT * FROM userData';

            const [rows] = await connection.promise().query(query);

            if (rows.length === 0) {
                return res.status(404).json({ error: 'No Data found' });
            }

            res.json(rows);
        }
        catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async accessOne(req, res, next) {
        try {
            const username = req.params.username;

            if (!username) {
                return res.status(400).json({ error: 'Username is required.' });
            }

            const query = 'SELECT * FROM userData WHERE username = ?';
            const [rows] = await connection.promise().query(query, [username]);

            if (rows.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.json(rows);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

export default accessData;