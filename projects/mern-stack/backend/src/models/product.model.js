import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const sizeSchema = new mongoose.Schema({
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const colorSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const productSchema = new mongoose.Schema({
  nameProduct: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  colors: [colorSchema],
  sizes: [sizeSchema],
  images: [
    {
      url: {
        type: String,
      },
      public_id: {
        type: String,
      },
    },
  ],
});

productSchema.plugin(mongoosePaginate);

const Product = mongoose.model('Product', productSchema);

export default Product;
