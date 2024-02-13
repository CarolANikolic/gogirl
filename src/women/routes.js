import express from 'express';
const router = express.Router();
import controller from './controller.js';

router.get('/', controller.getAllWomen);

export { router }