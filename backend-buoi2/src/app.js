import categoryRoutes from './routes/category.routes.js';
import connectDb from './configs/connect-db.config.js';
import express from 'express';
import morgan from 'morgan';
import productRoutes from './routes/product.routes.js';

const app = express();
const port = 8000;

// Middleware
app.use(express.json()); // conver dữ liệu từ client gửi lên thành json
app.use(morgan('dev'));

// connect db
connectDb();

// routes
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
