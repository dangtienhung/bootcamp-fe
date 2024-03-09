import { useAppDispatch, useAppSelector } from './app/hooks';

import { increament } from './app/features/counter/counterSlice';

function App() {
	const count = useAppSelector((state) => state.counter.count);
	console.log('🚀 ~ App ~ count:', count);
	const dispatch = useAppDispatch();
	return (
		<div>
			<h2>{count}</h2>
			<button onClick={() => dispatch(increament())}>Increment</button>
		</div>
	);
}

export default App;
