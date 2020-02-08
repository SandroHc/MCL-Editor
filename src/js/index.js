import interact from 'interactjs'

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

import { loadLang } from '@/i18n'
import { loadFromFile } from '@/functions';
import { emptyActor, getActor, persistActors } from "@/actors";
import { bubble } from '@/functions_events';

import '@css/style.scss'


let zIndexCurrent = 0;
let snapOptions = {
	targets: [],
	range: Infinity,
	relativePoints: [ {
		x: 0,
		y: 0
	} ]
};

export function init() {
	console.info("[MCL] Starting up version " + VERSION);

	loadLang();

	ready(() => {
		// TODO: why not use Dropdown?
		let elems = document.querySelectorAll('select');
		M.FormSelect.init(elems, {
			// https://materializecss.com/select.html#options
		});

		let tabs = document.querySelector('ul.tabs');
		M.Tabs.init(tabs, {
			// https://materializecss.com/tabs.html#options
		});
	});

	require('./functions').loadRegion();

	// Bind input events
	(function (elements) {
		for (let el_name in elements) {
			for (let event in elements[el_name]) {
				document.getElementById(el_name).addEventListener(event, elements[el_name][event]);
			}
		}
	})({
		scene_edit: {
			change: require('./functions_events').updateScene,
			keyup:  require('./functions_events').updateScene
		},
		scene_sub_edit: {
			change: require('./functions_events').updateSceneSub,
			keyup:  require('./functions_events').updateSceneSub
		},
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
		clear_actors: {
			click: require('./actors').removeAllActors
		},
		clear_cache: {
			click: require('./config').clearConfigs
		}
	});

	document.getElementById('file_scene_edit').addEventListener('change', e => loadFromFile(e));

	require('./functions').sortAssets();

	require('./i18n').populateLang();
	require('./functions_populate').populateRegions();
	require('./functions_populate').populateScenes();
	require('./functions_populate').populateAvatars();

	require('./actors').initActors();
	require('./functions_events').initBubble();
	require('./functions_events').initAnswers();

	initDrag();

	require('./functions').loadUsername();
}

function initDrag() {
	let snapEnabled = false;
	// let snapSize = 50;
	// snapOptions.targets[0] = interact.createSnapGrid({
	// 	x: snapSize,
	// 	y: snapSize
	// });

	interact('.draggable').draggable({
		modifiers: [
		// 	interact.modifiers.snap({
		// 		// snap to the corners of a grid
		// 		targets: [
		// 			interact.snappers.grid({ x: snapSize, y: snapSize }),
		// 		],
		// 	})
			interact.modifiers.restrict({
				restriction: 'parent',
				endOnly: true,
				elementRect: {
					top: 0.5,
					left: 0.5,
					bottom: 0.5,
					right: 1
				}
			}),
		],
		inertia: !snapEnabled,
		// snap: snapEnabled ? snapOptions : {},

		// startAxis: 'xy',
		// lockAxis: 'start',

		listeners: {
			start (event) {
				event.target.style.zIndex = ++zIndexCurrent
			},

			move (event) {
				let isActor = event.target.className.indexOf('actor') !== -1;
				if (isActor && !event.shiftKey)
					event.dy = 0; // Reset y-pos if the SHIFT key is not being pressed
				return dragUpdatePos(event, event.target);
			},

			end (event) {
				let isActor = event.target.className.indexOf('actor') !== -1;
				if (isActor) {
					return persistActors();
				} else {
					// Assume we're moving the bubble
					return localStorage.setObject('bubble', bubble);
				}
			}
		}
	}).on('doubletap', event => {
		let isActor = event.target.className.indexOf('actor') !== -1;
		if (!isActor)
			return;

		let actor = getActor(event.target.dataset.actor);
		actor.flipped = !actor.flipped;
		persistActors();

		dragUpdatePos(event, event.currentTarget);
	});
}

function dragUpdatePos(event, target) {
	let isActor = target.className.indexOf('actor') !== -1;
	let info = isActor ? getActor(event.target.dataset.actor) || emptyActor : bubble;

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


init();
