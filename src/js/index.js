import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

import '@css/style.scss'
import vegito from 'vegito'

import { messages } from './wip/lang'

function init() {
	console.info("[MCL] Starting up version " + VERSION);

	document.body.innerHTML = vegito(document.body.innerHTML, messages);

	ready(() => {
		// require('./functions').sortAssets();

		M.FormSelect.init(document.querySelectorAll('select'));
		M.Tabs.init(document.getElementById('tabs'));

		// TODO: WIP
		require('./wip/lang').init();
		require('./wip/account').init();
		require('./wip/answers').init();
		require('./wip/avatars').init();
		require('./wip/bubbles').init();
		require('./wip/characters').init();
		require('./wip/loveometer').init();
		require('./wip/scenes').init();
		require('./wip/settings').init();
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
