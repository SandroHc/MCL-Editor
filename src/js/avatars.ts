import { drawAvatar } from './util/functions';
import { AVATARS } from './assets/avatars';

const DEFAULT_AVATAR = {
	'name': '[Docete]',
	'id': 's',
	'checksum': '-',
};

let avatar = DEFAULT_AVATAR;

export function loadAvatars() {
	try {
		const storedAvatar = localStorage.getItem('avatar');
		if (storedAvatar) {
			avatar = JSON.parse(storedAvatar);
		}
		if (!storedAvatar) {
			avatar = DEFAULT_AVATAR;
		}
	} catch(e) {
		avatar = DEFAULT_AVATAR;
	}
	console.debug('Loaded avatar', avatar);

	apply();
	loadList();

	const avatarEditor = document.getElementById('avatar-edit')!;
	avatarEditor.addEventListener('change', changedAvatar);
}

function loadList() {
	console.debug('Loaded ' + AVATARS.length + ' avatars');

	const avatarEditor = document.getElementById('avatar-edit')!;

	AVATARS.forEach((e, i) => {
		let option = document.createElement('option');
		option.value = i.toString();
		option.textContent = e.name;
		option.dataset.checksum = e.checksum;
		option.selected = e.name === avatar.name;

		avatarEditor.appendChild(option);
	});

	M.FormSelect.init(avatarEditor);
}

export function persistAvatar() {
	localStorage.setItem('avatar', JSON.stringify(avatar));
}

function changedAvatar() {
	const avatarEditor = document.getElementById('avatar-edit')! as HTMLInputElement;
	console.debug('Avatar updated', avatarEditor.value);

	avatar = AVATARS[avatarEditor.value];

	gtag('event', 'changed_avatar', {
		'event_category': 'avatar',
		'value': avatar?.name
	});

	persistAvatar();
	apply();
}

export function apply() {
	const avatarElement = document.getElementById('player-avatar')! as HTMLImageElement;
	avatarElement.src = '';

	if (avatar.name === '[Nada]') {
		avatarElement.style.display = 'none';
		return;
	}

	avatarElement.style.display = 'block';

	if (avatar.name === '[Docete]') {
		avatarElement.style.bottom = '70px';
		drawAvatar(true, avatarElement);
	} else {
		avatarElement.style.bottom = '0';
		avatarElement.style.backgroundImage = '';
		avatarElement.src = 'assets/avatar/' + avatar.id + (avatar.checksum ? '-' + avatar.checksum : '') + '.png';
	}
}
