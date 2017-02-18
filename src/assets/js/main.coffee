# Bind input events
((elements) ->
	sort_assets()

	populate_regions()
	populate_scenes 'Sala de Aula A'
	populate_avatars '[Docete]'
	populate_emotions [ '#actor1_edit', '#actor2_edit' ], [ 'Nathaniel', 'Castiel' ]

	document.ondblclick = double_click
	document.onmousedown = drag_start
	document.onmouseup = drag_stop

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


load_cookies()

eventChange = new Event('change')
document.querySelector('#scene_edit').dispatchEvent eventChange
document.querySelector('#actor1_edit').dispatchEvent eventChange
document.querySelector('#actor2_edit').dispatchEvent eventChange

$('ul.tabs').tabs()