const DEFAULT_LANGUAGE = 'pt';
const LANGUAGES = {
	pt: { name: 'Português' },
	en: { name: 'English' },
};

export let loaded = require(`./lang/${getLang()}.js`).messages;

export function getLang() {
	let language = localStorage.getItem('lang')
		|| (navigator.languages && navigator.languages[0])
		|| navigator.language
		|| navigator.userLanguage;

	// Strip the language variation.
	// e.g. "pt-BR" is converted to "pt"
	language = language.split('-')[0];

	// Check if the language is available. If not, use the default one
	if (LANGUAGES[language] === undefined) {
		language = DEFAULT_LANGUAGE;
	}

	return language;
}

export function populateLang() {
	let language = getLang();
	let select = document.getElementById('lang_edit');

	for (let lang in LANGUAGES) {
		let el = document.createElement('option');
		el.textContent = LANGUAGES[lang].name;
		el.value = lang;
		el.selected = lang === language ? 'true' : void 0;
		select.appendChild(el);
	}
}

export function updateLang() {
	let selected = document.getElementById('lang_edit').value;
	if (selected !== getLang()) {
		localStorage.setItem('lang', selected);
		return window.location.reload();
	}
}
