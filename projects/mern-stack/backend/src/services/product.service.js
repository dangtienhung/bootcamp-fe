import Product from '../models/product.model.js';

export const productService = {
  // add product
  addProduct: async (body) => {
    return await Product.create(body);
  },
  // get all product
  getAllProduct: async (option, query) => {
    return await Product.paginate(query, option);
  },
  // get product by id
  getProductById: async (id) => {
    return await Product.findById(id).populate([
      {
        path: 'category',
        select: '_id nameCategory image desc',
      },
      {
        path: 'brand',
        select: '_id nameBrand image desc',
      },
    ]);
  },
};
