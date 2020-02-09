import { drawAvatar } from '../functions'
import { sort } from './utils'

const DEFAULT_AVATAR = {
	'name': '[Docete]',
	'id': 's',
	'checksum': '-',
};

let avatars = [];
let avatar = undefined;

export function init() {
	load();

	document.getElementById('avatar-edit').addEventListener('change', changedAvatar);
}

function load() {
	avatar = JSON.parse(localStorage.getItem('avatar')) || DEFAULT_AVATAR;

	console.debug('Loaded avatar');

	apply();
	loadList();
}

function loadList() {
	import('../assets/avatars').then(module => {
		console.debug('Loaded ' + module.avatars.length + ' avatars');
		avatars = sort(module.avatars, a => a.name);

		let $select = document.getElementById('avatar-edit');
		avatars.forEach((e, i) => {
			let $option = $select.appendChild(document.createElement('option'));
			$option.value = i;
			$option.textContent = e.name;
			$option.dataset.checksum = e.checksum;
			$option.selected = e.name === avatar.name;
		});

		M.FormSelect.init($select);
	});
}

export function persist() {
	localStorage.setItem('avatar', JSON.stringify(avatar));
}

function changedAvatar() {
	console.debug('Avatar updated', this.value);

	// TODO:
	avatar = avatars[this.value];
	persist();
	apply();
}

function apply() {
	let $el = document.querySelector('.player-avatar');
	$el.src = '';

	if (avatar.name === '[Nada]') {
		$el.style.display = 'none';
		return;
	} else {
		$el.style.display = 'block';
	}

	if (avatar.name === '[Docete]') {
		$el.style.bottom = '70px';
		drawAvatar(true, $el);
	} else {
		$el.style.bottom = '0';
		$el.style.backgroundImage = '';
		$el.src = 'assets/avatar/' + avatar.id + (avatar.checksum ? '-' + avatar.checksum : '') + '.png';
	}
}
