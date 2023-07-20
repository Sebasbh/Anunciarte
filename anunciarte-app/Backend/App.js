import express from 'express';
import cors from 'cors';
import db from  './Database/db.js'
import ProductRouter from './Routes/routes.js';

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
};

console.log('Debug: El archivo app.js se está ejecutando.');

app.use(cors(corsOptions));
app.use(express.json());

app.use('/product', ProductRouter);

app.listen(8000, () => {
  console.log('Server UP running at http://localhost:8000');
});
