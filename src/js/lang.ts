export const MESSAGES = {
	'en': {
		// Miscellaneous
		version: 'Version ' + APP_VERSION,
		build_date: 'Built on ' + APP_BUILD_DATE,
		title: 'MyCandyLove Editor',
		description: 'MyCandyLove Editor, create fanfics and browse through the My Candy Love illustrations!',
		welcome: 'Welcome to the unofficial scene editor of My Candy Love! We hope you have fun!',
		legal: 'All assets belong to <a href="http://beemoov.com" target="_blank" rel="noreferrer">Beemoov</a>',
		report_problem: 'Report a problem',
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
		add_character: 'Add Character',
		character_details: '[Character{{id}}]\n{{name}}\n\n- Drag with SHIFT to move up and down.\n- Double-click to flip.',

		// Settings
		language: 'Language',
		cache: 'Cache',
		clear_characters: 'Reset Characters',
		clear_cache: 'Reset Everything'
	},
	'pt': {
		// Miscellaneous
		version: 'Versão ' + APP_VERSION,
		build_date: 'Versão criada em ' + APP_BUILD_DATE,
		title: 'Amor Doce | MyCandyLove Editor',
		description: 'MyCandyLove Editor, crie fanfics e explore as ilustrações de Amor Doce!',
		welcome: 'Bem-vindo ao editor não oficial do Amor Doce! Esperemos que você se divirta!',
		legal: 'Todas as imagens pertencem a <a href="http://beemoov.com" target="_blank" rel="noreferrer">Beemoov</a>',
		report_problem: 'Reportar problema',
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
		add_character: 'Adicionar Personagem',
		character_details: '[Personagem{{id}}]\n{{name}}\n\n- Arraste enquanto pressiona SHIFT para mover livremente.\n- Duplo-clique para espelhar.',

		// Settings
		language: 'Idioma',
		cache: 'Cache',
		clear_characters: 'Limpar Personagens',
		clear_cache: 'Limpar Tudo'
	}
}


const DEFAULT_LANGUAGE = 'en';
const LANGUAGES = {
	en: { name: 'English' },
	pt: { name: 'Português' },
};

export let selectedLanguage = getCurrentLanguage();
export let messages = MESSAGES[selectedLanguage];

export function loadLang() {
	loadList();

	const languageSelector = document.getElementById('lang-edit')!;
	languageSelector.addEventListener('change', updateLang);
	languageSelector.addEventListener('keyup',  updateLang);
}

function loadList() {
	const languageSelector = document.getElementById('lang-edit')!;

	for (const [lang, data] of Object.entries(LANGUAGES)) {
		const option = document.createElement('option');
		option.value = lang;
		option.textContent = data.name;
		option.selected = lang === selectedLanguage;

		languageSelector.appendChild(option);
	}

	M.FormSelect.init(languageSelector);
}

export function getCurrentLanguage() {
	function findLanguagePreference() {
		const stored = localStorage.getItem('lang');
		if (stored) {
			return stored;
		}

		const searchParams = URLSearchParams && new URLSearchParams(window.location.search).get('lang');
		if (searchParams) {
			return searchParams;
		}

		const urlParts = window.location.pathname.split('/');
		const urlLang = urlParts && urlParts[urlParts.length - 1];
		if (urlLang && urlLang.length === 2) {
			return urlLang;
		}

		const browserLang = (navigator.languages && navigator.languages[0]) || navigator.language;
		if (browserLang) {
			return browserLang;
		}

		return DEFAULT_LANGUAGE;
	}

	let language = findLanguagePreference();

	// Strip the language variant - e.g. "pt-BR" is converted to "pt"
	language = language ? language.split('-')[0] : '';

	// Check if the language is available. If not, use the default one
	if (!(language in LANGUAGES)) {
		language = DEFAULT_LANGUAGE;
	}

	return language;
}

function updateLang() {
	const languageSelector = document.getElementById('lang-edit')! as HTMLSelectElement;
	const newLanguage = languageSelector.value;
	console.debug(`Changing language from ${selectedLanguage} to ${newLanguage}`);

	gtag('event', 'changed_language', {
		'event_category': 'language',
		'value': newLanguage
	});

	localStorage.setItem('lang', newLanguage);

	if (newLanguage !== selectedLanguage) {
		window.location.reload();
	}
}
