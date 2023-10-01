import { getPlayerInfo } from './util/api'
import { apply as bootstrapAvatar } from './avatars.js';
import { updateDocete as bootstrapCharacter } from './characters.js';
import { getCurrentLanguage } from './lang';

const REGIONS = {
	us: { id: 'us', link: 'mycandylove.com', name: 'My Candy Love', lang: 'English - United States' },
	uk: { id: 'uk', link: 'sweetcrush.co.uk', name: 'Sweet Crush', lang: 'English - United Kingdom' },
	pt: { id: 'pt', link: 'amordoce.com', name: 'Amor Doce', lang: 'Portuguese' },
	fr: { id: 'fr', link: 'amoursucre.com', name: 'Amour Sucré', lang: 'French' },
	tr: { id: 'tr', link: 'askito-m.com', name: 'Askitom', lang: 'Turkish' },
	es: { id: 'es', link: 'corazondemelon.es', name: 'Corazón de Melón', lang: 'Spanish' },
	mx: { id: 'mx', link: 'corazondebombon.com', name: 'Corazón de Bombón', lang: 'Mexican' },
	hu: { id: 'hu', link: 'csabitasboljeles.hu', name: 'Csábításból jeles', lang: 'Hungarian' },
	ru: { id: 'ru', link: 'sladkiiflirt.ru', name: 'Cладкий флирт', lang: 'Russian' },
	it: { id: 'it', link: 'dolceflirt.it', name: 'Dolce Flirt', lang: 'Italian' },
	de: { id: 'de', link: 'sweetamoris.de', name: 'Sweet Amoris', lang: 'German' },
	ro: { id: 'ro', link: 'sweetflirt.ro', name: 'Sweet Flirt', lang: 'Romanian' },
	pl: { id: 'pl', link: 'slodkiflirt.pl', name: 'Słodki Flirt', lang: 'Polish' },
};

const LANG = getCurrentLanguage();
const DEFAULT_REGION = LANG in REGIONS ? REGIONS[LANG] : REGIONS.us;
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
		option.textContent = `${data.name} — ${data.link} (${data.lang})`;

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
