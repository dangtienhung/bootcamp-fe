import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		image: {
			type: String,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const Category = mongoose.model('Category', categorySchema);

export default Category;
