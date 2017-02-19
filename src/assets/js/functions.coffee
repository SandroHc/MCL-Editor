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


drag = false
offsetX = 0
offsetY = 0
startX = 0
startY = 0
highest_zIndex = 0


set_config = (key, value) ->
	localStorage.setItem(key, value);
	# console.log 'SET CONFIG | ' + key + ' = ' + value


get_config = (key, default_value = undefined) ->
	return localStorage.getItem(key) || default_value


drag_start = (e) ->
	e = e or window.event
	if e.target.className.indexOf('drag') == -1
		return true

	if !e.target
		e.target = e.srcElement # IE uses srcElement, others use target
		e.button--

	if e.button != 0 # Only process left-click
		return true

	if e.preventDefault
		e.preventDefault()

	# Calculate event X, Y coordinates
	offsetX = e.clientX
	offsetY = e.clientY

	drag = e.target
	drag.onmousemove = drag_move

	# Default positions
	if !e.target.style.left
		e.target.style.left = '0px'
	if !e.target.style.bottom
		e.target.style.bottom = '0px'

	# Store initial position
	startX = parseInt(e.target.style.left)
	startY = parseInt(e.target.style.bottom)

	highest_zIndex++
	e.target.style.zIndex = highest_zIndex

	false


drag_move = (e) ->
	e = e or window.event
	if !e.target
		e.target = e.srcElement # IE uses srcElement, others use target

	if !drag
		return
	is_pnj = drag.className.indexOf('actor') != -1
	e.target.style.left = startX + e.clientX - offsetX + 'px'
	if !is_pnj or e.shiftKey
		e.target.style.bottom = startY - (e.clientY) + offsetY + 'px'
	false


drag_stop = (e) ->
	e = e or window.event
	if !e.target
		e.target = e.srcElement # IE uses srcElement, others use target

	drag = null
	document.onmousemove = null
	return


double_click = (e) ->
	e = e or window.event
	e.target = e.target or e.srcElement
	if e.target.className.indexOf('actor') == -1
		return true
	e.target.classList.toggle 'flipX'


load_from_file = (file_in, img_out, bg_out) ->
	file = document.getElementById(file_in)
	if !file.files or !file.files.length
		console.log 'No file selected'
		alert 'Seleciona primeiro o ficheiro, baka!'
		return

	if !FileReader
		console.log 'No support for FileReader'
		return

	fr = new FileReader
	fr.onload = ->
		if img_out
			document.querySelector(img_out).src = fr.result
		if bg_out
			console.log document.querySelector(bg_out)
			console.log fr.result
			document.querySelector(bg_out).style.backgroundImage = 'url(' + fr.result + ')'

	fr.readAsDataURL file.files[0]

load_cookies = () ->
	load_region()
	load_username()

load_region = () ->
	CONFIG.region = get_config('region', CONFIG.default_region)

	console.log 'REGION | ' + CONFIG.region
#	document.querySelector('#region_edit option[value="' + CONFIG.region + '"]').selected = true

load_username = () ->
	CONFIG.player.username = get_config('username', '')

	console.log 'USERNAME | ' + CONFIG.player.username
	document.querySelector('#username_edit').value = CONFIG.player.username
	document.querySelector('#username_submit').dispatchEvent new Event('click')


get_player_info = (username, callback) ->
	if !username
		callback(null)

	$.ajax
# API: http://api2.amordoce.com/v2/profile/find/username
		url: "https://mcl.sandrohc.net/" + regions[CONFIG.region].id + "/v2/profile/find/" + username,
		headers:
			"X-Beemoov-Application": 'anonymous',
# FIXME Credentials only accepted on the BR server. You don't have to be logged in to see profiles, so there must be a way to bypass this
			"X-Beemoov-Signature": 'e33b9ed89eeee95172d6db8a8143d660c9568aa9',
			"X-Beemoov-Timestamp": '1487082505641'
		error: (jqXHR, textStatus, errorThrown) ->
			console.log "Error while fetching player info"
			console.log errorThrown
			callback(null)
		success: (data) ->
			callback(data.data)
	return


get_player_avatar = (id, callback) ->
	$.ajax
# API: http://api2.amordoce.com/v2/avatar/id
		url: "https://mcl.sandrohc.net/" + regions[CONFIG.region].id + "/v2/avatar/" + id,
		error: (jqXHR, textStatus, errorThrown) ->
			console.log "Error while fetching player avatar"
			console.log errorThrown
		success: (data) ->
			callback(data.data)
	return


draw_avatar_dest = null
draw_avatar_portrait = null

draw_avatar = (is_portrait, dest) ->
	if !CONFIG.player.avatar
		if !CONFIG.player.id
			if !CONFIG.player.info
				if CONFIG.player.username
