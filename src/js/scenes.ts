import { loadFromFile } from './util/functions';
import { SCENES, DEFAULT_SCENE } from './assets/scenes';

let current = DEFAULT_SCENE;

export function loadScenes() {
	console.debug('Loaded ' + SCENES.length + ' scenes');

	loadCurrent();
	loadList();

	const sceneEditor = document.getElementById('scene-edit')!;
	sceneEditor.addEventListener('change', sceneChanged);
	sceneEditor.addEventListener('keyup',  sceneChanged);

	const sceneVariantEditor = document.getElementById('scene-variant-edit')!;
	sceneVariantEditor.addEventListener('change', sceneVariantChanged);
	sceneVariantEditor.addEventListener('keyup',  sceneVariantChanged);

	const sceneFilePicker = document.getElementById('scene-file-picker')!;
	sceneFilePicker.addEventListener('change', e => loadFromFile(e, img => document.getElementById('scene')!.style.backgroundImage = 'url(' + img + ')'));
}

function loadCurrent() {
	try {
		let storedScene = localStorage.getItem('scene');
		if (storedScene) {
			current = JSON.parse(storedScene);
		}
	} catch (e) {
		current = DEFAULT_SCENE;
	}

	applyScene(current.variation);
}

function loadList() {
	const sceneEditor = document.getElementById('scene-edit')!;

	// Load all scenes
	SCENES.forEach((e, i) => {
		let option = document.createElement('option');
		option.value = i.toString();
		option.textContent = e.name;
		option.selected = e.name === current.name;

		if (option.selected) {
			loadListVariants(e.variations);
		}

		sceneEditor.appendChild(option);
	});

	M.FormSelect.init(sceneEditor);
}

function loadListVariants(variants: any[]) {
	const sceneVariantEditor = document.getElementById('scene-variant-edit')! as HTMLSelectElement;

	// Clear all options
	while (sceneVariantEditor.options.length > 0) {
		sceneVariantEditor.remove(0);
	}

	// Init all variations
	variants.forEach((e, i) => {
		const option = document.createElement('option');
		option.value = i.toString();
		option.textContent = e.name;
		option.selected = e.name === current.variation.name;

		sceneVariantEditor.appendChild(option);
	});

	M.FormSelect.init(sceneVariantEditor);
}

function sceneChanged() {
	const sceneEditor = document.getElementById('scene-edit')! as HTMLSelectElement;

	let newScene = SCENES[sceneEditor.value];
	current = {
		...newScene,
		variation: newScene.variations[0]
	};
	console.debug('Selected scene:', current.name, current.variation.name);

	persistScene(current);
	applyScene(current.variation);
	loadListVariants(current.variations);

	let desc = current.name + ' (' + current.variation.name + ')';
	gtag('event', 'changed_scene', {
		'event_category': 'scene',
		'value': desc
	});
}

function sceneVariantChanged() {
	let scene = current;
	let variant = current.variations[this.value];
	console.debug('Selected scene variant: ', scene.name, variant.name);

	// init into canvas
	applyScene(variant);

	// persistRegion variation
	current.variation = variant;
	persistScene(current);

	gtag('event', 'changed_scene', {
		'event_category': 'scene',
		'value': scene.name + ' (' + variant.name + ')'
	});
}

function applyScene(sceneVariant) {
	console.debug('Applying scene:', sceneVariant);

	const asset = sceneVariant.id + (sceneVariant.checksum ? '-' + sceneVariant.checksum : '');

	let sceneCanvas = document.getElementById('scene')!;
	sceneCanvas.style.backgroundImage = 'url(assets/scene/' + asset + '.jpg)';
}

function persistScene(scene) {
	if (scene) {
		localStorage.setItem('scene', JSON.stringify(scene));
	} else {
		localStorage.removeItem('scene');
	}
}
