import { HTTP_STATUS } from '../common/http-status.common.js';
import { productService } from '../services/product.service.js';

export const productController = {
  optionProduct: (params) => {
    const option = {
      limit: parseInt(_limit),
      page: parseInt(_page),
      populate: [
        {
          path: 'category',
          select: '_id nameCategory image desc',
        },
        {
          path: 'brand',
          select: '_id nameBrand image desc',
        },
        ...params.populate,
      ],
    };
  },
  // add product
  addProduct: async (req, res) => {
    const body = req.body;

    // add product
    const product = await productService.addProduct(body);
    if (!product) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: 'Add product failed', success: false });
    }

    return res.status(HTTP_STATUS.OK).json({ message: 'Add product successfully', success: true, data: product });
  },
  // get all product
  getAllProduct: async (req, res) => {
    const { _limit = 10, _page = 1, q } = req.query;
    productController.optionProduct();
    const option = {
      limit: parseInt(_limit),
      page: parseInt(_page),
      populate: [
        {
          path: 'category',
          select: '_id nameCategory image desc',
        },
        {
          path: 'brand',
          select: '_id nameBrand image desc',
        },
      ],
    };

    let query = {};
    if (q) {
      query = {
        $and: [
          {
            $or: [{ nameProduct: { $regex: new RegExp(q), $options: 'i' } }],
          },
        ],
      };
    }

    const products = await productService.getAllProduct(option, query);
    if (!products) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: 'Get all products failed', success: false });
    }
    return res.status(HTTP_STATUS.OK).json({ message: 'Get all product successfully', success: true, ...products });
  },
  // get product by id
  getProductById: async (req, res) => {
    const { id } = req.params;

    const product = await productService.getProductById(id);
    if (!product) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: 'Get product failed', success: false });
    }

    return res.status(HTTP_STATUS.OK).json({ message: 'Get product successfully', success: true, data: product });
  },
  // get product with status
  getProductWithStatus: async (req, res) => {
    const { status } = req.query;
  },
};
