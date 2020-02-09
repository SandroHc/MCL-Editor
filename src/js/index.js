import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

import '@css/style.scss'
import vegito from 'vegito'

import { messages } from '@/wip/lang'

function init() {
	console.info("[MCL] Starting up version " + VERSION);

	ready(() => {
		document.body.innerHTML = vegito(document.body.innerHTML, messages);

		// require('./functions').sortAssets();
		require('./functions').loadRegion();

		require('./functions_populate').populateRegions();
		require('./functions_populate').populateAvatars();

		require('./functions_events').initBubble();
		require('./functions_events').initAnswers();

		require('./functions').loadUsername();

		// TODO: why not use Dropdown?
		let elems = document.querySelectorAll('select');
		M.FormSelect.init(elems, {
			// https://materializecss.com/select.html#options
		});

		let tabs = document.querySelector('ul.tabs');
		M.Tabs.init(tabs, {
			// https://materializecss.com/tabs.html#options
		});

		// TODO: WIP
		require('./wip/lang').load();
		require('./wip/scenes').load();
		require('./wip/characters').load();
		require('./wip/settings').load();

		// Bind input events
		(function (elements) {
			for (let el_name in elements) {
				for (let event in elements[el_name]) {
					document.getElementById(el_name).addEventListener(event, elements[el_name][event]);
				}
			}
		})({
			lovelevel_edit: {
				input: require('./functions_events').loveometerLevel
			},
			lovelevel_visible: {
				change: require('./functions_events').loveometer
			},
			bubble_edit: {
				keyup: require('./functions_events').updateBubble
			},
			answers_edit: {
				keyup: require('./functions_events').updateAnswers
			},
			username_submit: {
				click: require('./functions_events').updateUsernameBtn
			},
			username_edit: {
				keyup: require('./functions_events').updateUsername
			},
			avatar_edit: {
				change: require('./functions_events').updateAvatar,
				keyup:  require('./functions_events').updateAvatar
			}
		});
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
