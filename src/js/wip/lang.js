
const DEFAULT_LANGUAGE = 'pt';
const LANGUAGES = {
	pt: { name: 'Português' },
	en: { name: 'English' },
};

export let messages = require(`../lang/${getLang()}.js`).messages;

export function load() {
	loadList();

	document.getElementById('lang-edit').addEventListener('change', changedLang);
	document.getElementById('lang-edit').addEventListener('keyup',  changedLang);
}

function loadList() {
	let language = getLang();
	let $el = document.getElementById('lang-edit');

	for (let lang in LANGUAGES) {
		let $option = document.createElement('option');
		$option.value = lang;
		$option.textContent = LANGUAGES[lang].name;
		$option.selected = lang === language;

		$el.appendChild($option);
	}

	M.FormSelect.init($el);
}

function getLang() {
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

function changedLang() {
	let selected = document.getElementById('lang-edit').value;
	if (selected === getLang()) {
		return;
	}

	localStorage.setItem('lang', selected);
	window.location.reload();
}
