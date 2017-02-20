# <div class="input-field col s12 m6">
#	<select id="actor1_edit" data-sub="#actor1_sub_edit"></select>
#	<label for="actor1_edit">{{character}} 1</label>
# </div>
# <div class="input-field col s12 m6">
#	<select id="actor1_sub_edit" data-parent="#actor1_edit" data-target="#actor1"></select>
# </div>

actors_size = 0

add_actor = (selected = CONFIG.default_actor) ->
	id = ++actors_size
	actors = document.getElementById 'actors'

	# Main
	div = document.createElement 'div'
	div.classList.add('input-field', 'col', 's12', 'm5', 'actor_' + id)

	select_actor = document.createElement 'select'
	select_actor.id = 'actor_' + id + '_edit'
	select_actor.dataset.actor = id

	label = document.createElement 'label'
	label.for = 'actor_' + id + '_edit'
	label.textContent = vegito('{{character}} ' + id, LANG)

	div.appendChild select_actor
	div.appendChild label

	actors.appendChild div
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

	actors.appendChild div
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
	actors.appendChild div


	# Scene image
	img = document.createElement('img')
	img.id = 'actor_' + id
	img.classList.add('actor', 'draggable')
	img.alt = vegito('{{character}} ' + id, LANG)
	img.style.bottom = 0
	img.style.left = Math.min(id * 400 - 200, 750) + 'px'
	img.dataset.flip = 1

	document.getElementById('scene').appendChild(img)

	populate_emotions select_actor, selected
	populate_emotions_sub select_sub
	return

remove_actor = (id) ->
	console.log 'Removing ' + id

	$('.actor_' + id).remove()

	el = document.getElementById('actor_' + id)
	el.parentNode.removeChild el


init_actors = ->
	add_actor 'Nathaniel'
	add_actor 'Castiel'


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
		#console.log("VAR | " + variation.name + ' | ' + i);
		option = document.createElement('option')
		option.textContent = variation.name
		option.value = i
		option.dataset.emotion = actor_el.value
		option.dataset.actor = actor_el.dataset.actor
		select.appendChild option

	$(select).material_select()
	select.dispatchEvent new Event('change')


update_actor = ->
	console.log("CHAR SELECTED | " + ASSETS.emotions[@value].name);
	populate_emotions_sub document.getElementById('actor_' + @dataset.actor + '_sub')


update_actor_sub = ->
	option_selected = @options[@selectedIndex]
	emotion = ASSETS.emotions[document.getElementById('actor_' + @dataset.actor + '_edit').value]

	console.log 'EMOTION SELECTED | ' + emotion.name + ' (' + option_selected.textContent + ')'

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