import { connection } from '../../db/index.js';

const deleteData = {
    async deleteOne(req, res, next) {
        try {
            const username = req.params.username;

            if (!username) {
                return res.status(400).json({ error: 'Username is required.' });
            }

            const query = 'DELETE FROM userData WHERE username = ?';
            const [result] = await connection.promise().query(query, [username]);

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.json({ message: 'User deleted successfully' });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

export default deleteData;
