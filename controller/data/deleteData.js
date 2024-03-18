import { connection } from '../../db/index.js';


const deleteData = {
    async deleteOne(req, res, next) {
        const username = req.params.username;

        if (!username) {
            return res.status(400).json({ error: 'Username is required.' })
        }

        const query = 'DELETE FROM userData WHERE username = ?';

        connection.query(query, [username], (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json({ message: 'User deleted successfully' });
        })
    }
}
export default deleteData;