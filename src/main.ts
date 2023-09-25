import 'materialize-css/dist/js/materialize.min.js'

import './style.scss'
import vegito from 'vegito'

import { selectedLanguage, messages } from './js/lang'
import { loadLang } from './js/lang';
import { loadAccount } from './js/account';
import { loadAnswers } from './js/answers';
import { loadAvatars } from './js/avatars';
import { loadBubbles } from './js/bubbles';
import { loadCharacters } from './js/characters';
import { loadLoveometer } from './js/loveometer';
import { loadScenes } from './js/scenes';
import { init as settingsInit } from './js/settings';

function init() {
	console.info(`[MCL] Starting up MCL editor ${APP_VERSION} with language ${selectedLanguage}`);

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
}

function ready(fn: { (): void }) {
	if (document.readyState !== 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

init();
