import './App.css';

import { useAppDispatch, useAppSelector } from './app/hooks';

import { RootState } from './app/store';
import { increment } from './app/features/counter/counterSlice';

function App() {
	const dispatch = useAppDispatch();
	const count = useAppSelector((state: RootState) => state.counter.count);
	console.log('🚀 ~ App ~ count:', count);
	return (
		<>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => dispatch(increment())}>count is {count}</button>
			</div>
		</>
	);
}

export default App;
