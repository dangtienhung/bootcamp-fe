import mongoose from 'mongoose';

// Schemas
const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
			default: 0,
		},
		description: {
			type: String,
			required: false,
			default: '',
		},
		image: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
			default: 0,
		},
		categoryId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Category',
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);
const Product = mongoose.model('Product', productSchema); // Đang lưu vào collection Product

export default Product;
