import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { IProduct } from './../../../types/product.type';
import axios from 'axios';

// interface ProductState {
// 	products: IProduct[];
// }

type ProductState = {
	products: IProduct[];
	productInfo: IProduct | null;
	isLoading: boolean;
	isError: boolean;
};
/*
null và undefined
1. null là kiểu dữ liệu trong JavaScript, nó chỉ định rõ rằng biến đó không có giá trị.
ex: const a = null;
2. undefined là một kiểu dữ liệu trong JavaScript, nó chỉ định rõ rằng biến đó chưa được gán giá trị.
ex: let a;
*/
const initialState: ProductState = {
	products: [],
	productInfo: null,
	isLoading: false,
	isError: false,
};

// create async thunk
// lấy ra tất cả sản phẩm
const url = 'http://localhost:3000';
export const getAllProducts = createAsyncThunk(
	'product/getAllProducts',
	async () => {
		const response = await axios.get(`${url}/products`);
		return response.data;
	}
);

// delete product
export const deleteProductExtraReducer = createAsyncThunk(
	'product/deleteProductExtraReducer',
	async (id: number) => {
		await axios.delete(`${url}/products/${id}`);
		return id;
	}
);

// tạo sản phẩm
export const createProduct = createAsyncThunk(
	'product/createProduct',
	async (product: Omit<IProduct, 'id'>) => {
		const response = await axios.post(`${url}/products`, product);
		return response.data;
	}
);

// update product
export const editProductExtraReducer = createAsyncThunk(
	'product/editProductExtraReducer',
	async (product: IProduct) => {
		const response = await axios.put(`${url}/products/${product.id}`, product);
		console.log('🚀 ~ response.data:', response.data);
		return response.data;
	}
);

export const getOneProductExtraReducer = createAsyncThunk(
	'product/getOneProductExtraReducer',
	async (id: number) => {
		const response = await axios.get(`${url}/products/${id}`);
		return response.data;
	}
);

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<IProduct>) => {
			state.products.push(action.payload);
		},
		deleteProduct: (state, action: PayloadAction<number>) => {
			const newProduct = state.products.filter(
				(product) => product.id !== action.payload
			);
			state.products = newProduct;
		},
		editProduct: (state, action: PayloadAction<IProduct>) => {
			console.log('🚀 ~ action.payload:', action.payload);
			const product = action.payload;
			// update product with find and map
			const newProduct = state.products.find(
				(productItem) => productItem.id === action.payload.id
			);
			if (newProduct) {
				newProduct.name = action.payload.name;
				newProduct.price = action.payload.price;
			}
		},
		// lấy ra 1 sản phẩm
		getProductById: (state, action: PayloadAction<IProduct>) => {
			const newProduct = state.products.find(
				(product) => product.id === action.payload.id
			);
			state.productInfo = newProduct ? newProduct : null;
			console.log('🚀 ~ state.productInfo:', state.productInfo);
		},
	},
	extraReducers: (builder) => {
		// get all products
		builder.addCase(getAllProducts.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getAllProducts.fulfilled, (state, action) => {
			state.products = action.payload;
			state.isLoading = false;
		});
		builder.addCase(getAllProducts.rejected, (state) => {
			state.isError = true;
			state.isLoading = false;
		});

		// create product
		builder.addCase(createProduct.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(createProduct.fulfilled, (state, action) => {
			state.products.push(action.payload);
			state.isLoading = false;
		});
		builder.addCase(createProduct.rejected, (state) => {
			state.isError = true;
			state.isLoading = false;
		});

		// delete product
		builder.addCase(deleteProductExtraReducer.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(deleteProductExtraReducer.fulfilled, (state, action) => {
			const id = action.payload;
			const newProduct = state.products.filter((product) => product.id !== id);
			state.products = newProduct;
			state.isLoading = false;
		});
		builder.addCase(deleteProductExtraReducer.rejected, (state) => {
			state.isError = true;
			state.isLoading = false;
		});

		// edit product
		builder.addCase(editProductExtraReducer.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(editProductExtraReducer.fulfilled, (state, action) => {
			const productInfo = action.payload;
			const newProduct = state.products.map((product) => {
				if (product.id === productInfo.id) {
					return productInfo;
				}
				return product;
			});
			state.products = newProduct;
			state.isLoading = false;
		});
		builder.addCase(editProductExtraReducer.rejected, (state) => {
			state.isError = true;
			state.isLoading = false;
		});

		// get one product
		builder.addCase(getOneProductExtraReducer.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getOneProductExtraReducer.fulfilled, (state, action) => {
			const productInfo = action.payload;
			state.productInfo = productInfo;
			state.isLoading = false;
		});
		builder.addCase(getOneProductExtraReducer.rejected, (state) => {
			state.isError = true;
			state.isLoading = false;
		});
	},
});

export const { addProduct, deleteProduct, editProduct, getProductById } =
	productSlice.actions;

const productReducers = productSlice.reducer;
export default productReducers;
