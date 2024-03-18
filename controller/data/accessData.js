import { connection } from '../../db/index.js';


const accessData = {
    async accessAll(req, res, next) {

        const query = 'SELECT * FROM userData';

        connection.query(query, (err, rows) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (rows.length === 0) {
                return res.status(404).json({ error: 'No Data found' });
            }

            res.json(rows);
        })
    },
    async accessOne(req, res, next) {
        const username = req.params.username;

        if (!username) {
            return res.status(400).json({ error: 'Username is required.' })
        }

        const query = 'SELECT * FROM userData WHERE username = ?';

        connection.query(query, [username], (err, rows) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (rows.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.json(rows);
        })
    }
}
export default accessData;