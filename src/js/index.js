import interact from 'interactjs'

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

import vegito from 'vegito'
import '@css/style.scss'

import { loaded } from '@/i18n'
import { bubble } from '@/functions_events'
import { getCharacter, persistCharacters } from "./wip/characters";


let zIndexCurrent = 0;

export function init() {
	console.info("[MCL] Starting up version " + VERSION);

	ready(() => {
		document.body.innerHTML = vegito(document.body.innerHTML, loaded);

		// require('./functions').sortAssets();
		require('./functions').loadRegion();

		require('./i18n').populateLang();
		require('./functions_populate').populateRegions();
		// require('./functions_populate').populateScenes();
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
		require('./wip/scenes').load();
		require('./wip/characters').load();

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
			},
			lang_edit: {
				change: require('./i18n').updateLang,
				keyup:  require('./i18n').updateLang
			},
			clear_cache: {
				click: require('./config').clearConfigs
			}
		});

		initDrag();
	});
}

function initDrag() {
	interact('.draggable')
		.draggable({
			inertia: true,
			modifiers: [
				interact.modifiers.restrict({
					restriction: 'parent',
					endOnly: true,
					elementRect: {
						top:    0.5,
						left:   0.5,
						bottom: 0.5,
						right:  0.5,
					}
				}),
			],

			listeners: {
				start(event) {
					event.target.style.zIndex = ++zIndexCurrent
				},

				move(event) {
					let isActor = event.target.className.indexOf('actor') !== -1;
					if (isActor && !event.shiftKey)
						event.dy = 0; // Reset y-pos if the SHIFT key is not being pressed
					return dragUpdatePos(event, event.target);
				},

				end(event) {
					let isActor = event.target.className.indexOf('actor') !== -1;
					if (isActor) {
						return persistCharacters();
					} else {
						// Assume we're moving the bubble
						return localStorage.setObject('bubble', bubble);
					}
				}
			}
		})
		.on('doubletap', event => {
			let actorId = event.target.dataset.actor;
			if (!actorId)
				return;

			let actor = getCharacter(actorId);
			actor.flipped = !actor.flipped;
			persistCharacters();

			dragUpdatePos(event, event.currentTarget);
		});
}

function dragUpdatePos(event, target) {
	let actorId = event.target.dataset.actor;
	let info = actorId ? getCharacter(actorId) : bubble;

	let x = info.pos.x + (event.dx || 0);
	let y = info.pos.y + (event.dy || 0);

	// Translate the element
	target.style.webkitTransform
		= target.style.transform
		= 'translate(' + x + 'px, ' + y + 'px) scaleX(' + (info.flipped || false ? -1 : 1) + ')';

	// Update the position attributes
	info.pos.x = x;
	info.pos.y = y;
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
