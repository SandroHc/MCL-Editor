drag = false
offsetX = 0
offsetY = 0
startX = 0
startY = 0
highest_zIndex = 0

set_cookie = (key, val) ->
	date = new Date
	date.setDate date.getDate() + 30
	document.cookie = key + '=' + val + '; expires=' + date.toUTCString()
	console.log 'SET COOKIE | ' + key + ' = ' + val


get_cookie = (key) ->
	re = new RegExp('(?:(?:^|.*;\\s*)' + key + '\\s*\\=\\s*([^;]*).*$)|^.*$')
	document.cookie.replace re, '$1'


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

((window, document, querySelector) ->
	scriptTag = document.createElement('script')

	sites =
		br: 'amordoce.com'
		de: 'sweetamoris.de'
		es: 'corazondemelon.es'
		fi: 'flirttistoori.com'
		fr: 'amoursucre.com'
		hu: 'csabitasboljeles.hu'
		it: 'dolceflirt.it'
		mx: 'corazondebombon.com'
		pl: 'slodkiflirt.pl'
		ro: 'sweetflirt.ro'
		ru: 'sladkiiflirt.ru'
		tr: 'askito-m.com'
		uk: 'sweetcrush.co.uk'
		us: 'mycandylove.com'

	conf_region   = 'br' # Default region
	conf_username = ''

	load_cookies = () ->
		load_region()
		load_username()

	load_region = () ->
		val = get_cookie('region')
		if val
			conf_region = val

			console.log 'REGION | ' + conf_region
			querySelector('#region_edit option[value="' + conf_region + '"]').selected = true

	load_username = () ->
		val = get_cookie('username')
		if val
			conf_username = val

			console.log 'USERNAME | ' + conf_username
			querySelector('#username_edit').value = conf_username
			querySelector('#username_submit').dispatchEvent new Event('click')


	player_info = null
	player_id = null
	player_avatar = null

	get_player_info = (username, callback) ->
		if !username
			callback(null)

		$.ajax
			# API: http://api2.amordoce.com/v2/profile/find/username
			url: "https://mcl.sandrohc.net/" + conf_region + "/v2/profile/find/" + username,
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
			url: "https://mcl.sandrohc.net/" + conf_region + "/v2/avatar/" + id,
			error: (jqXHR, textStatus, errorThrown) ->
				console.log "Error while fetching player avatar"
				console.log errorThrown
			success: (data) ->
				callback(data.data)
		return


	draw_avatar_dest = null
	draw_avatar_portrait = null

	draw_avatar = (is_portrait, dest) ->
		if !player_avatar
			if !player_id
				if !player_info
					if conf_username
						# If the player is set but there is no player info, try the outdated links
						timestamp = (new Date).getTime()

						dest.src = 'http://avatars.' + sites[conf_region] + '/' + (if is_portrait then 'face' else 'full') + '/' + conf_username + '.' + timestamp + '.png'
					else
						dest.src = 'assets/img/' + (if is_portrait then 'face' else 'body') + '_unknown.png'
					return
				player_id = player_info.player.id


			draw_avatar_dest = dest
			draw_avatar_portrait = is_portrait

			get_player_avatar player_id, (data) ->
				player_avatar = data
				draw_avatar draw_avatar_portrait, draw_avatar_dest
			# Wait until the callback is finished before processing the avatar
			return


		site = 'http://assets.' + sites[conf_region] + '/'
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

		for i in [player_avatar.clothes.length-1 .. 0]
			add_clothes(player_avatar.clothes[i], null, 'clothe')

		add_clothes(player_avatar.avatar.headAccessory,	null, 'avatarpart')
		add_clothes(player_avatar.avatar.mouthType,		null, 'avatarpart')
		add_clothes(player_avatar.avatar.eyebrowsType,	player_avatar.avatar.hairColor, 'avatarpart')
		add_clothes(player_avatar.avatar.eyeType,		player_avatar.avatar.eyeColor, 'avatarpart')
		add_clothes(player_avatar.avatar.hairType,		player_avatar.avatar.hairColor, 'avatarpart')
		add_clothes(player_avatar.avatar.bodyType,		null, 'avatarpart')

		dest.src = 'assets/img/' + (if is_portrait then 'face' else 'body') + '_placeholder.png'
		dest.style.backgroundImage = bg

		return

	sort_assets = () ->
		comparator = (a, b) ->
			a = a.name.toUpperCase()
			b = b.name.toUpperCase()
			return a < b ? 1 : a > b ? -1 : 0

		# CONFIG.scenes.sort comparator
		CONFIG.avatars.sort comparator
		CONFIG.emotions.sort comparator

	populate_scenes = (inputs, defaults) ->
		inputs.forEach (input_id, input_index) ->
			input = querySelector(input_id)
			CONFIG.scenes.forEach (e, i) ->
				el = document.createElement('option')
				el.textContent = e.name
				el.value = i
				el.selected = e.name == defaults[input_index] ? 'true' : undefined
				input.appendChild el

			$(input).material_select

	populate_scenes_sub = (index, input) ->
		while input.options.length > 0 # Clear all options
			input.remove 0

		scene = CONFIG.scenes[index]
		scene.variations.forEach (e, i) ->
			# console.log 'VAR | ' + e.name
			el = document.createElement('option')
			el.textContent = e.name
			el.value = i
			el.dataset.scene = index
			input.appendChild el

		$(input).material_select()
		input.dispatchEvent new Event('change')


	populate_avatars = (inputs, defaults) ->
		inputs.forEach (input_id, input_index) ->
			input = querySelector(input_id)
			CONFIG.avatars.forEach (e, i) ->
				el = document.createElement('option')
				el.textContent = e.name
				el.value = i
				el.dataset.checksum = e.checksum
				el.selected = e.name == defaults[input_index] ? 'true' : undefined
				input.appendChild el

			$(input).material_select()


	populate_emotions = (inputs, defaults) ->
		inputs.forEach (input_id, input_index) ->
			input = querySelector(input_id)
			CONFIG.emotions.forEach (e, i) ->
				el = document.createElement('option')
				el.textContent = e.name
				el.value = i
				el.selected = e.name == defaults[input_index] ? 'true' : undefined
				input.appendChild el

			$(input).material_select()


	populate_emotions_sub = (index, input) ->
		while input.options.length > 0 # Clear all options
			input.remove 0

		emotion = CONFIG.emotions[index]
		emotion.variations.forEach (e, i) ->
			# console.log("VAR | " + variation.name);
			el = document.createElement('option')
			el.textContent = e.name
			el.value = i
			el.dataset.emotion = index
			input.appendChild el

		$(input).material_select()
		input.dispatchEvent new Event('change')


	scriptTag.addEventListener 'load', ->
		document.body.innerHTML = Mustache.render(querySelector('body').innerHTML, CONFIG)


		update_actor = ->
			sub = querySelector(@dataset.sub)
			# console.log("CHAR SELECTED | " + CONFIG.emotions[this.value].name);
			populate_emotions_sub @value, sub

		update_actor_sub = ->
			name = @options[@selectedIndex].textContent
			emotion = CONFIG.emotions[@options[@selectedIndex].dataset.emotion]
			console.log 'EMOTION SELECTED | ' + emotion.name + ' (' + name + ')'

			target = querySelector(@dataset.target)
			target.style.src = ''

			if emotion.name == '[Nada]'
				target.style.display = 'none'
				return
			else
				target.style.display = 'block'

			if emotion.name == '[Docete]'
				draw_avatar(false, target)
				# target.src = assets.body

				target.style.height = '150%'
				target.style.bottom = '-300px'
			else
				variation = emotion.variations[@value]
				target.src = 'assets/img/emotion/' + variation.id + (if variation.checksum then '-' + variation.checksum else '') + '.png' # Web: site + 'emotion/web/high/id-checksum.png'

				target.style.backgroundImage = ''
				target.style.height = '92.24138%'
				target.style.bottom = '0'
			return

		update_scene = ->
			sub = querySelector(@dataset.sub)
			# console.log("SCENE SELECTED | " + CONFIG.scenes[this.value].name);
			populate_scenes_sub @value, sub

		update_scene_sub = ->
			name = @options[@selectedIndex].textContent
			scene = CONFIG.scenes[@options[@selectedIndex].dataset.scene]
			console.log 'SCENE SELECTED | ' + scene.name + ' (' + name + ')'
			target = querySelector(@dataset.target)
			variation = scene.variations[@value]
			target.style.backgroundImage = 'url(assets/img/scene/' + variation.id + (if variation.checksum then '-' + variation.checksum else '') + '.jpg)' # Web: site + 'place/web/high/id-checksum.jpg'

		loveometer_level = ->
			querySelector('#loveometer .gauge').style.height = @value / 2 + 50 + '%'
			querySelector('#loveometer .heart-text').innerHTML = @value + '%'

		loveometer = ->
			querySelector('#loveometer').style.display = if @checked then 'block' else 'none'

		bubble = ->
			if @value != ''
				querySelector('.bubble').style.display = 'block'
				querySelector('.bubble').innerHTML = @value.replace(/\n/g, '<br>')
			else
				querySelector('.bubble').style.display = 'none'

		update_response = ->
			if @value != ''
				querySelector('.responses-wrapper').style.display = 'block'
				querySelector('.player').style.display = 'block'
				querySelector('.responses').innerHTML = '<li class="response"><span class="text">' + @value.replace(/\n/gi, '</span></li><li class="response"><span class="text">') + '</span></li>'
				document.querySelectorAll('.response').forEach (el) ->
					el.addEventListener 'click', ((e) ->
						e = e or window.event
						e.target = e.target or e.srcElement
						e.target.classList.toggle 'checked'
					), false
			else
				querySelector('.responses-wrapper').style.display = 'none'
				querySelector('.player').style.display = 'none'

		update_username_btn = ->
			conf_username = querySelector('#username_edit').value # else 'd'
			conf_region = querySelector('#region_edit').value

			set_cookie 'username', conf_username
			set_cookie 'region', conf_region

			get_player_info conf_username, (data) ->
				player_info = data

				if player_info
					player_id = player_info.player.id

				query = querySelector('#actor1_edit')
				if query.options[query.selectedIndex].text == '[Docete]'
					query.dispatchEvent eventChange

				query = querySelector('#actor2_edit')
				if query.options[query.selectedIndex].text == '[Docete]'
					query.dispatchEvent eventChange

				query = querySelector('#avatar_edit')
				if query.options[query.selectedIndex].text == '[Docete]'
					query.dispatchEvent eventChange


		update_username = (key) ->
			if key.keyCode == 13 # Press ENTER
				key.preventDefault()
				return update_username_btn()


		update_avatar = ->
			avatar = CONFIG.avatars[@value]
			el = querySelector('.player-avatar')
			el.src = ''

			if avatar.name == '[Nada]'
				el.style.display = 'none'
				return
			else
				el.style.display = 'block'

			if avatar.name == '[Docete]'
				el.style.bottom = '70px'

				draw_avatar(true, el)
			else
				el.style.bottom = '0'
				el.style.backgroundImage = ''
				el.src = 'assets/img/avatar/' + avatar.id + (if avatar.checksum then '-' + avatar.checksum else '') + '.png' # Web: http://assets.amordoce.com/npc/web/thumbnail/id-checksum.png
			return


		# Bind input events
		((elements) ->
			sort_assets()

			populate_scenes [ '#scene_edit' ], [ 'Sala de Aula A' ]
			populate_avatars [ '#avatar_edit' ], [ '[Docete]' ]
			populate_emotions [ '#actor1_edit', '#actor2_edit' ], [ 'Nathaniel', 'Castiel' ]

			for el_name of elements
				if elements.hasOwnProperty el_name
					for event of elements[el_name]
						if elements[el_name].hasOwnProperty event
							# querySelector('#' + el_name).addEventListener event, elements[el_name][event]
							$('#' + el_name).on event, elements[el_name][event]
		)
			actor1_edit:
				change: update_actor
				keyup: update_actor
			actor1_sub_edit:
				change: update_actor_sub
				keyup: update_actor_sub
			actor2_edit:
				change: update_actor
				keyup: update_actor
			actor2_sub_edit:
				change: update_actor_sub
				keyup: update_actor_sub
			scene_edit:
				change: update_scene
				keyup: update_scene
			scene_sub_edit:
				change: update_scene_sub
				keyup: update_scene_sub
			lovelevel_edit:
				input: loveometer_level
			lovelevel_visible:
				change: loveometer
			bubble_edit:
				keyup: bubble
			response_edit:
				keyup: update_response
			username_submit:
				click: update_username_btn
			username_edit:
				keyup: update_username
			avatar_edit:
				change: update_avatar
				keyup: update_avatar


		load_cookies()

		eventChange = new Event('change')
		querySelector('#scene_edit').dispatchEvent eventChange
		querySelector('#actor1_edit').dispatchEvent eventChange
		querySelector('#actor2_edit').dispatchEvent eventChange

		$('ul.tabs').tabs()
		$('select').material_select() # Pass all selects though Material's API

		# document.querySelectorAll(".drag").forEach(function(el) {
		# 	el.addEventListener("mousedown", drag_start, false);
		# 	el.addEventListener("mouseup", drag_stop, false);
		# });
		document.ondblclick = double_click
		document.onmousedown = drag_start
		document.onmouseup = drag_stop
		# querySelector("#pnj1").onmousedown = function() { alert("MOUSE DOWN!") };
		# querySelector("#pnj1").onmouseup = function() { alert("MOUSE UP!") };


	scriptTag.src = 'assets/js/conf.js'
	document.head.appendChild scriptTag
) window, document, (a) ->
	document.querySelector a