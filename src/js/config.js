export const regions = [
	{ id: 'br', link: 'amordoce.com', name: 'Brazil' },
	{ id: 'us', link: 'mycandylove.com', name: 'USA' },
	{ id: 'de', link: 'sweetamoris.de', name: 'Germany' },
	{ id: 'es', link: 'corazondemelon.es', name: 'Spain' },
	{ id: 'fi', link: 'flirttistoori.com', name: 'Finland' },
	{ id: 'fr', link: 'amoursucre.com', name: 'France' },
	{ id: 'hu', link: 'csabitasboljeles.hu', name: 'Hungary' },
	{ id: 'it', link: 'dolceflirt.it', name: 'Italy' },
	{ id: 'mx', link: 'corazondebombon.com', name: 'Mexico' },
	{ id: 'pl', link: 'slodkiflirt.pl', name: 'Poland' },
	{ id: 'ro', link: 'sweetflirt.ro', name: 'Romania' },
	{ id: 'ru', link: 'sladkiiflirt.ru', name: 'Russia' },
	{ id: 'tr', link: 'askito-m.com', name: 'Turkey' },
	{ id: 'uk', link: 'sweetcrush.co.uk', name: 'United Kingdom' },
];

export const CONFIG = {
	default_lang: 'pt',
	lang: 'pt',
	default_region: '0',
	region: '0',
	player: {
		username: '',
		id: null,
		info: null,
		avatar: null
	},
	default_actor: 'Nathaniel'
};

export function setConfig(key, value) {
	localStorage.setItem(key, value);
}

export function getConfig(key, defaultValue) {
	if (defaultValue == null) {
		defaultValue = void 0;
	}
	return localStorage.getItem(key) || defaultValue;
}

export function clearConfigs() {
	localStorage.clear();
	window.location.reload();
}


Storage.prototype.setObject = function (key, value) {
	return this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
	return JSON.parse(this.getItem(key));
};

Array.prototype.clean = function (deleteValue) {
	for (let i=0; i < this.length; i++) {
		if (this[i] === deleteValue) {
			this.splice(i, 1);
			i--;
		}
	}
	return this;
};
