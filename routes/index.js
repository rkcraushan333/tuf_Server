import express from 'express';
import { accessData, deleteData, insertData } from '../controller/index.js';

const routes = express.Router();
routes.get('/access', accessData.accessAll);
routes.get('/access/:username', accessData.accessOne);
routes.delete('/delete/:username', deleteData.deleteOne);
routes.post('/insert', insertData.insertOne);

export default routes;