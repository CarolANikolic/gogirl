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

const getWomanByID = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const queryByIDResult = await db.query(queries.queryByID, [id]);
        res.status(200).json(queryByIDResult.rows);
    } catch (error) {
        console.log('Error querying databse by id:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getWomenByContinent = async (req, res) => {
    try {
        const continent = req.params.continent;
        const queryByContinentResult = await db.query(queries.queryByContinent, [continent]);
        res.status(200).json(queryByContinentResult.rows);
    } catch (error) {
        console.log('Error querying databse by continent:', error);
        res.status(500).json( {error: 'Internal server error'})
    }
}

export default {
    getAllWomen,
    getWomanByID,
    getWomenByContinent
};