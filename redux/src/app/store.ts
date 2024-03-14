import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import { productApi } from './services/products.service';
import productReducers from './features/products/productSlice';

const middleware = [productApi.middleware];

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		product: productReducers,

		// rtk query
		[productApi.reducerPath]: productApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middleware),
});

// middleware: có tác dụng thực hiện các tác vụ trước khi action được gửi đến reducer
// client ----> middleware --------> db

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
