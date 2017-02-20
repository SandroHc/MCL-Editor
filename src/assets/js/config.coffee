regions = [
	{ id: 'br', link: 'amordoce.com', name: 'Brazil' }
	{ id: 'us', link: 'mycandylove.com', name: 'USA' }
	{ id: 'de', link: 'sweetamoris.de', name: 'Germany' }
	{ id: 'es', link: 'corazondemelon.es', name: 'Spain' }
	{ id: 'fi', link: 'flirttistoori.com', name: 'Finland' }
	{ id: 'fr', link: 'amoursucre.com', name: 'France' }
	{ id: 'hu', link: 'csabitasboljeles.hu', name: 'Hungary' }
	{ id: 'it', link: 'dolceflirt.it', name: 'Italy' }
	{ id: 'mx', link: 'corazondebombon.com', name: 'Mexico' }
	{ id: 'pl', link: 'slodkiflirt.pl', name: 'Poland' }
	{ id: 'ro', link: 'sweetflirt.ro', name: 'Romania' }
	{ id: 'ru', link: 'sladkiiflirt.ru', name: 'Russia' }
	{ id: 'tr', link: 'askito-m.com', name: 'Turkey' }
	{ id: 'uk', link: 'sweetcrush.co.uk', name: 'United Kingdom' }
]

CONFIG =
	version: '1.1.0'
	default_lang: 'pt'
	lang: this.default_lang
	default_region: '0' # Brazil
	region: this.default_region
	player: {
		username: ''
		id: null
		info: null
		avatar: null
	}
	default_actor: 'Nathaniel'