# If the player is set but there is no player info, try the outdated links
					timestamp = (new Date).getTime()

					dest.src = 'http://avatars.' + regions[CONFIG.region].link + '/' + (if is_portrait then 'face' else 'full') + '/' + CONFIG.player.username + '.' + timestamp + '.png'
				else
					dest.src = 'assets/img/' + (if is_portrait then 'face' else 'body') + '_unknown.png'
				return
			CONFIG.player.id = CONFIG.player.info.player.id


		draw_avatar_dest = dest
		draw_avatar_portrait = is_portrait

		get_player_avatar CONFIG.player.id, (data) ->
			CONFIG.player.avatar = data
			draw_avatar draw_avatar_portrait, draw_avatar_dest
		# Wait until the callback is finished before processing the avatar
		return


	site = 'http://assets.' + regions[CONFIG.region].link + '/'
	type = if is_portrait then 'portrait' else 'normal'
	bg = ''

	add_comma = false
	add_clothes = (data, color, clothe_type) ->
		if add_comma
			bg += ','
		add_comma = true

		bg += 'url(' + site + clothe_type + '/web/' + type + '/' + data.id + '-' + data.security
		if color
			bg += '_' + color.id + '-' + color.security
		bg += '.png)'

	avatar = CONFIG.player.avatar

	for i in [avatar.clothes.length-1 .. 0]
		add_clothes(avatar.clothes[i], null, 'clothe')

	add_clothes(avatar.avatar.headAccessory,	null, 'avatarpart')
	add_clothes(avatar.avatar.mouthType,		null, 'avatarpart')
	add_clothes(avatar.avatar.eyebrowsType,		avatar.avatar.hairColor, 'avatarpart')
	add_clothes(avatar.avatar.eyeType,			avatar.avatar.eyeColor, 'avatarpart')
	add_clothes(avatar.avatar.hairType,			avatar.avatar.hairColor, 'avatarpart')
	add_clothes(avatar.avatar.bodyType,			null, 'avatarpart')

	dest.src = 'assets/img/' + (if is_portrait then 'face' else 'body') + '_placeholder.png'
	dest.style.backgroundImage = bg

	return

sort_assets = () ->
	comparator = (a, b) ->
		a = a.name.toUpperCase()
		b = b.name.toUpperCase()
		return a < b ? 1 : a > b ? -1 : 0

	# ASSETS.scenes.sort comparator
	ASSETS.avatars.sort comparator
	ASSETS.emotions.sort comparator

populate_regions = () ->
	select = document.querySelector('#region_edit')
	regions.forEach (e, i) ->
		el = document.createElement('option')
		el.textContent = e.name + ' — ' + e.link
		el.value = i
		el.selected = if i == parseInt(CONFIG.region, 10) then 'true' else undefined
		select.appendChild el

	$(select).material_select()

populate_scenes = (selected) ->
	select = document.querySelector('#scene_edit')
	ASSETS.scenes.forEach (e, i) ->
		el = document.createElement('option')
		el.textContent = e.name
		el.value = i
		el.selected = if e.name == selected then 'true' else undefined
		select.appendChild el

	$(select).material_select()

populate_scenes_sub = (index, input) ->
	while input.options.length > 0 # Clear all options
		input.remove 0

	scene = ASSETS.scenes[index]
	scene.variations.forEach (e, i) ->
		# console.log 'VAR | ' + e.name
		el = document.createElement('option')
		el.textContent = e.name
		el.value = i
		el.dataset.scene = index
		input.appendChild el

	$(input).material_select()
	input.dispatchEvent new Event('change')


populate_avatars = (selected) ->
	select = document.querySelector('#avatar_edit')
	ASSETS.avatars.forEach (e, i) ->
		el = document.createElement('option')
		el.textContent = e.name
		el.value = i
		el.dataset.checksum = e.checksum
		el.selected = if e.name == selected then 'true' else undefined
		select.appendChild el

	$(select).material_select()


populate_emotions = (inputs, defaults) ->
	inputs.forEach (input_id, input_index) ->
		input = document.querySelector(input_id)
		ASSETS.emotions.forEach (e, i) ->
			el = document.createElement('option')
			el.textContent = e.name
			el.value = i
			el.selected = if e.name == defaults[input_index] then 'true' else undefined
			input.appendChild el

		$(input).material_select()


populate_emotions_sub = (index, input) ->
	while input.options.length > 0 # Clear all options
		input.remove 0

	emotion = ASSETS.emotions[index]
	emotion.variations.forEach (e, i) ->
		# console.log("VAR | " + variation.name);
		el = document.createElement('option')
		el.textContent = e.name
		el.value = i
		el.dataset.emotion = index
		input.appendChild el

	$(input).material_select()
	input.dispatchEvent new Event('change')