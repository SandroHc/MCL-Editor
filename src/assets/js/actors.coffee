actors = []
# Separate the DOM elements, so we can cache the actors easily
actors_DOM = []

empty_actor = {
	name: CONFIG.default_actor
	pos: {
		x: 0
		y: 0
	}
	flipped: false
}

add_actor = (info = empty_actor) ->
	id = actors.length + 1

	root = document.createElement 'div'

	# Main
	div = document.createElement 'div'
	div.classList.add('input-field', 'col', 's12', 'm5', 'actor_' + id)

	select_actor = document.createElement 'select'
	select_actor.id = 'actor_' + id + '_edit'
	select_actor.className = 'actor_select'
	select_actor.dataset.actor = id

	label = document.createElement 'label'
	label.for = 'actor_' + id + '_edit'
	label.textContent = vegito('{{character}} ' + id, LANG)

	div.appendChild select_actor
	div.appendChild label

	root.appendChild div
	# select.addEventListener 'change', _update_actor
	$(select_actor).on 'change', update_actor
	$(select_actor).on 'keyup', update_actor


	# Sub
	div = document.createElement 'div'
	div.classList.add('input-field', 'col', 's12', 'm5', 'actor_' + id)

	select_sub = document.createElement 'select'
	select_sub.id = 'actor_' + id + '_sub'
	select_sub.dataset.actor = id

	div.appendChild select_sub

	root.appendChild div
	$(select_sub).on 'change', update_actor_sub
	$(select_sub).on 'keyup', update_actor_sub


	# Remove
	div = document.createElement 'div'
	div.classList.add('input-field', 'col', 's6', 'm2', 'actor_' + id)
	div.style.height = '66px'

	# <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>

	remove_btn = document.createElement 'a'
	remove_btn.classList.add 'btn-floating', 'waves-effect', 'waves-light', 'red'

	remove_btn.onclick = ->
		remove_actor id

	remove_icon = document.createElement 'i'
	remove_icon.classList.add 'material-icons'
	remove_icon.textContent = 'remove_circle_outline'

	remove_btn.appendChild remove_icon
	div.appendChild remove_btn
	root.appendChild div

	document.getElementById('actors').appendChild root


	# Scene image
	img = document.createElement('img')
	img.id = 'actor_' + id
	img.classList.add('actor', 'draggable')
	img.alt = vegito('{{character}} ' + id, LANG)
	img.style.bottom = 0
	img.style.left = Math.min(id * 400 - 200, 750) + 'px'
	img.dataset.actor = id

	img.style.webkitTransform =
	img.style.transform = 'translate(' + info.pos.x + 'px, ' + info.pos.y + 'px) scaleX(' + (if info.flipped then -1 else 1) + ')';

	document.getElementById('scene').appendChild(img)

	# Add this actor's info to the actors list
	actors.push info
	actors_DOM.push {
		config: root
		select: select_actor
		select_sub: select_sub
		scene: img
	}
	save_actors_to_cache()


	populate_emotions select_actor, info.name
	populate_emotions_sub select_sub

	return


get_actor = (id) ->
	return actors[id-1]


remove_actor = (id) ->
	console.debug 'Removing ' + id

	actor = actors_DOM[id-1]

	if !actor
		console.warn 'Actor with ID ' + id + ' not found. Can\'t remove'
		return

	actor.root.parentNode.removeChild actor.root
	actor.scene.parentNode.removeChild actor.scene

	# Clear references to this actor
	actors[id-1] = undefined
	actors_DOM[id-1] = undefined


remove_all_actors = ->
	for actor in actors
		remove_actor actor.id


init_actors = ->
	actor_cache = localStorage.getObject('actors') || []

	if actor_cache.length == 0
		actor_cache.push {
			name: 'Nathaniel'
			pos: {
				x: -16
				y: 0
			}
			flipped: false
		}
		actor_cache.push {
			name: 'Castiel'
			pos: {
				x: -26
				y: 0
			}
			flipped: false
		}
		console.debug 'No actors in cache. Loading defaults'

	for actor in actor_cache
		add_actor actor

	console.debug 'Loaded ' + actor_cache.length + ' actors'


populate_emotions = (select, selected) ->
	ASSETS.emotions.forEach (emotion, i) ->
		option = document.createElement('option')
		option.textContent = emotion.name
		option.value = i
		option.selected = if emotion.name == selected then 'true' else undefined
		select.appendChild option

	$(select).material_select()


populate_emotions_sub = (select) ->
	while select.options.length > 0 # Clear all options
		select.remove 0

	actor_el = document.getElementById('actor_' + select.dataset.actor + '_edit')
	if !actor_el
		console.log 'Invalid actor for:'
		console.log select
		return

	emotion = ASSETS.emotions[actor_el.value]
	emotion.variations.forEach (variation, i) ->
		option = document.createElement('option')
		option.textContent = variation.name
		option.value = i
		option.dataset.emotion = actor_el.value
		option.dataset.actor = actor_el.dataset.actor
		select.appendChild option

	$(select).material_select()
	select.dispatchEvent new Event('change')


update_actor = ->
	#console.log("CHAR SELECTED | " + ASSETS.emotions[@value].name);
	populate_emotions_sub document.getElementById('actor_' + @dataset.actor + '_sub')


update_actor_sub = ->
	option_selected = @options[@selectedIndex]
	emotion = ASSETS.emotions[document.getElementById('actor_' + @dataset.actor + '_edit').value]

	console.debug 'Selected ACTOR: ' + emotion.name + ' (' + option_selected.textContent + ')'

	# Update actor info
	actors[@dataset.actor-1].name = emotion.name
	save_actors_to_cache()

	target = document.getElementById('actor_' + @dataset.actor)
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


save_actors_to_cache = ->
	localStorage.setObject 'actors', actors