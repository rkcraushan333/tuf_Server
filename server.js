import express from 'express';
import cors from 'cors';
import routes from './routes/index.js'
import { APP_PORT } from './config/index.js';

const app = express();
app.use(cors());

app.use(express.json())
app.use('/api', routes)

app.listen(APP_PORT, () => console.log(`Listening on port no. ${APP_PORT}`));