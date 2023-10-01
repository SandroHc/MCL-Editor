import {defineConfig} from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { createHtmlPlugin } from "vite-plugin-html";
import viteCompression from "vite-plugin-compression";

// Icons
import {mdiAccount, mdiAccountCircle, mdiCog, mdiForum, mdiPencil, mdiPlus, mdiWeb} from "@mdi/js";

export default defineConfig({
	plugins: [
		// inline all assets (JS, CSS) into the HTML
		viteSingleFile(),
		// minify HTML
		createHtmlPlugin({
			inject: {
				data: {
					iconAccountRegion: mdiWeb,
					iconAccountName: mdiAccountCircle,
					iconDialogueAvatar: mdiAccount,
					iconDialogueBubble: mdiForum,
					iconDialogueAnswers: mdiPencil,
					iconSettings: mdiCog,
					iconSettingsLanguage: mdiWeb,
					iconAdd: mdiPlus,
				},
			},
		}),
		// compress assets
		viteCompression({ algorithm: "gzip" }),
		viteCompression({ algorithm: "brotliCompress" }),
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
		APP_VERSION: JSON.stringify(process.env.npm_package_version || '0.0'),
		APP_BUILD_DATE: JSON.stringify(new Date()),
	}
});
