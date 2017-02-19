init = ->
	load_settings()

	sort_assets()

	populate_regions()
	populate_scenes 'Sala de Aula A'
	populate_avatars '[Docete]'
	populate_emotions [ '#actor1_edit', '#actor2_edit' ], [ 'Nathaniel', 'Castiel' ]
	populate_lang()

	# Bind input events
	((elements) ->
		for el_name of elements
			if elements.hasOwnProperty el_name
				for event of elements[el_name]
					if elements[el_name].hasOwnProperty event
						# document.querySelector('#' + el_name).addEventListener event, elements[el_name][event]
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
		lang_edit:
			change: update_lang
			keyup: update_lang


	eventChange = new Event('change')
	document.querySelector('#scene_edit').dispatchEvent eventChange
	document.querySelector('#actor1_edit').dispatchEvent eventChange
	document.querySelector('#actor2_edit').dispatchEvent eventChange

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

	.on 'doubletap', (event) ->
		is_actor = event.target.className.indexOf('actor') != -1
		if !is_actor
			return

		event.currentTarget.dataset.flip *= -1 # Flip the value
		dragUpdatePos(event, event.currentTarget)


dragUpdatePos = (event, target) ->
	# Keep the dragged position in the data-x/data-y attributes
	x = (parseFloat(target.dataset.x) || 0) + (event.dx || 0)
	y = (parseFloat(target.dataset.y) || 0) + (event.dy || 0)
	flip = target.dataset.flip || '1'

	# Translate the element
	target.style.webkitTransform =
		target.style.transform = 'translate(' + x + 'px, ' + y + 'px) scaleX(' + flip + ')';

	# Update the position attributes
	target.setAttribute('data-x', x)
	target.setAttribute('data-y', y)