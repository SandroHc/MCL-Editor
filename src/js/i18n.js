import { CONFIG, getConfig, setConfig } from '@/config'
import { init } from '@/index';
import { LANG } from "@/lang.en";

export let loaded = LANG;

const languages = {
	pt: { name: 'Português' },
	en: { name: 'English' },
};

// TODO: execute in index.js
loadLang(getLang());



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

export function loadLang(lang) {
	setConfig('lang', lang);

	console.warn("LOADING LANG " + lang);

	import(`./lang.${lang}.js`).then(module => {
		console.warn("LOADED LANG " + lang, module.LANG);
		loaded = module.LANG;
		document.body.innerHTML = vegito(document.body.innerHTML, loaded);
	});

	init();
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
