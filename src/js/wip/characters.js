import { messages } from "./lang";
import { load as canvas } from "./canvas";
import { drawAvatar } from "../functions";

const DEFAULT_CHARACTER = {
	name: 'Nathaniel',
	variation: { name: 'Normal', id: 1, checksum: 'c8fa579bddd2fcd5' },
	pos: { x: 0, y: 0 },
	flipped: false
};

let emotions = [];
let characters = [];
let charactersDom = [];

let nextId = 0;

let $scene;
let $characters;

export function init() {
	// TODO change to constants and move out of the function, after the vegito dependecy dies
	$scene = document.getElementById('scene');
	$characters = document.getElementById('characters');

	loadCurrent();

	document.getElementById('add-actor').addEventListener('click', () => addCharacter());
	document.getElementById('clear-actors').addEventListener('click', removeAll);

	canvas();
}

function loadCurrent() {
	characters = JSON.parse(localStorage.getItem('characters')) || [];
	characters.clean(null); // remove null values, left by removing characters in previous session

	console.debug('Loaded ' + characters.length + ' characters');

	if (characters.length === 0) {
		console.debug('List of characters is empty. Loading defaults');

		characters.push({
			name: 'Nathaniel',
			variation: { name: 'Normal', id: 1, checksum: 'c8fa579bddd2fcd5' },
			pos: { x: -16, y: 0 },
			flipped: false
		});
		characters.push({
			name: 'Castiel',
			variation: { name: 'Normal', id: 2, checksum: '7e39b3f5947b50be' },
			pos: { x: -26, y: 0 },
			flipped: false
		});
	}

	nextId = characters.length;

	// initialize DOM
	characters.forEach((character, i) => addCharacter(i, character));
}

function loadList($selectMain, $selectVariation, selected) {
	import('../assets/emotions').then(module => {
		emotions = module.emotions;
		console.debug('Loaded ' + module.emotions.length + ' emotions');

		module.emotions.forEach((emotion, i) => {
			let $option = $selectMain.appendChild(document.createElement('option'));
			$option.value = i;
			$option.textContent = emotion.name;
			$option.selected = emotion.name === selected.name;

			if ($option.selected) {
				loadListVariations($selectVariation, emotion.variations, selected.variation);
			}
		});

		M.FormSelect.init($selectMain);

		$selectMain.addEventListener('change', changedCharacter);
	});
}

function loadListVariations($select, variations, selected) {
	// clear all options
	while ($select.options.length > 0) {
		$select.remove(0);
	}

	if (!variations) {
		console.warn('No variations for', selected);
		return;
	}

	// init all variations
	variations.forEach((e, i) => {
		let $option = document.createElement('option');
		$option.value = i;
		$option.textContent = e.name;
		$option.selected = e.name === selected.name;

		$select.appendChild($option);
	});

	M.FormSelect.init($select);

	$select.addEventListener('change', changedCharacterVariation);
}

export function getCharacter(id) {
	return characters[id];
}

function addCharacter(id = nextId++, info = DEFAULT_CHARACTER) {
	console.debug('Adding character', id, info);

	createCharacterScene(id, info);
	createCharacterSetting(id, info);

	// Add this actor's info to the actors list
	if(!characters[id]) {
		characters[id] = info;
		persistCharacters();
	}
}

function createCharacterScene(id, info) {
	let $img = document.createElement('img');
	$img.id = 'actor_' + id;
	$img.dataset.actor = id;
	$img.alt = messages['character'] + ' ' + (id+1);
	$img.title = `${$img.alt} - ${info.name}\n\nPress SHIFT to move up and down\nDouble-click to flip`;
	$img.classList.add('actor', 'draggable');
	$img.style.bottom = '0';
	$img.style.left = Math.min(id * 400 - 200, 750) + 'px';
	$img.style.webkitTransform
		= $img.style.transform
		= `translate(${info.pos.x}px, ${info.pos.y}px) scaleX(${info.flipped ? -1 : 1})`;

	$scene.appendChild($img);

	updateCharacterScene($img, info);

	let dom = charactersDom[id];
	if(!dom) dom = charactersDom[id] = {}; // initialize DOM holder
	dom.scene = $img;
}

