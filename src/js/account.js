import { getPlayerInfo } from "./util/api";

const REGIONS = {
	br: { id: 'br', link: 'amordoce.com', name: 'Brazil' },
	us: { id: 'us', link: 'mycandylove.com', name: 'USA' },
	de: { id: 'de', link: 'sweetamoris.de', name: 'Germany' },
	es: { id: 'es', link: 'corazondemelon.es', name: 'Spain' },
	fi: { id: 'fi', link: 'flirttistoori.com', name: 'Finland' },
	fr: { id: 'fr', link: 'amoursucre.com', name: 'France' },
	hu: { id: 'hu', link: 'csabitasboljeles.hu', name: 'Hungary' },
	it: { id: 'it', link: 'dolceflirt.it', name: 'Italy' },
	mx: { id: 'mx', link: 'corazondebombon.com', name: 'Mexico' },
	pl: { id: 'pl', link: 'slodkiflirt.pl', name: 'Poland' },
	ro: { id: 'ro', link: 'sweetflirt.ro', name: 'Romania' },
	ru: { id: 'ru', link: 'sladkiiflirt.ru', name: 'Russia' },
	tr: { id: 'tr', link: 'askito-m.com', name: 'Turkey' },
	uk: { id: 'uk', link: 'sweetcrush.co.uk', name: 'United Kingdom' },
};

const DEFAULT_REGION = REGIONS.br;
const DEFAULT_PLAYER = {
	username: '',
	data: undefined,
};

export let region = undefined;
export let player = undefined;

export function init() {
	loadRegions();
	loadUsername();
	console.debug('Loaded account', { username: player.username, region: region.id });

	document.getElementById('username-edit').addEventListener('change', changedUsername);
	document.getElementById('username-submit').addEventListener('keyup', submittedUsername);

	document.getElementById('region-edit').addEventListener('change', changedRegion);
}

function loadUsername() {
	// TODO
	let player2 = JSON.parse(localStorage.getItem('player')) || DEFAULT_PLAYER;
	player = DEFAULT_PLAYER;
	player.username = player2.username;

	if (player.username) {
		document.getElementById('username-edit').value = player.username;
		document.getElementById('username-submit').dispatchEvent(new Event('click'));

		if (player.data) {
			// Bootstrap character/avatar with cached info
		}

		// Load newest info
		getPlayerInfo(player.username)
			.then(data => {
				console.debug("Player data", data);
				player.data = data;
				persistPlayerData();

				// Update character/avatar with newest info

				// TODO
				// for (let el in document.getElementsByClassName('actor_select')) {
				// 	if (el.options && el.options[el.selectedIndex].text === '[Docete]') {
				// 		el.dispatchEvent(new Event('change'));
				// 	}
				// }
				//
				// let query = document.getElementById('avatar-edit');
				// if (query.options[query.selectedIndex].text === '[Docete]') {
				// 	query.dispatchEvent(new Event('change'));
				// }
			})
			.catch(error => {
				console.warn("Unable to fetch player info:", error);
				player.data = undefined;
			});
	}
}

function loadRegions() {
	let id = localStorage.getItem('region');
	region = REGIONS[id] || DEFAULT_REGION;

	let $el = document.getElementById('region-edit');
	for (id in REGIONS) {
		let obj = REGIONS[id];

		let $option = document.createElement('option');
		$option.value = obj.id;
		$option.selected = obj.id === region.id;
		$option.textContent = obj.name + ' — ' + obj.link;

		$el.appendChild($option);
	}

	M.FormSelect.init($el);
}

function changedRegion() {
	region = REGIONS[this.value];
	persistRegion();
}

function changedUsername(e) {
	player.username = this.value;
	persistPlayerData();

	debugger;

	// if (key.keyCode === 13) {
	// 	key.preventDefault();
	// 	submittedUsername();
	// }
}

export function persistPlayerData() {
	localStorage.setItem('player', JSON.stringify(player));
}

function persistRegion() {
	if (region) {
		localStorage.setItem('region', region.id);
	} else {
		localStorage.removeItem('region');
	}
}

function submittedUsername() {
	console.warn("LOAD AVATAR");

	getPlayerInfo(region, player.username)
		.then(data => {
			player.data = data;

			for (let el in document.getElementsByClassName('actor_select')) {
				if (el.options && el.options[el.selectedIndex].text === '[Docete]') {
					el.dispatchEvent(new Event('change'));
				}
			}

			let query = document.getElementById('avatar-edit');
			if (query.options[query.selectedIndex].text === '[Docete]') {
				query.dispatchEvent(new Event('change'));
			}
		})
		.catch(error => {
			console.warn("Unable to fetch player info:", error);
			player.data = undefined;
		});
}
