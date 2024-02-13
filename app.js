import express from 'express';
import { router as womenRoutes } from './src/women/routes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Waiting for data.')
});

app.use('/api/v1/women', womenRoutes);

app.listen(port, () => {
    console.log(`Server running on ${port}.`)
});