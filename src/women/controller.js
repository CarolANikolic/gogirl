import db from '../../db.js';
import queries from './queries.js';

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

        if (!queryByIDResult.rows.length) {
            return res.send('No woman found with the given id.');
        } 

        res.status(200).json(queryByIDResult.rows); 
    } catch (error) {
        console.log('Error querying database by id:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getWomenByContinent = async (req, res) => {
    try {
        const continent = req.params.continent.toLowerCase();
        const queryByContinentResult = await db.query(queries.queryByContinent, [continent]);

        if (!queryByContinentResult.rows.length) {
            return res.send('No result found for the provided continent.');
        }

        res.status(200).json(queryByContinentResult.rows);
    } catch (error) {
        console.log('Error querying database by continent:', error);
        res.status(500).json({ error: 'Internal server error' })
    }
}

const getWomenByName = async (req, res) => {
    try {
        const name = req.params.name.toLowerCase();
        const queryByNameResult = await db.query(queries.queryByName, [name]);
        if (!queryByNameResult.rows.length) {
            return res.send('No woman found with this name.')
        }
        
        res.status(200).json(queryByNameResult.rows);
    } catch (error) {
        console.log('Error querying database by name:', error);
        res.status(500).json({ error: 'Internal server error' })
    }
}

export default {
    getAllWomen,
    getWomanByID,
    getWomenByContinent,
    getWomenByName
};