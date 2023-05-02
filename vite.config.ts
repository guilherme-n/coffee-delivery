import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from '@babel/plugin-syntax-jsx';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), babel()],
	server: {
		port: 3000,
	},
});
