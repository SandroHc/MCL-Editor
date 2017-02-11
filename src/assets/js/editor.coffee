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
	console.log startX

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
		console.log 'IMG LOADED'

	fr.readAsDataURL file.files[0]


((window, document, querySelector) ->
	scriptTag = document.createElement('script')

	populate_scenes = (inputs) ->
		inputs.forEach (input_id) ->
			input = querySelector(input_id)
			CONFIG.scenes.forEach (e, i) ->
				el = document.createElement('option')
				el.textContent = e.name
				el.value = i
				input.appendChild el


	populate_scenes_sub = (index, input) ->
		while input.options.length > 0 # Clear all options
			input.remove 0

		scene = CONFIG.scenes[index]
		scene.variations.forEach (e, i) ->
			console.log 'VAR | ' + e.name

			el = document.createElement('option')
			el.textContent = e.name
			el.value = i
			el.dataset.scene = index
			input.appendChild el

		input.dispatchEvent new Event('change')


	populate_avatars = (inputs) ->
		inputs.forEach (input_id) ->
			input = querySelector(input_id)
			CONFIG.avatars.forEach (e, i) ->
				el = document.createElement('option')
				el.textContent = e.name
				el.value = i
				el.dataset.checksum = e.checksum
				if e.name == '[Sucrette]'
					el.selected = 'true'
				input.appendChild el


	populate_emotions = (inputs) ->
		inputs.forEach (input_id) ->
			input = querySelector(input_id)
			CONFIG.emotions.forEach (e, i) ->
				el = document.createElement('option')
				el.textContent = e.name
				el.value = i
				input.appendChild el


	populate_emotions_sub = (index, input) ->
		while input.options.length > 0 # Clear all options
			input.remove 0

		emotion = CONFIG.emotions[index]
		emotion.variations.forEach (e, i) ->
			#console.log("VAR | " + variation.name);

			el = document.createElement('option')
			el.textContent = e.name
			el.value = i
			el.dataset.emotion = index
			input.appendChild el
			return
		input.dispatchEvent new Event('change')


	scriptTag.addEventListener 'load', ->
		render = Mustache.render(querySelector('body').innerHTML, CONFIG)
		site = 'http://assets.amordoce.com/'
		assets =
			body: 'http://avatars.amordoce.com/full/d.png'
			face: 'http://avatars.amordoce.com/face/d.png'
		sites =
			br: 'amordoce.com'
			de: 'sweetamoris.de'
			es: 'corazondemelon.es'
			fi: 'flirttistoori.com'
			fr: 'amoursucre.com'
			hu: 'csabitasboljeles.hu'
			it: 'dolceflirt.it'
			jp: 'mycandylove.jp'
			mx: 'corazondebombon.com'
			pl: 'slodkiflirt.pl'
			ro: 'sweetflirt.ro'
			ru: 'sladkiiflirt.ru'
			tr: 'askito-m.com'
			uk: 'sweetcrush.co.uk'
			us: 'mycandylove.com'

		update_actor = ->
			sub = querySelector(@dataset.sub)
			# console.log("CHAR SELECTED | " + CONFIG.emotions[this.value].name);
			populate_emotions_sub @value, sub

		update_actor_sub = ->
			name = @options[@selectedIndex].textContent
			emotion = CONFIG.emotions[@options[@selectedIndex].dataset.emotion]
			console.log 'EMOTION SELECTED | ' + emotion.name + ' (' + name + ')'

			target = querySelector(@dataset.target)
			target.style.display = emotion.name != '[Nada]' ? 'block' : 'none'

			if emotion.name == '[Docete]'
				target.src = assets.body

				target.style.height = '150%'
				target.style.bottom = '-300px'
			else
				if emotion.name == '[Nada]'
					return
				variation = emotion.variations[@value]
				if variation.id < 900 and variation.checksum
					target.src = site + 'emotion/web/high/' + variation.id + '-' + variation.checksum + '.png'
				else # Local hosting
					target.src = 'assets/img/emotion/' + variation.id + '.png'

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
			console.log 'SCENE SELECTED | ' + scene.name + ' (#' + scene.variations[@value].id + ' - ' + name + ')'
			target = querySelector(@dataset.target)
			variation = scene.variations[@value]
			if variation.checksum
				target.style.backgroundImage = 'url(' + site + 'place/web/high/' + variation.id + '-' + variation.checksum + '.jpg)'
			else # Local hosting
				target.style.backgroundImage = 'url(assets/img/scene/' + variation.id + '.jpg)'

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

		update_user = ->
			user = if querySelector('#username_edit').value != '' then querySelector('#username_edit').value else 'd'
			region = sites[querySelector('#region_edit').value]
			timestamp = (new Date).getTime()
			assets.face = 'http://avatars.' + region + '/face/' + user + '.' + timestamp + '.png'
			assets.body = 'http://avatars.' + region + '/full/' + user + '.' + timestamp + '.png'

			query = querySelector('#actor1_edit')
			if query.options[query.selectedIndex].text == '[Docete]'
				querySelector('#actor1').src = assets.body

			query = querySelector('#actor2_edit')
			if query.options[query.selectedIndex].text == '[Docete]'
				querySelector('#actor2').src = assets.body

			query = querySelector('#avatar_edit')
			if query.options[query.selectedIndex].text == '[Docete]'
				querySelector('.player-avatar').src = assets.face

			set_cookie 'region', querySelector('#region_edit').value
			set_cookie 'username', querySelector('#username_edit').value

		update_user_name = (key) ->
			if key.keyCode == 13 # Press ENTER
				key.preventDefault()
				return update_user()

		update_avatar = ->
			avatar = CONFIG.avatars[@value]
			el = querySelector('.player-avatar')
			el.style.display = avatar.name != '[Nada]' ? 'block' : 'none'
			if avatar.name == '[Docete]'
				el.src = assets.face
				el.style.bottom = '70px'
			else
				if avatar.name == '[Nada]'
					return

				if avatar.checksum
					el.src = site + 'npc/web/thumbnail/' + avatar.id + '-' + avatar.checksum + '.png'
				else # Local hosting
					el.src = 'assets/img/avatar/' + avatar.id + '.png'
				el.style.bottom = '0'
			return

		querySelector('body').innerHTML = render

		((elements) ->
			for el_name of elements
				if elements.hasOwnProperty(el_name)
					for event of elements[el_name]
						if elements[el_name].hasOwnProperty(event)
							querySelector('#' + el_name).addEventListener event, elements[el_name][event]
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
			lovelevel_edit: input: loveometer_level
			lovelevel_visible: change: loveometer
			bubble_edit: keyup: bubble
			response_edit: keyup: update_response
			username_submit: click: update_user
			username_edit: keyup: update_user_name
			avatar_edit:
				change: update_avatar
				keyup: update_avatar

		populate_scenes [ '#scene_edit' ]
		populate_avatars [ '#avatar_edit' ]
		populate_emotions [ '#actor1_edit', '#actor2_edit' ]

		# Select default option
		querySelector('#scene_edit option[value="8"]').selected = true		# Classroom A
		querySelector('#actor1_edit option[value="37"]').selected = true	# Nathaniel
		querySelector('#actor2_edit option[value="8"]').selected = true		# Castiel
		querySelector('#avatar_edit option[value="33"]').selected = true	# Docete

		event = new Event('change')
		querySelector('#scene_edit').dispatchEvent event
		querySelector('#actor1_edit').dispatchEvent event
		querySelector('#actor2_edit').dispatchEvent event

		region = get_cookie('region')
		if region
			console.log 'REGION | ' + region
			querySelector('#region_edit option[value="' + region + '"]').selected = true

		username = get_cookie('username')
		if username
			console.log 'USERNAME | ' + username
			querySelector('#username_edit').value = username
			querySelector('#username_submit').dispatchEvent new Event('click')

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