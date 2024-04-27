import * as dotenv from 'dotenv';

import mongoose from 'mongoose';

dotenv.config();

// connect db
const connectDb = async () => {
	mongoose
		.connect(process.env.MONGO_DB)
		.then(() => {
			console.log('connected to db');
		})
		.catch((error) => {
			console.log('error', error);
		});
};

export default connectDb;
