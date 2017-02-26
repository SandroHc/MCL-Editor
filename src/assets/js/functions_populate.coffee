populate_regions = () ->
	select = document.getElementById('region_edit')
	regions.forEach (e, i) ->
		el = document.createElement('option')
		el.textContent = e.name + ' — ' + e.link
		el.value = i
		el.selected = if i == parseInt(CONFIG.region, 10) then 'true' else undefined
		select.appendChild el

	$(select).material_select()


populate_scenes = ->
	selected = get_config('scene') || 'Sala de Aula A'

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


populate_avatars = ->
	selected = get_config('avatar') || '[Docete]'

	select = document.getElementById('avatar_edit')
	ASSETS.avatars.forEach (e, i) ->
		el = document.createElement('option')
		el.textContent = e.name
		el.value = i
		el.dataset.checksum = e.checksum
		el.selected = if e.name == selected then 'true' else undefined
		select.appendChild el

	$(select).material_select()
	select.dispatchEvent new Event('change')