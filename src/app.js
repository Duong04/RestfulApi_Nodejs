import express from 'express';
import "dotenv/config";
import cors from 'cors';
import route from './routes';
import connect from './configs/db';
import "./utils/redis.js";

connect();

const app = express();

app.use(cors());
app.use(express.json());

// Routes init
route(app);

export default app;