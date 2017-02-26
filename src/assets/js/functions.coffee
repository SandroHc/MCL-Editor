Storage.prototype.setObject = (key, value) ->
	this.setItem(key, JSON.stringify(value))

Storage.prototype.getObject = (key) ->
	return (value = this.getItem(key)) && JSON.parse(value)

Array.prototype.clean = (deleteValue) ->
	for value, index in this
		if value == deleteValue
			this.splice(index, 1)
			index--
	return this

set_config = (key, value) ->
	# console.log 'SET CONFIG | ' + key + ' = ' + value
	localStorage.setItem(key, value);


get_config = (key, default_value = undefined) ->
	return localStorage.getItem(key) || default_value


clear_configs = ->
	localStorage.clear()
	window.location.reload()


load_from_file = (file_in, img_out, bg_out) ->
	file = document.getElementById(file_in)
	if !file.files or !file.files.length
		console.log 'No file selected'
		alert 'Seleciona primeiro o ficheiro, baka!'
		return

	if !FileReader
		console.log 'FileReader not supported'
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

load_settings = () ->
	load_region()
	load_username()

load_region = () ->
	CONFIG.region = get_config('region', CONFIG.default_region)

	console.info 'Loaded REGION: ' + regions[CONFIG.region].id + ' - ' + regions[CONFIG.region].link

load_username = () ->
	CONFIG.player.username = get_config('username', '')

	console.info 'Loaded USERNAME: ' + CONFIG.player.username
	document.getElementById('username_edit').value = CONFIG.player.username
	document.getElementById('username_submit').dispatchEvent new Event('click')


get_player_info = (username, callback) ->
	if !username
		callback(null)

	timestamp = Date.now().toString()
	message = [
		'anonymous' # Private key
		'GET' # HTTP method
		'http://api2.' + regions[CONFIG.region].link + '/v2/profile/find/' + username
		timestamp
	]
	hash = CryptoJS.HmacSHA1(message.join('+'), 'anonymous')

	$.ajax
		# API: http://api2.amordoce.com/v2/profile/find/username
		url: "https://mcl.sandrohc.net/" + regions[CONFIG.region].id + "/v2/profile/find/" + username,
		headers:
			"X-Beemoov-Application": 'anonymous',
			"X-Beemoov-Signature": hash,
			"X-Beemoov-Timestamp": timestamp
		error: (jqXHR, textStatus, errorThrown) ->
			console.warn "Unable to fetch player info"
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
	avatar = CONFIG.player.avatar

	add_comma = false
	add_clothes = (data, color, clothe_type) ->
		if data.category == 'Skin'
			avatar.avatar.bodyType = data
			avatar.avatar.bodyType.category = 'CUSTOM'
			return
		if data.category == 'Wig'
			avatar.avatar.hairType.category = 'CUSTOM'

		if add_comma
			bg += ','
		add_comma = true

		bg += 'url(' + site + clothe_type + '/web/' + type + '/' + data.id + '-' + data.security
		if color
			bg += '_' + color.id + '-' + color.security
		bg += '.png)'

	# TODO Better handle special cases, like Skin and Wig
	for i in [avatar.clothes.length-1 .. 0]
		add_clothes(avatar.clothes[i], null, 'clothe')

	add_clothes(avatar.avatar.headAccessory,	null, 'avatarpart')
	add_clothes(avatar.avatar.mouthType,		null, 'avatarpart')
	add_clothes(avatar.avatar.eyebrowsType,		avatar.avatar.hairColor, 'avatarpart')
	add_clothes(avatar.avatar.eyeType,			avatar.avatar.eyeColor, 'avatarpart')

	if avatar.avatar.hairType.category == 'CUSTOM'
		console.debug 'Custom hair'
	else
		add_clothes(avatar.avatar.hairType,		avatar.avatar.hairColor, 'avatarpart')

	if avatar.avatar.bodyType.category == 'CUSTOM'
		console.debug 'Custom body'
		add_clothes(avatar.avatar.bodyType,		null, 'clothe')
	else
		add_clothes(avatar.avatar.bodyType,		null, 'avatarpart')


	dest.src = 'assets/img/' + (if is_portrait then 'face' else 'body') + '_placeholder.png'
	dest.style.backgroundImage = bg

	return

sort_assets = () ->
	comparator = (a, b) ->
		a = a.name.toUpperCase()
		b = b.name.toUpperCase()
		return if a < b then -1 else if a > b then 1 else 0

	# ASSETS.scenes.sort comparator
	ASSETS.avatars.sort comparator
	ASSETS.emotions.sort comparator

populate_regions = () ->
	select = document.getElementById('region_edit')
	regions.forEach (e, i) ->
		el = document.createElement('option')
		el.textContent = e.name + ' — ' + e.link
		el.value = i
		el.selected = if i == parseInt(CONFIG.region, 10) then 'true' else undefined
		select.appendChild el

	$(select).material_select()

populate_scenes = (selected) ->
	select = document.getElementById('scene_edit')
	ASSETS.scenes.forEach (e, i) ->
		el = document.createElement('option')
		el.textContent = e.name
		el.value = i
		el.selected = if e.name == selected then 'true' else undefined
		select.appendChild el

	$(select).material_select()
	select.dispatchEvent new Event('change')

populate_scenes_sub = (index, input) ->
	while input.options.length > 0 # Clear all options
		input.remove 0

	scene = ASSETS.scenes[index]
	scene.variations.forEach (e, i) ->
		el = document.createElement('option')
		el.textContent = e.name
		el.value = i
		el.dataset.scene = index
		input.appendChild el

	$(input).material_select()
	input.dispatchEvent new Event('change')


populate_avatars = (selected) ->
	select = document.getElementById('avatar_edit')
	ASSETS.avatars.forEach (e, i) ->
		el = document.createElement('option')
		el.textContent = e.name
		el.value = i
		el.dataset.checksum = e.checksum
		el.selected = if e.name == selected then 'true' else undefined
		select.appendChild el

	$(select).material_select()