import * as dotenv from 'dotenv';

import connectDB from './configs/connect-db.config.js';
import express from 'express';

dotenv.config();

const app = express();

/* middlawares */
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Hello World');
});

// connect to MongoDB
connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
