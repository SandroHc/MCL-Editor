// TODO: move to respective files
import { avatars } from './assets/avatars';

import { player } from './wip/account';
import { drawAvatar, getPlayerInfo } from './functions';



export function updateUsername(key) {
	if (key.keyCode === 13) {
		key.preventDefault();
		return updateUsernameBtn();
	}
}

export function updateUsernameBtn() {
	getPlayerInfo(player.username)
		.then(data => {
			player.data = data;

			for (let el in document.getElementsByClassName('actor_select')) {
				if (el.options && el.options[el.selectedIndex].text === '[Docete]') {
					el.dispatchEvent(new Event('change'));
				}
			}

			let query = document.getElementById('avatar_edit');
			if (query.options[query.selectedIndex].text === '[Docete]') {
				query.dispatchEvent(new Event('change'));
			}
		})
		.catch(error => {
			console.warn("Unable to fetch player info:", error);
			player.data = undefined;
		});
}

export function updateAvatar() {
	let avatar = avatars[this.value];
	let el = document.querySelector('.player-avatar');
	el.src = '';

	localStorage.setItem('avatar', JSON.stringify(avatar.name));

	if (avatar.name === '[Nada]') {
		el.style.display = 'none';
		return;
	} else {
		el.style.display = 'block';
	}

	if (avatar.name === '[Docete]') {
		el.style.bottom = '70px';
		drawAvatar(true, el);
	} else {
		el.style.bottom = '0';
		el.style.backgroundImage = '';
		el.src = 'assets/avatar/' + avatar.id + (avatar.checksum ? '-' + avatar.checksum : '') + '.png';
	}
}
