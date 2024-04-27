import mongoose from 'mongoose';

// schemas
const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	isActive: {
		type: Boolean,
		default: false,
	},
});

const Product = mongoose.model('Product', productSchema); // đang lưu vào collection products

export default Product;
