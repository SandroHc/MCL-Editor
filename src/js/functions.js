import CryptoJS from 'crypto-js'

import { player, region } from './wip/account';


let draw_avatar_dest = null;
let draw_avatar_portrait = null;

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

export function getPlayerInfo(username) {
	return new Promise((resolve, reject) => {
		if (!username) {
			reject("invalid username");
			return;
		}

		let timestamp = Date.now().toString();
		let message = [
			'anonymous', // Private key
			'GET',
			'https://api3.' + region.link + '/v2/profile/find/' + username, timestamp
		];

		let hash = CryptoJS.HmacSHA1(message.join('+'), 'anonymous'); // (message, passphrase)


		// API: https://api3.amordoce.com/v2/profile/find/{username}
		fetch(`https://mcl.sandrohc.net/${region.id}/v2/profile/find/${username}`, {
			headers: new Headers({
				'X-Beemoov-Application': 'anonymous',
				'X-Beemoov-Signature': hash,
				'X-Beemoov-Timestamp': timestamp,
			})
		})
			.then(response => {
				if (!response.ok) throw new Error(response.status)
			})
			.then(data => data.json())
			.then(data => {
				resolve(data.data);
			}).catch(error => {
				reject(error);
			});
	})
}

export function getPlayerAvatar(playerId) {
	return new Promise((resolve, reject) => {
		if (!playerId) {
			reject("invalid id");
			return;
		}

		// API: http://api3.amordoce.com/v2/avatar/{player_id}
		fetch(`https://mcl.sandrohc.net/${region.id}/v2/avatar/${playerId}`, {
			headers: new Headers({
			})
		})
			.then(response => {
				if (!response.ok) throw new Error(response.status)
			})
			.then(data => data.json())
			.then(data => {
				resolve(data.data);
			}).catch(error => {
				reject(error);
			});
	})
}

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

		draw_avatar_dest = dest;
		draw_avatar_portrait = isPortrait;

		getPlayerAvatar(player.data.player.id).then(data => {
			player.avatar = data;
			drawAvatar(draw_avatar_portrait, draw_avatar_dest);
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

	// TODO Better handle special cases, like Skin and Wig
	for (let clothe in avatar.clothes)
		addClothe(avatar.clothes[clothe], null, 'clothe');

	addClothe(avatar.avatar.headAccessory, null, 'avatarpart');
	addClothe(avatar.avatar.mouthType,     null, 'avatarpart');
	addClothe(avatar.avatar.eyebrowsType,  avatar.avatar.hairColor, 'avatarpart');
	addClothe(avatar.avatar.eyeType,       avatar.avatar.eyeColor, 'avatarpart');

	if (avatar.avatar.hairType.category === 'CUSTOM') {
		console.debug('Custom hair');
	} else {
		addClothe(avatar.avatar.hairType, avatar.avatar.hairColor, 'avatarpart');
	}

	if (avatar.avatar.bodyType.category === 'CUSTOM') {
		console.debug('Custom body');
		addClothe(avatar.avatar.bodyType, null, 'clothe');
	} else {
		addClothe(avatar.avatar.bodyType, null, 'avatarpart');
	}

	dest.src = 'assets/' + (isPortrait ? 'face' : 'body') + '_placeholder.png';
	dest.style.backgroundImage = bg;
}

export function sortAssets() {
	let comparator = (a, b) => {
		a = a.name.toUpperCase();
		b = b.name.toUpperCase();

		if (a.indexOf('[') > b.indexOf('[')) {
			// Display '[val]' at the top
			return -1;
		} else  if (a < b) {
			return -1;
		} else if (a > b) {
			return 1;
		} else {
			return 0;
		}
	};

	// TODO
	// ASSETS.scenes.sort(comparator);
	// ASSETS.avatars.sort(comparator);
	// ASSETS.emotions.sort(comparator);
}
