import { messages } from './lang.js';
import { loadCanvas } from './canvas';
import { CHARACTERS } from './assets/characters';
import { drawAvatar } from './util/functions';
import { mdiClose } from '@mdi/js';

const DEFAULT_CHARACTER = {
	name: 'Nathaniel',
	variation: { name: 'Normal', id: 1, checksum: 'c8fa579bddd2fcd5' },
	pos: { x: 0, y: 0 },
	flipped: false
};

let characters = [];
let charactersDom = [];

let nextId = 0;

let sceneElement;
let charactersElement;

export function loadCharacters() {
	// TODO change to constants and move out of the function after the vegito dependency dies
	sceneElement = document.getElementById('scene');
	charactersElement = document.getElementById('characters');

	loadCurrent();

	const addCharacterBtn = document.getElementById('add-character')!;
	addCharacterBtn.addEventListener('click', () => addCharacter());

	const clearCharactersBtn = document.getElementById('clear-characters')!;
	clearCharactersBtn.addEventListener('click', removeAll);

	loadCanvas();
}

function loadCurrent() {
	try {
		const storedCharacters = localStorage.getItem('characters');
		if (storedCharacters) {
			characters = JSON.parse(storedCharacters) || [];
		}
	} catch (e) {
		characters = [];
	}
	console.debug('Loaded ' + characters.length + ' characters');

	if (characters.length === 0) {
		console.debug('List of characters is empty; loading defaults');

		characters.push({
			name: 'Nathaniel',
			variation: { name: 'Normal', id: 1, checksum: 'c8fa579bddd2fcd5' },
			pos: { x: 360, y: 0 },
			flipped: true
		});
		characters.push({
			name: 'Castiel',
			variation: { name: 'Normal', id: 2, checksum: '7e39b3f5947b50be' },
			pos: { x: 340, y: 0 },
			flipped: false
		});
	}

	nextId = characters.length;

	// Initialize character in DOM
	characters.forEach((character, i) => addCharacter(i, character));
}

function loadList($selectMain, $selectVariation, selected) {
	console.debug('Loaded ' + CHARACTERS.length + ' characters');

	CHARACTERS.forEach((character, i) => {
		const option = document.createElement('option');
		option.value = i.toString();
		option.textContent = character.name;
		option.selected = character.name === selected.name;

		if (option.selected) {
			loadListVariations($selectVariation, character.variations, selected.variation);
		}

		$selectMain.appendChild(option);
	});

	M.FormSelect.init($selectMain);

	$selectMain.addEventListener('change', characterChanged);
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
	let characterImg = document.createElement('img');
	characterImg.id = 'actor_' + id;
	characterImg.dataset.actor = id;
	characterImg.alt = messages['character'] + ' ' + (id+1);
	characterImg.classList.add('actor', 'draggable');
	characterImg.style.bottom = '0';
	characterImg.style.left = Math.min(id * 400 - 200, 750) + 'px';
	characterImg.style.transform = `translate(${info.pos.x}px, ${info.pos.y}px) scaleX(${info.flipped ? -1 : 1})`;

	sceneElement.appendChild(characterImg);

	updateCharacterScene(characterImg, info);

	let dom = charactersDom[id];
	if(!dom) dom = charactersDom[id] = {}; // initialize DOM holder
	dom.scene = characterImg;
}

function createCharacterSetting(id, info) {
	let $root = document.createElement('div');

	function createMain() {
		let $divMain = $root.appendChild(document.createElement('div'));
		$divMain.classList.add('input-field', 'col', 's7', 'm5');

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
		$divVariation.classList.add('input-field', 'col', 's5', 'm5');

		let $selectVariation = $divVariation.appendChild(document.createElement('select'));
		$selectVariation.id = 'actor_' + id + '_sub';
		$selectVariation.dataset.actor = id;

		return $selectVariation;
	}

	function createRemove() {
		const svgNamespace = 'http://www.w3.org/2000/svg';

		const removeContainer = document.createElement('div');
		removeContainer.classList.add('input-field', 'col', 's12', 'm2', 'remove-col');

		const removeBtn = document.createElement('a');
		removeBtn.title = `Remove character ${id + 1}`;
		removeBtn.classList.add('btn-floating', 'waves-effect', 'waves-light', 'red');
		removeBtn.onclick = () => removeCharacter(id);

		const removeIcon = document.createElementNS(svgNamespace, 'svg');
		removeIcon.setAttribute('viewBox', '0 0 24 24');

		const removeIconPath = document.createElementNS(svgNamespace, 'path');
		removeIconPath.setAttribute('fill', 'currentColor');
		removeIconPath.setAttribute('d', mdiClose);

		removeIcon.appendChild(removeIconPath);
		removeBtn.appendChild(removeIcon);
		removeContainer.appendChild(removeBtn);
		$root.appendChild(removeContainer);
	}

	let $main = createMain();
	let $variation = createVariation();
	createRemove();

	charactersElement.appendChild($root);

	loadList($main, $variation, info);

	charactersDom[id].config = $root;
	charactersDom[id].main = $main;
	charactersDom[id].variation = $variation;
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
	// Clears any `null` characters that were left behind by removing characters in the current session
	const charactersToPersist = [];
	for (const character of characters) {
		if (character) {
			charactersToPersist.push(character);
		}
	}

	localStorage.setItem('characters', JSON.stringify(charactersToPersist));
}

function characterChanged() {
	let selected = CHARACTERS[this.value];
	console.debug('Character updated', selected);

	let id = this.dataset.actor;

	// Update actor info
	let character = characters[id];
	character.name = selected.name;
	character.variation = selected.variations[0];
	persistCharacters();

	// Update canvas
	let dom = charactersDom[id];
	updateCharacterScene(dom.scene, character);

	// Upload list
	loadListVariations(dom.variation, selected.variations, character.variation);
}

function changedCharacterVariation() {
	let id = this.dataset.actor;
	let dom = charactersDom[id];

	let selected = this.options[this.selectedIndex];

	let characterEditorIdx = document.getElementById('actor_' + this.dataset.actor + '_edit')!.value;
	let character = CHARACTERS[characterEditorIdx];
	let variation = character.variations[this.value];

	console.debug('Selected character ' + id + ': ' + character.name + ' (' + selected.textContent + ')');

	// Update actor info
	let characterEditor = characters[this.dataset.actor];
	characterEditor.name = character.name;
	characterEditor.variation = variation;
	persistCharacters();

	updateCharacterScene(dom.scene, characterEditor);
}

function updateCharacterScene($img, character) {
	$img.style.src = '';
	$img.title = `[${$img.alt}]\n${character.name}\n\n- Drag with SHIFT to move up and down.\n- Double-click to flip.`;

	// TODO: constants in PT?
	if (character.name === '[Nada]') {
		$img.style.display = 'none';
	} else {
		$img.style.display = 'block';
		if (character.name === '[Docete]') {
			drawAvatar(false, $img);
			$img.style.height = '150%';
			$img.style.bottom = '-300px';
		} else {
			let variation = character.variation;
			let asset = variation.id + (variation.checksum ? '-' + variation.checksum : '');
			$img.src = 'assets/character/' + asset + '.png';
			$img.style.backgroundImage = '';
			$img.style.height = '92.24138%';
			$img.style.bottom = '0';
		}
	}
}

export function updateDocete() {
	for (let key in characters) {
		let character = characters[key];
		let dom = charactersDom[key];

		if (character.name === '[Docete]') {
			updateCharacterScene(dom.scene, character);
		}
	}
}
