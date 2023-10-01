import 'materialize-css/dist/js/materialize.min.js'

import './style.scss'
import vegito from 'vegito'

import { loadLang, selectedLanguage, messages } from './js/lang';
import { loadAccount } from './js/account';
import { loadAnswers } from './js/answers';
import { loadAvatars } from './js/avatars';
import { loadBubbles } from './js/bubbles';
import { loadCharacters } from './js/characters';
import { loadLoveometer } from './js/loveometer';
import { loadScenes } from './js/scenes';
import { init as settingsInit } from './js/settings';

function init() {
	console.info(`[MCL] Starting up MCL editor ${APP_VERSION} (${APP_BUILD_DATE}) with language ${selectedLanguage}`);

	document.head.getElementsByTagName('title')[0].textContent = messages['title'];
	document.querySelector('meta[name=description]')!.setAttribute('content', messages['description']);
	document.body.parentElement!.setAttribute('lang', selectedLanguage);
	document.body.innerHTML = vegito(document.body.innerHTML, messages);

	ready(() => {
		// require('./functions').sortAssets();

		M.Tabs.init(document.getElementById('tabs'));

		loadLang();
		loadAccount();
		loadAnswers();
		loadAvatars();
		loadBubbles();
		loadCharacters();
		loadLoveometer();
		loadScenes();
		settingsInit();
	});

	onResize();
	window.addEventListener('resize', _e => onResize(), true);

	function onResize() {
		const CANVAS_WIDTH = 978;
		const CANVAS_HEIGHT = 698;
		const w = window.innerWidth;
		const canvas = document.getElementById('scene')!;
		if (w < CANVAS_WIDTH) {
			const scale = w / CANVAS_WIDTH;
			const pushX = (CANVAS_WIDTH - w) / 2 * (1 / scale);
			const pushY = pushX * (CANVAS_HEIGHT / CANVAS_WIDTH);

			canvas.style.transform = `scale(${scale}) translate(-${pushX}px, -${pushY}px)`;
		} else {
			canvas.style.transform = ''; // clear
		}
	}
}

function ready(fn: { (): void }) {
	if (document.readyState !== 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

init();
