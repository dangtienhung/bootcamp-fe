import mongoose from 'mongoose';

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
		// role: {
		// 	type: String,
		// 	required: true,
		// 	enum: ['admin', 'staff', 'customer'],
		// 	default: 'customer',
		// },
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const Product = mongoose.model('Product', productSchema);

export default Product;
// collection
