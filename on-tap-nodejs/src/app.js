import * as dotenv from 'dotenv';

import express from 'express';
import connectDb from './configs/connect-db.config.js';
import cateoryRoutes from './routes/category.route.js';

dotenv.config();

const app = express();

// middleware
app.use(express.json()); // for parsing application/json

/* =================== connect db =================== */
connectDb();

/* =================== routes =================== */
app.use('/api/v1', cateoryRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

// schemas: chứa các collection của database
// routes: chứa các file route

// btvn: crud products
// name, price, description, image, category
