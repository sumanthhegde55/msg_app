import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import Connection from './database/db.js';
import dotenv from 'dotenv'

import Routes from './routes/Route.js';

dotenv.config();

const app = express();

const PORT = 8000
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

Connection(username,password);

app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);