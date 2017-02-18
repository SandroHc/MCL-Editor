languages = {}
languages['pt'] = { name: 'Português' }
languages['en'] = { name: 'English' }

get_lang = () ->
	language = get_cookie('lang') ||
		navigator.languages && navigator.languages[0] ||
		navigator.language ||
		navigator.userLanguage

	# Strip the language variation.
	# e.g. "pt-BR" is converted to "pt"
	language = language.split '-'

	# Check if the language is available. If not, use the default one
	if languages[language] == undefined
		language = CONFIG.default_lang

	return language


current_lang = undefined

load_lang = (lang) ->
	current_lang = lang
	set_cookie('lang', lang)

	el = document.createElement 'script'
	el.setAttribute('src', 'dist/js/lang.' + lang + '.js')
	el.onload = () ->
		console.log "Loaded language '" + current_lang + "'!"
		document.body.innerHTML = vegito(document.body.innerHTML, LANG)
		init()

	document.head.appendChild el


# Load the default language file
load_lang(get_lang())