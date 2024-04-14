import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { createHtmlPlugin } from 'vite-plugin-html';
import nunjucks from 'vite-plugin-nunjucks';
import { variables, pages } from './src/data';

// https://vitejs.dev/config/
export default defineConfig({
	base: '',
	plugins: [
		nunjucks({
			variables,
			nunjucksConfigure: {
				autoescape: false,
			},
		}),
		createHtmlPlugin({
			minify: true,
			entry: 'src/main.js',
			pages,
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
