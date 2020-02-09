import { loadFromFile } from '@/functions';

const DEFAULT_SCENE = {
	'name': 'Sala de Aula A',
	'variations': [
		{ name: 'Dia', id: 1, checksum: '938f8d285289b68b' },
		{ name: 'Noite', id: 7, checksum: '' },
		{ name: 'Sepia', id: 96, checksum: '' },
	],
	'variation': { name: 'Dia', id: 1, checksum: '938f8d285289b68b' },
};

let scenes = [];
let current = undefined;

export function load() {
	loadCurrent();

	import('../assets/scenes').then(module => {
		scenes = module.scenes;
		console.debug('Loaded ' + module.scenes.length + ' scenes');

		loadList(module.scenes);

		document.getElementById('scene_edit').addEventListener('change', changedScene);
		document.getElementById('scene_edit').addEventListener('keyup',  changedScene);

		document.getElementById('scene_variation_edit').addEventListener('change', changedSceneVariation);
		document.getElementById('scene_variation_edit').addEventListener('keyup',  changedSceneVariation);

		document.getElementById('file_scene_edit').addEventListener('change', e => loadFromFile(e));
	});
}

function loadCurrent() {
	current = JSON.parse(localStorage.getItem('scene')) || DEFAULT_SCENE;
	applyScene(current.variation);
}

function loadList(scenes) {
	let $el = document.getElementById('scene_edit');

	// Load all scenes
	scenes.forEach((e, i) => {
		let $option = document.createElement('option');
		$option.value = i;
		$option.textContent = e.name;
		$option.selected = e.name === current.name;

		if ($option.selected) {
			loadListVariations(e.variations);
		}

		$el.appendChild($option);
	});

	M.FormSelect.init($el);
}

function loadListVariations(variations) {
	let $el = document.getElementById('scene_variation_edit');

	// clear all options
	while ($el.options.length > 0) {
		$el.remove(0);
	}

	// load all variations
	variations.forEach((e, i) => {
		let el = $el.appendChild(document.createElement('option'));
		el.value = i;
		el.textContent = e.name;
		el.selected = e.name === current.variation.name;
	});

	M.FormSelect.init($el);
}

function changedScene() {
	console.debug('Scene updated');

	current = scenes[this.value];
	current.variation = current.variations[0];
	persistScene(current);

	applyScene(current.variation);

	// load variation list
	loadListVariations(current.variations);
}

function changedSceneVariation() {
	let scene = current;
	let variation = current.variations[this.value];

	console.debug('Selected scene: ', scene.name + ' (' + variation.name + ')');

	// load into canvas
	applyScene(variation);

	// persist variation
	current.variation = variation;
	persistScene(current);
}

function applyScene(variation) {
	console.debug('Applying scene:', variation);

	let asset = variation.id + (variation.checksum ? '-' + variation.checksum : '');

	let $el = document.getElementById('scene');
	$el.style.backgroundImage = 'url(assets/scene/' + asset + '.jpg)';
}

function persistScene(scene) {
	localStorage.setItem('scene', JSON.stringify(scene));
}
