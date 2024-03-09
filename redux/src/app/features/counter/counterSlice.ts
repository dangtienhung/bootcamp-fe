import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../store';

interface CounterState {
	count: number;
}

const initialState: CounterState = {
	count: 10,
};
// const initialState = {
// 	count: 0,
// } as CounterState;

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increament: (state) => {
			console.log('🚀 ~ state:', state);
			state.count += 1;
		},
	},
});

export const { increament } = counterSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

const counterReducer = counterSlice.reducer;
export default counterReducer;
