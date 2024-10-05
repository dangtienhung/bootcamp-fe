import './App.css';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

function App() {
	return (
		<div className="flex items-center justify-center h-screen gap-10">
			<Button>Xin chào cậu</Button>
			<motion.button
				initial={{
					opacity: 0,
					y: -100,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				whileHover={{
					scale: 1.05,
				}}
				transition={{
					duration: 0.5,
				}}
				className="px-4 py-2 bg-red-500 rounded"
			>
				Xin chào cậu
			</motion.button>
		</div>
	);
}

export default App;
