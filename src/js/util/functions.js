import { persistPlayerData, player, region } from '../account';
import { getPlayerAvatar } from './api';

// import { messages } from '@/wip/lang'
//
// export default function __(key) {
// 	return messages[key] || ('{{' + key + '}}');
// }

function loadPlayerAvatar() {
	return new Promise((resolve, reject) => {
		if (player.avatar) {
			resolve(player.avatar);
		}

		if (!player.data) {
			reject('no player data');
			return;
		}

		getPlayerAvatar(player.data.player.id)
			.then(data => {
				player.avatar = data;
				persistPlayerData();

				resolve(data);
			})
			.catch(error => reject(error));
	})
}

export function drawAvatar(isPortrait, dest) {
	loadPlayerAvatar(dest)
		.then(avatar => {
			console.debug('Player avatar', avatar);
			drawAvatarInternal(avatar, isPortrait, dest);
		})
		.catch(e => {
			console.debug('Unable to load player avatar:', e);

			// Load default asset
			dest.src = 'assets/' + (isPortrait ? 'portrait' : 'normal') + '_unknown.png';
		});
}

function drawAvatarInternal(avatar, isPortrait, dest) {
	let site = 'https://assets3.' + region.link + '/';
	let type = isPortrait ? 'portrait' : 'normal';
	let bg = '';

	let firstImage = true;
	let addClothe = function (data, secondary, clothe_type) {
		// console.debug('CLOTHE', clothe_type, color, data);

		bg += firstImage ? '' : ',';
		firstImage = false;

		bg += `url(${site}${clothe_type}/web/${type}/${data.id}-${data.security}`;

		// secondary parameter, usually color
		if (secondary)
			bg += `_${secondary.id}-${secondary.security}`;

		if (data.type === 'MouthType' || data.type === 'EyeType')
			bg += '_no';

		bg += '.png)';
	};

	const body = avatar['avatarBody'];
	const clothes = avatar['clothes'];

	// iterate clothes in reverse order (to prevent underwear from rendering above the pants, etc.)
	for (let i = clothes.length - 1; i >= 0; i--)
		addClothe(clothes[i], null, 'clothe');

	addClothe(body['headAccessory'], null, 'avatarpart');
	addClothe(body['mouthType'],     null, 'avatarpart');
	addClothe(body['eyebrowsType'],  body['hairColor'], 'avatarpart');
	addClothe(body['eyeType'],       body['eyeColor'], 'avatarpart');
	addClothe(body['hairType'],      body['hairColor'], 'avatarpart');
	addClothe(body['bodyColor'],     null, 'avatarpart');

	dest.src = `assets/${type}_placeholder.png`;
	dest.style.backgroundImage = bg;
}

export function loadFromFile(e, bg_out = 'scene', img_out = undefined) {
	console.log("Loading file");

	const file = e.target.files[0];
	if (!file) {
		console.log('No file selected');
		alert('Seleciona primeiro o ficheiro, baka!');
		return;
	}

	if (!FileReader) {
		console.log('FileReader not supported');
		return;
	}

	let fr = new FileReader();
	fr.onload = function () {
		if (img_out) {
			document.querySelector(img_out).src = fr.result;
		}
		if (bg_out) {
			return document.getElementById(bg_out).style.backgroundImage = 'url(' + fr.result + ')';
		}
	};

	fr.readAsDataURL(file);
}

export function sort(list, key = a => a.name) {
	return list.sort((a, b) => {
		a = key(a).toUpperCase();
		b = key(b).toUpperCase();

		if (a.indexOf('[') > b.indexOf('[')) {
			// Display '[val]' at the top
			return -1;
		} else if (a < b) {
			return -1;
		} else if (a > b) {
			return 1;
		} else {
			return 0;
		}
	});
}
