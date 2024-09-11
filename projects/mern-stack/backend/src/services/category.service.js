import Category from '../models/category.model.js';

export const createCategoryService = async (body) => {
  const newBrand = await Category.create(body);

  return newBrand;
};

// get all categories
export const getAllCategories = async (search) => {
  const searchString = typeof search === 'string' ? search : '';
  const query = {
    nameCategory: { $regex: searchString, $options: 'i' },
  };
  // lấy dữ liệu từ mới đến cũ
  const categories = await Category.find(query).sort({ createdAt: -1 });
  console.log('🚀 ~ getAllCategories ~ categories:', categories);

  return categories;
};

// get category by id
export const getCategoryByIdService = async (id) => {
  const category = await Category.findById({ _id: id });

  return category;
};

// update category
export const updateCategoryService = async (id, body) => {
  const category = await Category.findByIdAndUpdate({ _id: id }, body, { new: true });
  return category;
};

// delete category
export const deleteCategoryService = async (id) => {
  const category = await Category.findByIdAndDelete({ _id: id });
  return category;
};

// delete multiple categories
export const deleteMultipleCategoriesService = async (ids) => {
  const categories = await Category.deleteMany({ _id: { $in: ids } });
  return categories;
};
