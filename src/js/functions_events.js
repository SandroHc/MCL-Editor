// TODO: move to respective files
import { avatars } from './assets/avatars';

import { CONFIG } from './config';
import { drawAvatar, getPlayerInfo } from './functions';

export let bubble = undefined;


export function loveometerLevel() {
	let lovelevelVisible = document.getElementById('lovelevel_visible');
	lovelevelVisible.checked = true;
	lovelevelVisible.dispatchEvent(new Event('change'));

	document.querySelector('#loveometer .gauge').style.height = this.value / 2 + 50 + '%';
	document.querySelector('#loveometer .heart-text').innerHTML = this.value + '%';
}

export function loveometer() {
	document.getElementById('loveometer').style.display = this.checked ? 'block' : 'none';
}

export function initBubble() {
	bubble = JSON.parse(localStorage.getItem('bubble')) || {
		text: '',
		pos: { x: 0, y: 0 }
	};

	let el = document.getElementById('bubble_edit');
	el.value = bubble.text;
	el.dispatchEvent(new Event('keyup'));

	el = document.getElementById('bubble');
	el.style.webkitTransform
		= el.style.transform
		= `translate(${bubble.pos.x}px, ${bubble.pos.y}px)`;
}

export function updateBubble() {
	let el = document.getElementById('bubble');
	el.style.display = this.value !== '' ? 'block' : 'none';

	if (this.value !== '')
		el.innerHTML = this.value.replace(/\n/g, '<br>');

	bubble.text = this.value;
	localStorage.setItem('bubble', JSON.stringify(bubble));
}

export function initAnswers() {
	let answers = localStorage.getItem('answers');

	if (answers) {
		let el = document.getElementById('answers_edit');
		el.textContent = answers;
		el.dispatchEvent(new Event('keyup'));
	}
}

export function updateAnswers() {
	let el = document.getElementById('answers');

	if (this.value !== '') {
		document.querySelector('.player').style.display = 'block';

		el.style.display = 'block';
		el.innerHTML = '<li class="response"><span class="text">' + this.value.replace(/\n/g, '</span></li><li class="response"><span class="text">') + '</span></li>';
		document.querySelectorAll('.response').forEach(function (el) {
			el.addEventListener('click', e => {
				e.target.classList.toggle('checked');
			});
		});
	} else {
		document.querySelector('.player').style.display = 'none';
		document.getElementById('answers').style.display = 'none';
	}

	localStorage.setItem('answers', JSON.stringify(this.value));
}

export function updateUsername(key) {
	if (key.keyCode === 13) {
		key.preventDefault();
		return updateUsernameBtn();
	}
}

export function updateUsernameBtn() {
	CONFIG.player.username = document.getElementById('username_edit').value; // TODO: it used to defalut to 'd', is it some kind of default char?
	CONFIG.region = document.getElementById('region_edit').value;

	localStorage.setItem('username', CONFIG.player.username);
	localStorage.setItem('region', CONFIG.region);

	getPlayerInfo(CONFIG.player.username)
		.then(data => {
			CONFIG.player.id = data.player.id;
			CONFIG.player.info = data;

			let eventChange = new Event('change');

			for (let el in document.getElementsByClassName('actor_select')) {
				if (el.options && el.options[el.selectedIndex].text === '[Docete]') {
					el.dispatchEvent(eventChange);
				}
			}

			let query = document.getElementById('avatar_edit');
			if (query.options[query.selectedIndex].text === '[Docete]') {
				query.dispatchEvent(eventChange);
			}
		})
		.catch(error => {
			console.warn("Unable to fetch player info:", error);

			CONFIG.player.id = undefined;
			CONFIG.player.info = undefined;
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
