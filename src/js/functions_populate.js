// TODO move to respective files
import { avatars } from './assets/avatars';

export function populateAvatars() {
	let selected = JSON.parse(localStorage.getItem('avatar')) || '[Docete]';

	let select = document.getElementById('avatar_edit');
	avatars.forEach(function (e, i) {
		let el = document.createElement('option');
		el.textContent = e.name;
		el.value = i;
		el.dataset.checksum = e.checksum;
		el.selected = e.name === selected ? 'true' : undefined;

		select.appendChild(el);
	});

	select.dispatchEvent(new Event('change'));
}
