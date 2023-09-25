import 'materialize-css/dist/js/materialize.min.js'

import './style.scss'
import vegito from 'vegito'

import { lang, messages } from './js/lang.js'
import { init as langInit } from './js/lang.js';
import { init as accountInit } from './js/account.js';
import { init as answersInit } from './js/answers.js';
import { init as avatarsInit } from './js/avatars.js';
import { init as bubblesInit } from './js/bubbles.js';
import { init as charactersInit } from './js/characters.js';
import { init as loveometerInit } from './js/loveometer.js';
import { init as scenesInit } from './js/scenes.js';
import { init as settingsInit } from './js/settings.js';

function init() {
	document.getElementsByTagName('html')[0].lang = lang;
	document.getElementsByTagName('title')[0].textContent = messages['title'];
	document.querySelector('meta[name=description]').content = messages['description'];

	console.info('[MCL] Starting up version ' + APP_VERSION + ' for language ' + lang);

	document.body.innerHTML = vegito(document.body.innerHTML, messages);

	ready(() => {
		// require('./functions').sortAssets();

		M.Tabs.init(document.getElementById('tabs'));

		langInit();
		accountInit();
		answersInit();
		avatarsInit();
		bubblesInit();
		charactersInit();
		loveometerInit();
		scenesInit();
		settingsInit();
	});
}

function ready(fn) {
	if (document.readyState !== 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

Array.prototype.clean = function (deleteValue) {
	for (let i = 0; i < this.length; i++) {
		if (this[i] === deleteValue) {
			this.splice(i, 1);
			i--;
		}
	}
	return this;
};

init();
