#!/usr/bin/env node

import * as fs from 'node:fs';
import * as zlib from 'node:zlib';

const urls = [
	{
		link: "https://mcl.sandro.dev",
		since: "2023-09-27",
	},
	{
		link: "https://mcl.sandro.dev/es",
		since: "2023-10-01",
	},
	{
		link: "https://mcl.sandro.dev/pt",
		since: "2023-09-27",
	},
]
let sitemap = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">";
for (const url of urls) {
	sitemap += `<url><loc>${url.link}</loc><lastmod>${url.since}</lastmod></url>`;
}
sitemap += "</urlset>";

console.log('Generating sitemap.xml...')
fs.writeFileSync('dist/sitemap.xml', sitemap);
console.log('Generating sitemap.xml.gz...')
fs.writeFileSync('dist/sitemap.xml.gz', zlib.gzipSync(sitemap));
console.log('Generating sitemap.xml.br...')
fs.writeFileSync('dist/sitemap.xml.br', zlib.brotliCompressSync(sitemap));
console.log('Done')
