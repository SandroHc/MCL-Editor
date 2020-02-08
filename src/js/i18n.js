import { CONFIG, getConfig, setConfig } from '@/config'
import { messages } from "@/lang/lang.en";
import { init } from '@/index';

export let loadedLang = 'en';
export let loaded = messages;

const languages = {
	pt: { name: 'Português' },
	en: { name: 'English' },
};

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

	if (lang !== loadedLang) {
		import(`./lang/${lang}.js`).then(module => {
			loaded = module.messages;
			document.body.innerHTML = vegito(document.body.innerHTML, loaded);
			init();
		});
	} else {
		document.body.innerHTML = vegito(document.body.innerHTML, loaded);
		init();
	}
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
