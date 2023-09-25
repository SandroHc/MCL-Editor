export const MESSAGES = {
	'en': {
		// Miscellaneous
		version: 'Version ' + APP_VERSION,
		title: 'MyCandyLove Editor',
		description: 'MyCandyLove Editor, an offline fanfic creation tool for MyCandyLove.',
		welcome: 'Welcome to the unofficial scene editor of My Candy Love! We hope you have fun! You can publish your creations under the tag <a href="https://tumblr.com/tagged/mcleditor" rel="noopener">#mcleditor</a>. Tool updated by <a href="https://sandrohc.net" target="_blank" rel="noopener">SandroHc</a>.',
		legal: 'All images belong to <a href="http://beemoov.com" target="_blank" rel="noopener noreferrer">Beemoov</a>',
		view_result: 'View Result',
		file: 'File',

		// Tabs
		account: 'Account',
		dialogue: 'Dialogue',
		place: 'Place',
		characters: 'Characters',

		// Account
		region: 'Region',
		username: 'Name',
		username_placeholder: 'Username (NOT your e-mail)',
		change_avatar: 'Load Avatar',

		// Dialogue
		avatar: 'Avatar',
		characters_bubble_label: 'Dialogue bubble',
		characters_bubble: 'Dialogue bubble',
		answers_label: 'Answers',
		answers: 'Answers (ENTER to separate)',
		answers_default: 'Welcome to the MyCandyLove editor!',
		love_level: 'Love Level',

		// Place
		places: 'Background',

		// Characters
		character: 'Character',
		use_sucrette: 'Use File',

		// Settings
		language: 'Language',
		cache: 'Cache',
		clear_actors: 'Clear Characters & Place',
		clear_cache: 'Clear Everything'
	},
	'pt': {
		// Miscellaneous
		version: 'Versão ' + APP_VERSION,
		title: 'Amor Doce | MyCandyLove Editor',
		description: 'MyCandyLove Editor, uma ferramenta de criação de fanfics para o jogo Amor Doce.',
		welcome: 'Bem-vindo ao editor não oficial do Amor Doce! Esperemos que você se divirta! Você pode publicar as suas criações em <a href="https://tumblr.com/tagged/mcleditor" rel="noopener">#mcleditor</a>. Atualizado por <a href="https://sandrohc.net" target="_blank" rel="noopener">SandroHc</a>.',
		legal: 'Todas as imagens pertencem a <a href="http://beemoov.com" target="_blank" rel="noopener noreferrer">Beemoov</a>',
		view_result: 'Ver Resultado',
		file: 'Ficheiro',

		// Tabs
		account: 'Conta',
		dialogue: 'Diálogo',
		place: 'Lugar',
		characters: 'Personagens',

		// Account
		region: 'Região',
		username: 'Nome',
		username_placeholder: 'Nome de usuário (NÃO o seu e-mail)',
		change_avatar: 'Carregar Avatar',

		// Dialogue
		avatar: 'Avatar',
		characters_bubble_label: 'Bolha de fala',
		characters_bubble: 'Bolha de fala',
		answers_label: 'Respostas',
		answers: 'Respostas (ENTER para separar)',
		answers_default: 'Bem-vindo ao editor do Amor Doce!',
		love_level: 'Barra do Amor',

		// Place
		places: 'Fundo',

		// Characters
		character: 'Personagem',
		use_sucrette: 'Usar Ficheiro',

		// Settings
		language: 'Idioma',
		cache: 'Cache',
		clear_actors: 'Limpar Personagens & Lugar',
		clear_cache: 'Limpar Tudo'
	}
}


const DEFAULT_LANGUAGE = 'en';
const LANGUAGES = {
	en: { name: 'English' },
	pt: { name: 'Português' },
};

export let lang = getLang();
export let messages = lang in MESSAGES ? MESSAGES[lang] : MESSAGES[DEFAULT_LANGUAGE];

export function init() {
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
	let language = localStorage.getItem('lang');

	if (!language && URLSearchParams) {
		language = new URLSearchParams(window.location.search).get('lang');
	}

	if (!language) {
		language = (navigator.languages && navigator.languages[0])
			|| navigator.language
			|| navigator.userLanguage;
	}

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

	gtag('event', 'changed_language', {
		'event_category': 'language',
		'value': selected
	});

	localStorage.setItem('lang', selected);
	window.location.reload();
}
