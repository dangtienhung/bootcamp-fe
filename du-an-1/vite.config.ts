import * as path from 'path';

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}],
	},
});
// alias link: https://dev.to/avxkim/setup-path-aliases-w-react-vite-ts-poa
// prettier: https://prettier.io/
