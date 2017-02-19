languages = {}
languages['pt'] = { name: 'Português' }
languages['en'] = { name: 'English' }

get_lang = () ->
	language = get_config('lang') ||
		navigator.languages && navigator.languages[0] ||
		navigator.language ||
		navigator.userLanguage

	# Strip the language variation.
	# e.g. "pt-BR" is converted to "pt"
	language = language.split('-')[0]

	# Check if the language is available. If not, use the default one
	if languages[language] == undefined
		language = CONFIG.default_lang

	return language


load_lang = (lang) ->
	set_config('lang', lang)

	el = document.createElement 'script'
	el.setAttribute('src', 'dist/js/lang.' + lang + '.js')
	el.onload = () ->
		console.log "Loaded language '" + get_lang() + "'!"
		document.body.innerHTML = vegito(document.body.innerHTML, LANG)
		init()

	document.head.appendChild el


populate_lang = ->
	language = get_lang()

	select = document.querySelector('#lang_edit')
	for own lang of languages
		el = document.createElement('option')
		el.textContent = languages[lang].name
		el.value = lang
		el.selected = if lang == language then 'true' else undefined
		select.appendChild el

	$(select).material_select()


update_lang = ->
	lang_selected = document.querySelector('#lang_edit').value

	if lang_selected != get_lang()
		set_config('lang', lang_selected)
		window.location.reload()


# Load the default language file
load_lang(get_lang())