function createCharacterSetting(id, info) {
	let $root = document.createElement('div');

	function createMain() {
		let $divMain = $root.appendChild(document.createElement('div'));
		$divMain.classList.add('input-field', 'col', 's12', 'm5', 'actor_' + id); // TODO why the 'actor_{id}'?

		let $selectMain = $divMain.appendChild(document.createElement('select'));
		$selectMain.id = 'actor_' + id + '_edit';
		$selectMain.className = 'actor_select';
		$selectMain.dataset.actor = id;

		let label = $divMain.appendChild(document.createElement('label'));
		label.for = 'actor_' + id + '_edit';
		label.textContent = messages['character'] + ' ' + (id+1);

		return $selectMain;
	}

	function createVariation() {
		let $divVariation = $root.appendChild(document.createElement('div'));
		$divVariation.classList.add('input-field', 'col', 's12', 'm5', 'actor_' + id); // TODO why the 'actor_{id}'?

		let $selectVariation = $divVariation.appendChild(document.createElement('select'));
		$selectVariation.id = 'actor_' + id + '_sub';
		$selectVariation.dataset.actor = id;

		return $selectVariation;
	}

	function createRemove() {
		let $div = $root.appendChild(document.createElement('div'));
		$div.classList.add('input-field', 'col', 's6', 'm2', 'actor_' + id);
		$div.style.height = '66px';

		// i.e.: <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>

		let $removeBtn = $div.appendChild(document.createElement('a'));
		$removeBtn.classList.add('btn-floating', 'waves-effect', 'waves-light', 'red');
		$removeBtn.onclick = () => removeCharacter(id);

		let $removeIcon = $removeBtn.appendChild(document.createElement('i'));
		$removeIcon.classList.add('material-icons');
		$removeIcon.textContent = 'remove_circle_outline';
	}

	let $main = createMain();
	let $variation = createVariation();
	createRemove();

	$characters.appendChild($root);

	loadList($main, $variation, info);

	charactersDom[id].config = $root;
}

export function removeAll() {
	characters.forEach(actor => removeCharacter(actor.id));
}

function removeCharacter(id) {
	console.debug('Removing character', id);

	let dom = charactersDom[id];
	if (!dom) {
		console.warn('Character with ID ' + id + ' not found. Can\'t remove');
		return;
	}

	dom.config.parentNode.removeChild(dom.config);
	dom.scene.parentNode.removeChild(dom.scene);

	// Clear references to this actor
	delete characters[id];
	delete charactersDom[id];

	persistCharacters();
}

export function persistCharacters() {
	localStorage.setItem('characters', JSON.stringify(characters));
}

function changedCharacter() {
	console.debug('Character updated', this.value);

	// TODO:
	populateEmotionsSub(document.getElementById('actor_' + this.dataset.actor + '_sub'));
}

function changedCharacterVariation() {
	let id = this.dataset.actor;
	let dom = charactersDom[id];

	let selected = this.options[this.selectedIndex];

	let emotion = emotions[document.getElementById('actor_' + this.dataset.actor + '_edit').value];
	let variation = emotion.variations[this.value];

	console.debug('Selected character ' + id + ': ' + emotion.name + ' (' + selected.textContent + ')');

	// Update actor info
	let character = characters[this.dataset.actor];
	character.name = emotion.name;
	character.variation = variation;
	persistCharacters();

	updateCharacterScene(dom.scene, character);
}

function updateCharacterScene($img, character) {
	$img.style.src = '';

	// TODO: constant in PT?
	if (character.name === '[Nada]') {
		$img.style.display = 'none';
	} else {
		$img.style.display = 'block';
		if (character.name === '[Docete]') {
			drawAvatar(false, $img);
			// $img.src = assets.body

			$img.style.height = '150%';
			$img.style.bottom = '-300px';
		} else {
			let variation = character.variation;
			let asset = variation.id + (variation.checksum ? '-' + variation.checksum : '');
			$img.src = 'assets/emotion/' + asset + '.png';
			$img.style.backgroundImage = '';
			$img.style.height = '92.24138%';
			$img.style.bottom = '0';
		}
	}
}
