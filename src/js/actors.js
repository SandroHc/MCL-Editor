import { ASSETS } from './assets';
import { loaded } from "./i18n";
import { drawAvatar } from "@/functions";

let actors = [];
let actors_DOM = []; // Separate the DOM elements, so we can cache the actors easily

export let emptyActor = {
	name: 'Nathaniel',
	pos: { x: 0, y: 0 },
	flipped: false
};

function addActor(info = emptyActor) {
	console.debug("Adding actor", info);

	let id = actors.length + 1;

	let root = document.createElement('div');

	// Main
	let div = document.createElement('div');
	div.classList.add('input-field', 'col', 's12', 'm5', 'actor_' + id);

	let select_actor = document.createElement('select');
	select_actor.id = 'actor_' + id + '_edit';
	select_actor.className = 'actor_select';
	select_actor.dataset.actor = id;

	let label = document.createElement('label');
	label["for"] = 'actor_' + id + '_edit';
	label.textContent = vegito('{{character}} ' + id, loaded);

	div.appendChild(select_actor);
	div.appendChild(label);

	root.appendChild(div);
	select_actor.addEventListener('change', updateActor);
	select_actor.addEventListener('keyup', updateActor);


	// Sub
	div = document.createElement('div');
	div.classList.add('input-field', 'col', 's12', 'm5', 'actor_' + id);

	let select_sub = document.createElement('select');
	select_sub.id = 'actor_' + id + '_sub';
	select_sub.dataset.actor = id;

	div.appendChild(select_sub);

	root.appendChild(div);
	select_sub.addEventListener('change', updateActorSub);
	select_sub.addEventListener('change', updateActorSub);


	// Remove
	div = document.createElement('div');
	div.classList.add('input-field', 'col', 's6', 'm2', 'actor_' + id);
	div.style.height = '66px';

	// <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>

	let remove_btn = document.createElement('a');
	remove_btn.classList.add('btn-floating', 'waves-effect', 'waves-light', 'red');
	remove_btn.onclick = () => removeActor(id);

	let remove_icon = document.createElement('i');
	remove_icon.classList.add('material-icons');
	remove_icon.textContent = 'remove_circle_outline';

	remove_btn.appendChild(remove_icon);
	div.appendChild(remove_btn);
	root.appendChild(div);

	document.getElementById('actors').appendChild(root);


	// Scene image
	let img = document.createElement('img');
	img.id = 'actor_' + id;
	img.classList.add('actor', 'draggable');
	img.alt = vegito('{{character}} ' + id, loaded);
	img.style.bottom = 0;
	img.style.left = Math.min(id * 400 - 200, 750) + 'px';
	img.dataset.actor = id;
	img.style.webkitTransform
		= img.style.transform
		= `translate(${info.pos.x}px, ${info.pos.y}px) scaleX(${info.flipped ? -1 : 1})`;
	img.title = `${img.alt} - ${info.name}\n\nPress SHIFT to move up and down\nDouble-click to flip`;

	document.getElementById('scene').appendChild(img);

	// Add this actor's info to the actors list
	actors.push(info);
	actors_DOM.push({
		config: root,
		select: select_actor,
		select_sub: select_sub,
		scene: img
	});
	persistActors();

	populateEmotions(select_actor, info.name);
	populateEmotionsSub(select_sub);

	M.FormSelect.init(select_actor);
	M.FormSelect.init(select_sub);
}

export function getActor(id) {
	return actors[id - 1];
}

function removeActor(id) {
	console.debug('Removing ' + id);

	let actor = actors_DOM[id - 1];

	if (!actor) {
		console.warn('Actor with ID ' + id + ' not found. Can\'t remove');
		return;
	}

	actor.config.parentNode.removeChild(actor.config);
	actor.scene.parentNode.removeChild(actor.scene);

	// Clear references to this actor
	actors[id - 1] = null;
	actors_DOM[id - 1] = null;

	return persistActors();
}

export function removeAllActors() {
	actors.forEach(actor => removeActor(actor.id));
}

export function initActors() {
	document.getElementById('add-actor').addEventListener('click', () => addActor());

	let cache = localStorage.getObject('actors') || [];
	cache.clean(null); // Remove empty references (left when removing an actor)

	if (cache.length === 0) {
		console.debug('No actors in cache. Loading defaults');

		cache.push({
			name: 'Nathaniel',
			pos: {
				x: -16,
				y: 0
			},
			flipped: false
		});
		cache.push({
			name: 'Castiel',
			pos: {
				x: -26,
				y: 0
			},
			flipped: false
		});
	}

	cache.forEach(actor => addActor(actor));

	console.debug('Loaded ' + cache.length + ' actors');
}

function populateEmotions(select, selected) {
	ASSETS.emotions.forEach(function (emotion, i) {
		let option = document.createElement('option');
		option.textContent = emotion.name;
		option.value = i;
		option.selected = emotion.name === selected ? 'true' : void 0;
		return select.appendChild(option);
	});
}

function populateEmotionsSub(select) {
	while (select.options.length > 0) { // Clear all options
		select.remove(0);
	}

	let actorEl = document.getElementById('actor_' + select.dataset.actor + '_edit');
	if (!actorEl) {
		console.log('Invalid actor for:', select);
		return;
	}

	let emotion = ASSETS.emotions[actorEl.value];
	emotion.variations.forEach(function (variation, i) {
		let option = document.createElement('option');
		option.textContent = variation.name;
		option.value = i;
		option.dataset.emotion = actorEl.value;
		option.dataset.actor = actorEl.dataset.actor;
		select.appendChild(option);
	});

	select.dispatchEvent(new Event('change'));
}

function updateActor() {
	// console.log("CHAR SELECTED | " + ASSETS.emotions[@value].name);
	return populateEmotionsSub(document.getElementById('actor_' + this.dataset.actor + '_sub'));
}

function updateActorSub() {
	let selected = this.options[this.selectedIndex];
	let emotion = ASSETS.emotions[document.getElementById('actor_' + this.dataset.actor + '_edit').value];

	console.debug('Selected ACTOR: ' + emotion.name + ' (' + selected.textContent + ')');

	// Update actor info
	actors[this.dataset.actor - 1].name = emotion.name;
	persistActors();

	let target = document.getElementById('actor_' + this.dataset.actor);
	target.style.src = '';

	// TODO: constant in PT?
	if (emotion.name === '[Nada]') {
		target.style.display = 'none';
	} else {
		target.style.display = 'block';
		if (emotion.name === '[Docete]') {
			drawAvatar(false, target);
			// target.src = assets.body

			target.style.height = '150%';
			target.style.bottom = '-300px';
		} else {
			let variation = emotion.variations[this.value];
			target.src = 'img/emotion/' + variation.id + (variation.checksum ? '-' + variation.checksum : '') + '.png';
			target.style.backgroundImage = '';
			target.style.height = '92.24138%';
			target.style.bottom = '0';
		}
	}
}

export function persistActors() {
	return localStorage.setObject('actors', actors);
}
