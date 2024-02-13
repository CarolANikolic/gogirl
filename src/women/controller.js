import db from '../../db.js';
import queries from './queries.js'

const getAllWomen = async (req, res) => {
    try {
        const queryAllWomenResult = await db.query(queries.queryAllWomen);
        res.status(200).json(queryAllWomenResult.rows);
    } catch (error) {
        console.error('Error querying database for all women:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default {
    getAllWomen,
};
