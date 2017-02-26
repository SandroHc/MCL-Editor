update_scene = ->
	sub = document.querySelector(@dataset.sub)
	populate_scenes_sub @value, sub

	set_config 'scene', ASSETS.scenes[@value].name

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


bubble = undefined

init_bubble = ->
	bubble = localStorage.getObject 'bubble'

	if !bubble
		bubble = {
			text: ''
			pos: {
				x: 0
				y: 0
			}
		}

	el = document.getElementById('bubble_edit')
	el.value = bubble.text
	el.dispatchEvent new Event('keyup')

	el = document.getElementById('bubble')
	el.style.webkitTransform =
	el.style.transform = 'translate(' + bubble.pos.x + 'px, ' + bubble.pos.y + 'px)';


update_bubble = ->
	el = document.getElementById('bubble')
	el.style.display = if @value != '' then 'block' else 'none'

	if @value != ''
		el.innerHTML = @value.replace(/\n/g, '<br>')

	bubble.text = @value
	localStorage.setObject 'bubble', bubble


init_answers = ->
	answers = localStorage.getItem 'answers'
	if answers
		el = document.getElementById('answers_edit')
		el.textContent = answers
		el.dispatchEvent new Event('keyup')


update_answers = ->
	el = document.getElementById('answers')

	if @value != ''
		document.querySelector('.player').style.display = 'block'

		el.style.display = 'block'
		el.innerHTML = '<li class="response"><span class="text">' + @value.replace(/\n/gi, '</span></li><li class="response"><span class="text">') + '</span></li>'
		document.querySelectorAll('.response').forEach (el) ->
			el.addEventListener 'click', ((e) ->
				e = e or window.event
				e.target = e.target or e.srcElement
				e.target.classList.toggle 'checked'
			), false
	else
		document.querySelector('.player').style.display = 'none'
		document.getElementById('answers').style.display = 'none'

	set_config 'answers', @value


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

	set_config 'avatar', avatar.name

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
