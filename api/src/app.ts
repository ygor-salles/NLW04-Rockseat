import 'reflect-metadata';
import express from 'express';
import './database';
import createConnection from './database'
import { router } from './routes';

createConnection()
const app = express();

app.use(express.json());
app.use(router);

export { app }