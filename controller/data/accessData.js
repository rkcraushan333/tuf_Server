import { connection } from '../../db/index.js';
import { Redis } from "ioredis"

const client = new Redis();
const accessData = {
    // const cacheValue = await 
    async accessAll(req, res, next) {
        const cacheValue = await client.get('codeData');
        if (cacheValue) return res.json(JSON.parse(cacheValue));
        // otherwise access and keep in redis for cache and also keep an expiry time
        try {
            const query = 'SELECT * FROM userData';

            const [rows] = await connection.promise().query(query);

            if (rows.length === 0) {
                return res.status(404).json({ error: 'No Data found' });
            }
            await client.set('codeData', JSON.stringify(rows));
            await client.expire('codeData', 30)
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