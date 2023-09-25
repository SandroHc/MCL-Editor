import {defineConfig} from "vite";
// import { viteSingleFile } from "vite-plugin-singlefile";
// import { createHtmlPlugin } from "vite-plugin-html";
// import viteCompression from "vite-plugin-compression";

export default defineConfig({
	plugins: [
		// // inline all assets (JS, CSS) into the HTML
		// viteSingleFile(),
		// // minify HTML
		// createHtmlPlugin(),
		// // compress assets
		// viteCompression({ algorithm: "gzip" }),
		// viteCompression({ algorithm: "brotliCompress" }),
	],
	build: {
		modulePreload: false,
	},
	css: {
		preprocessorOptions: {
			scss: {
				quietDeps: true
			}
		}
	},
	define: {
		APP_VERSION: JSON.stringify(process.env.npm_package_version),
	}
});
