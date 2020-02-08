import { CONFIG, getConfig, regions } from './config';
import { ASSETS } from './assets';

export function populateRegions() {
	let select = document.getElementById('region_edit');
	regions.forEach(function (e, i) {
		let el = document.createElement('option');
		el.textContent = e.name + ' — ' + e.link;
		el.value = i;
		el.selected = i === parseInt(CONFIG.region, 10) ? 'true' : undefined;

		select.appendChild(el);
	});
}

export function populateScenes() {
	let selected = getConfig('scene') || 'Sala de Aula A';
	let select = document.getElementById('scene_edit');

	// Load all scenes
	ASSETS.scenes.forEach(function (e, i) {
		let el = document.createElement('option');
		el.textContent = e.name;
		el.value = i;
		el.selected = e.name === selected ? 'true' : undefined;

		select.appendChild(el);
	});

	// M.FormSelect.init(select);

	select.dispatchEvent(new Event('change'));
}

export function populateScenesSub(index, input) {
	while (input.options.length > 0) { // Clear all options
		input.remove(0);
	}

	let scene = ASSETS.scenes[index];
	scene.variations.forEach(function (e, i) {
		let el = document.createElement('option');
		el.textContent = e.name;
		el.value = i;
		el.dataset.scene = index;

		input.appendChild(el);
	});

	M.FormSelect.init(input);

	input.dispatchEvent(new Event('change'));
}

export function populateAvatars() {
	let selected = getConfig('avatar') || '[Docete]';

	let select = document.getElementById('avatar_edit');
	ASSETS.avatars.forEach(function (e, i) {
		let el = document.createElement('option');
		el.textContent = e.name;
		el.value = i;
		el.dataset.checksum = e.checksum;
		el.selected = e.name === selected ? 'true' : undefined;

		select.appendChild(el);
	});

	select.dispatchEvent(new Event('change'));
}
