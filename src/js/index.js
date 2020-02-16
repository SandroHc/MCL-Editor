import 'materialize-css/dist/js/materialize.min.js'

import '../styles/style.scss'
import vegito from 'vegito'

import { lang, messages } from './lang'

function init() {
	document.getElementsByTagName('html')[0].lang = lang;
	document.getElementsByTagName('title')[0].textContent = messages['title'];
	document.querySelector('meta[name=description]').content = messages['description'];

	console.info('[MCL] Starting up version ' + VERSION + ' for language ' + lang);

	document.body.innerHTML = vegito(document.body.innerHTML, messages);

	ready(() => {
		// require('./functions').sortAssets();

		M.Tabs.init(document.getElementById('tabs'));

		require('./lang').init();
		require('./account').init();
		require('./answers').init();
		require('./avatars').init();
		require('./bubbles').init();
		require('./characters').init();
		require('./loveometer').init();
		require('./scenes').init();
		require('./settings').init();
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
