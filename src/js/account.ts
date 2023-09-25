import { getPlayerInfo } from './util/api'
import { apply as bootstrapAvatar } from './avatars.js';
import { updateDocete as bootstrapCharacter } from './characters.js';
import { getCurrentLanguage } from './lang';

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

const DEFAULT_REGION = getCurrentLanguage() === 'pt' ? REGIONS.br : REGIONS.us;
const DEFAULT_PLAYER = {
	username: '',
	data: null,
	avatar: null,
};

export let region = DEFAULT_REGION;
export let player = DEFAULT_PLAYER;

export function loadAccount() {
	loadRegion();
	loadUsername();
	console.debug('Loaded account', { username: player.username, region: region.id });

	document.getElementById('username-submit')!.addEventListener('click', submittedUsername);
	document.getElementById('region-edit')!.addEventListener('change', changedRegion);
}

function loadRegion() {
	let storedRegion = localStorage.getItem('region') || '';
	region = storedRegion in REGIONS ? REGIONS[storedRegion] : DEFAULT_REGION;

	let regions = document.getElementById('region-edit')!;
	for (const data of Object.values(REGIONS)) {
		let option = document.createElement('option');
		option.value = data.id;
		option.selected = data.id === region.id;
		option.textContent = data.name + ' — ' + data.link;

		regions.appendChild(option);
	}

	M.FormSelect.init(regions);
}

function changedRegion() {
	region = REGIONS[this.value];
	persistRegion();
}

function loadUsername() {
	try {
		const storedPlayer = localStorage.getItem('player');
		if (storedPlayer) {
			player = JSON.parse(storedPlayer);
		}
		if (!player) {
			player = DEFAULT_PLAYER;
		}
	} catch (e) {
		player = DEFAULT_PLAYER;
	}

	if (player.username) {
		const usernameEditor = document.getElementById('username-edit')! as HTMLInputElement;
		usernameEditor.value = player.username;

		// Load cached data
		if (!player.data) {
			loadPlayerData();
		}
	}
}

export function persistPlayerData() {
	if (player) {
		localStorage.setItem('player', JSON.stringify(player));
	} else {
		localStorage.removeItem('player');
	}
}

function persistRegion() {
	if (region) {
		localStorage.setItem('region', region.id);
	} else {
		localStorage.removeItem('region');
	}
}

function submittedUsername() {
	player.username = document.getElementById('username-edit')!.value;
	persistPlayerData();

	console.info('Loading avatar for:', player.username);

	// Load newest data
	loadPlayerData();
}

function loadPlayerData() {
	getPlayerInfo(player.username)
		.then(data => {
			console.debug("Player data", data);
			player.data = data;
			persistPlayerData();

			bootstrapCharacter();
			bootstrapAvatar();
		})
		.catch(error => console.warn("Unable to fetch player info:", error));
}
