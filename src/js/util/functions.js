import { player, region, persistPlayerData } from '../account';
import { getPlayerAvatar } from './api';


// import { messages } from '@/wip/lang'
//
// export default function __(key) {
// 	return messages[key] || ('{{' + key + '}}');
// }

export function drawAvatar(isPortrait, dest) {
	if (!player.avatar) {
		if (!player.data) {
			if (player.username) {
				// If the player is set but there is no player info, try the outdated links
				let timestamp = Date.now().toString();
				dest.src = 'http://avatars.' + region.link + '/' + (isPortrait ? 'face' : 'full') + '/' + player.username + '.' + timestamp + '.png';
			} else {
				dest.src = 'assets/' + (isPortrait ? 'face' : 'body') + '_unknown.png';
			}
			return;
		}

		getPlayerAvatar(player.data.player.id).then(data => {
			console.debug("Player avatar", data);
			player.avatar = data;
			persistPlayerData();
			drawAvatar(isPortrait, dest);
		})
			.catch(error => console.log("Error loading player avatar: ", error));

		return;
	}

	let site = 'https://assets3.' + region.link + '/';
	let type = isPortrait ? 'portrait' : 'normal';
	let avatar = player.avatar;
	let bg = '';

	let firstImage = true;
	let addClothe = function (data, color, clothe_type) {
		if (data.category === 'Skin') {
			avatar.avatar.bodyType = data;
			avatar.avatar.bodyType.category = 'CUSTOM';
			return;
		} else if (data.category === 'Wig') {
			avatar.avatar.hairType.category = 'CUSTOM';
		}

		bg += firstImage ? '' : ',';
		firstImage = false;

		bg += `url(${site}${clothe_type}/web/${type}/${data.id}-${data.security}`;
		if (color) {
			bg += `_${color.id}-${color.security}`;
		}
		bg += '.png)';
	};

	const body = avatar.avatarBody;
	const clothes = avatar.clothes;

	for (let clothe in clothes)
		if (clothes.hasOwnProperty(clothe))
			addClothe(clothes[clothe], null, 'clothe');

	addClothe(body['headAccessory'], null, 'avatarpart');
	addClothe(body['mouthType'],     null, 'avatarpart');
	addClothe(body['eyebrowsType'],  body['hairColor'], 'avatarpart');
	addClothe(body['eyeType'],       body['eyeColor'], 'avatarpart');

	if (body['hairType']) {
		if (body['hairType'].category === 'CUSTOM') {
			console.debug('Custom hair');
		} else {
			addClothe(body['hairType'], body['hairColor'], 'avatarpart');
		}
	}

	if (body['bodyType']) {
		if (body['bodyType'].category === 'CUSTOM') {
			console.debug('Custom body');
			addClothe(body['bodyType'], null, 'clothe');
		} else {
			addClothe(body['bodyType'], null, 'avatarpart');
		}
	}

	dest.src = 'assets/' + (isPortrait ? 'face' : 'body') + '_placeholder.png';
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
