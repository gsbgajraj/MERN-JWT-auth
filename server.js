import express from 'express';
import connectDB from './config/db.js';
import { errorHandler } from './middlewares/error.js';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import path from 'path';

dotenv.config();
const app = express();


connectDB();

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const buildPath = path.join(__dirname, './client/build');
app.use(express.static(buildPath));


const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', authRoutes);

app.use(errorHandler);

app.get('*', (req, res) => { res.sendFile(path.join(__dirname, './', 'client', 'build', 'index.html')); });


const server = app.listen(PORT, () =>
  console.log(`Server started listening on ${PORT}`)
);

process.on('unhandledRejection', (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1));
});
