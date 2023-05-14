import express from 'express';
import router from './routes/routes';
import cors from "cors";

export const app = express();
app.use(express.json());
app.use(cors())
app.use(router);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });