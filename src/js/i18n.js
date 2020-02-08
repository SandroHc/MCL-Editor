import { CONFIG, getConfig, setConfig } from '@/config'

const languages = {
	pt: { name: 'Português' },
	en: { name: 'English' },
};

export let loaded = require(`./lang/${getLang()}.js`).messages;

export function getLang() {
	let language = getConfig('lang')
		|| (navigator.languages && navigator.languages[0])
		|| navigator.language
		|| navigator.userLanguage;

	// Strip the language variation.
	// e.g. "pt-BR" is converted to "pt"
	language = language.split('-')[0];

	// Check if the language is available. If not, use the default one
	if (languages[language] === undefined) {
		language = CONFIG.default_lang;
	}

	return language;
}

export function populateLang() {
	let language = getLang();
	let select = document.getElementById('lang_edit');

	for (let lang in languages) {
		let el = document.createElement('option');
		el.textContent = languages[lang].name;
		el.value = lang;
		el.selected = lang === language ? 'true' : void 0;
		select.appendChild(el);
	}
}

export function updateLang() {
	let selected = document.getElementById('lang_edit').value;
	if (selected !== getLang()) {
		setConfig('lang', selected);
		return window.location.reload();
	}
}
