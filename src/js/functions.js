import CryptoJS from 'crypto-js'

import { player, region } from './wip/account';


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
			player.avatar = data;
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

