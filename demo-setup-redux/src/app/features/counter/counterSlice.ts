import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CounterState {
	count: number;
}

const initialState: CounterState = {
	count: 10,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.count += 1;
		},
	},
});

export const { increment } = counterSlice.actions;

const counterReducer = counterSlice.reducer;
export default counterReducer;
