init = ->
	load_settings()

	# Bind input events
	((elements) ->
		for el_name of elements
			if elements.hasOwnProperty el_name
				for event of elements[el_name]
					if elements[el_name].hasOwnProperty event
						# document.getElementById(el_name).addEventListener event, elements[el_name][event]
						$('#' + el_name).on event, elements[el_name][event]
	)
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
		lang_edit:
			change: update_lang
			keyup: update_lang
		clear_actors:
			click: remove_all_actors
		clear_cache:
			click: clear_configs

	sort_assets()

	populate_regions()
	populate_lang()
	populate_scenes 'Sala de Aula A'
	populate_avatars '[Docete]'

	init_actors()

	$('ul.tabs').tabs()


highest_z_index = 0

snap_options = {
	targets: [ ]
	range: Infinity
	relativePoints: [ { x: 0, y: 0 } ]
}

init_drag = ->
	snap_enabled = false
	snap_size = 50
	snap_options.targets[0] = interact.createSnapGrid({ x: snap_size, y: snap_size })

	interact('.draggable').draggable
		restrict: # Keep the element within the area of it's parent
			restriction: "parent"
			endOnly: true
			elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
		inertia: !snap_enabled
		snap: if snap_enabled then snap_options else { }

		onstart: (event) ->
			event.target.style.zIndex = ++highest_z_index

		onmove: (event) ->
			is_actor = event.target.className.indexOf('actor') != -1
			if is_actor and !event.shiftKey
				event.dy = 0 # Reset y-pos if the SHIFT key is not being pressed

			dragUpdatePos(event, event.target)

		onend: (event) ->
			save_actors_to_cache()

	.on 'doubletap', (event) ->
		is_actor = event.target.className.indexOf('actor') != -1
		if !is_actor
			return

		actor =	get_actor event.target.dataset.actor
		actor.flipped = !actor.flipped
		save_actors_to_cache()

		dragUpdatePos(event, event.currentTarget)


dragUpdatePos = (event, target) ->
	info = get_actor(event.target.dataset.actor) || empty_actor

	x = info.pos.x + (event.dx || 0)
	y = info.pos.y + (event.dy || 0)

	# Translate the element
	target.style.webkitTransform =
	target.style.transform = 'translate(' + x + 'px, ' + y + 'px) scaleX(' + (if info.flipped then -1 else 1) + ')';

	# Update the position attributes
	info.pos.x = x
	info.pos.y = y