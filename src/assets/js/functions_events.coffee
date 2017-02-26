update_scene = ->
	sub = document.querySelector(@dataset.sub)
	populate_scenes_sub @value, sub

update_scene_sub = ->
	scene = ASSETS.scenes[@options[@selectedIndex].dataset.scene]
	console.debug 'Selected SCENE: ' + scene.name + ' (' + @options[@selectedIndex].textContent + ')'
	target = document.querySelector(@dataset.target)
	variation = scene.variations[@value]
	target.style.backgroundImage = 'url(assets/img/scene/' + variation.id + (if variation.checksum then '-' + variation.checksum else '') + '.jpg)' # Web: site + 'place/web/high/id-checksum.jpg'

loveometer_level = ->
	lovelevel_visible = document.getElementById('lovelevel_visible')
	lovelevel_visible.checked = true
	lovelevel_visible.dispatchEvent new Event('change')

	document.querySelector('#loveometer .gauge').style.height = @value / 2 + 50 + '%'
	document.querySelector('#loveometer .heart-text').innerHTML = @value + '%'

loveometer = ->
	document.getElementById('loveometer').style.display = if @checked then 'block' else 'none'

bubble = ->
	if @value != ''
		document.querySelector('.bubble').style.display = 'block'
		document.querySelector('.bubble').innerHTML = @value.replace(/\n/g, '<br>')
	else
		document.querySelector('.bubble').style.display = 'none'

update_response = ->
	if @value != ''
		document.querySelector('.responses-wrapper').style.display = 'block'
		document.querySelector('.player').style.display = 'block'
		document.querySelector('.responses').innerHTML = '<li class="response"><span class="text">' + @value.replace(/\n/gi, '</span></li><li class="response"><span class="text">') + '</span></li>'
		document.querySelectorAll('.response').forEach (el) ->
			el.addEventListener 'click', ((e) ->
				e = e or window.event
				e.target = e.target or e.srcElement
				e.target.classList.toggle 'checked'
			), false
	else
		document.querySelector('.responses-wrapper').style.display = 'none'
		document.querySelector('.player').style.display = 'none'

update_username_btn = ->
	CONFIG.player.username = document.getElementById('username_edit').value || 'd'
	CONFIG.region = document.getElementById('region_edit').value

	set_config 'username', CONFIG.player.username
	set_config 'region', CONFIG.region

	get_player_info CONFIG.player.username, (data) ->
		CONFIG.player.info = data

		if CONFIG.player.info
			CONFIG.player.id = CONFIG.player.info.player.id

		eventChange = new Event 'change'

		for el in document.getElementsByClassName('actor_select')
			if el.options && el.options[el.selectedIndex].text == '[Docete]'
				el.dispatchEvent eventChange

		query = document.getElementById('avatar_edit')
		if query.options[query.selectedIndex].text == '[Docete]'
			query.dispatchEvent eventChange


update_username = (key) ->
	if key.keyCode == 13 # Press ENTER
		key.preventDefault()
		return update_username_btn()


update_avatar = ->
	avatar = ASSETS.avatars[@value]
	el = document.querySelector('.player-avatar')
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
