(function(window, document, querySelector) {
	var scriptTag = document.createElement("script");
	scriptTag.addEventListener("load", function() {
		var render = Mustache.render(querySelector("body").innerHTML, CONFIG),
			site = "http://assets.amordoce.com/",
			assets = {
				body: "http://avatars.amordoce.com/full/d.png",
				face: "http://avatars.amordoce.com/face/d.png"
			},
			sites = {
				br: "amordoce.com",
				de: "sweetamoris.de",
				es: "corazondemelon.es",
				fi: "flirttistoori.com",
				fr: "amoursucre.com",
				hu: "csabitasboljeles.hu",
				it: "dolceflirt.it",
				jp: "mycandylove.jp",
				mx: "corazondebombon.com",
				pl: "slodkiflirt.pl",
				ro: "sweetflirt.ro",
				ru: "sladkiiflirt.ru",
				tr: "askito-m.com",
				uk: "sweetcrush.co.uk",
				us: "mycandylove.com"
			},
			update_actor = function() {
				var sub = querySelector(this.dataset.sub);

				// console.log("CHAR SELECTED | " + CONFIG.emotions[this.value].name);
				populate_emotions_sub(this.value, sub);
			},
			update_actor_sub = function() {
				var name = this.options[this.selectedIndex].textContent,
					emotion = CONFIG.emotions[this.options[this.selectedIndex].dataset.emotion];
				console.log("EMOTION SELECTED | " + emotion.name + " (" + name + ")");

				var target = querySelector(this.dataset.target);
				target.style.display = (emotion.name !== "[Nada]") ? "block" : "none";
				if(emotion.name == "[Docete]") {
					target.src = assets.body;
					target.style.height = "150%";
					target.style.bottom = "-300px";
				} else {
					if(emotion.name == "[Nada]") return;

					var variation = emotion.variations[this.value];
					if(variation.id < 900  && variation.checksum) {
						target.src = site + "emotion/web/high/" + variation.id + "-" + variation.checksum + ".png";
					} else {
						// Local hosting
						target.src = "assets/img/emotion/" + variation.id + ".png";
					}
					target.style.height = "92.24138%";
					target.style.bottom = "0";
				}

			},
			update_scene = function() {
				var sub = querySelector(this.dataset.sub);

				// console.log("SCENE SELECTED | " + CONFIG.scenes[this.value].name);
				populate_scenes_sub(this.value, sub);
			},
			update_scene_sub = function() {
				var name = this.options[this.selectedIndex].textContent,
					scene = CONFIG.scenes[this.options[this.selectedIndex].dataset.scene];
				console.log("SCENE SELECTED | " + scene.name + " (#" + scene.variations[this.value].id + " - " + name + ")");

				var target = querySelector(this.dataset.target);

				var variation = scene.variations[this.value];
				if(variation.checksum) {
					target.style.backgroundImage = "url(" + site + "place/web/high/" + variation.id + "-" + variation.checksum + ".jpg)";
				} else {
					// Local hosting
					target.style.backgroundImage = "url(assets/img/scene/" + variation.id + ".jpg)";
				}
			},
			loveometer_level = function() {
				querySelector("#loveometer .gauge").style.height = ((this.value / 2) + 50) + "%";
				querySelector("#loveometer .heart-text").innerHTML = this.value + "%";
			},
			loveometer = function() {
				querySelector("#loveometer").style.display = (this.checked) ? "block" : "none"
			},
			bubble = function() {
				if(this.value !== "") {
					querySelector(".bubble").style.display = "block";
					querySelector(".bubble").innerHTML = this.value.replace(/\n/g, "<br>")
				} else {
					querySelector(".bubble").style.display = "none"
				}
			},
			update_response = function() {
				if (this.value !== "") {
					querySelector(".responses-wrapper").style.display = "block";
					querySelector(".player").style.display = "block";
					querySelector(".responses").innerHTML = '<li class="response"><span class="text">' + this.value.replace(/\n/gi, '</span></li><li class="response"><span class="text">') + "</span></li>";

					document.querySelectorAll(".response").forEach(function(el) {
						el.addEventListener("click", function(e) {
							e = e || window.event;
							e.target = e.target || e.srcElement;

							e.target.classList.toggle('checked');
						}, false);
					});
				} else {
					querySelector(".responses-wrapper").style.display = "none";
					querySelector(".player").style.display = "none"
				}
			},
			update_user = function() {
				var user = (querySelector("#username_edit").value !== "") ? querySelector("#username_edit").value : "d",
					region = sites[querySelector("#region_edit").value],
					timestamp = new Date().getTime();

				assets.face = "http://avatars." + region + "/face/" + user + "." + timestamp + ".png";
				assets.body = "http://avatars." + region + "/full/" + user + "." + timestamp + ".png";

				var query = querySelector("#actor1_edit");
				if (query.options[query.selectedIndex].text === "[Docete]") querySelector("#actor1").src = assets.body;

				query = querySelector("#actor2_edit");
				if (query.options[query.selectedIndex].text === "[Docete]") querySelector("#actor2").src = assets.body;

				query = querySelector("#avatar_edit");
				if (query.options[query.selectedIndex].text === "[Docete]") querySelector(".player-avatar").src = assets.face;

				set_cookie('region', querySelector("#region_edit").value);
				set_cookie('username', querySelector("#username_edit").value);
			},
			update_user_name = function(key) {
				if (key.keyCode === 13) { // Press ENTER
					key.preventDefault();
					return update_user();
				}
			},
			update_avatar = function() {
				var avatar = CONFIG.avatars[this.value];

				var el = querySelector(".player-avatar");
				el.style.display = (avatar.name !== "[Nada]") ? "block" : "none";
				if(avatar.name === "[Docete]") {
					el.src = assets.face;
					el.style.bottom = "70px";
				} else {
					if(avatar.name == "[Nada]") return;

					if(avatar.checksum) {
						el.src = site + "npc/web/thumbnail/" + avatar.id + "-" + avatar.checksum + ".png";
					} else {
						// Local hosting
						el.src = "assets/img/avatar/" + avatar.id + ".png";
					}
					el.style.bottom = "0";
				}
			};
		querySelector("body").innerHTML = render;
		(function(elements) {
			for(var el_name in elements) {
				if(elements.hasOwnProperty(el_name)) {
					for(var event in elements[el_name]) {
						if(elements[el_name].hasOwnProperty(event)) {
							querySelector("#" + el_name).addEventListener(event, elements[el_name][event])
						}
					}
				}
			}
		}({
			actor1_edit: {
				change: update_actor,
				keyup: update_actor
			},
			actor1_sub_edit: {
				change: update_actor_sub,
				keyup: update_actor_sub
			},
			actor2_edit: {
				change: update_actor,
				keyup: update_actor
			},
			actor2_sub_edit: {
				change: update_actor_sub,
				keyup: update_actor_sub
			},
			scene_edit: {
				change: update_scene,
				keyup: update_scene
			},
			scene_sub_edit: {
				change: update_scene_sub,
				keyup: update_scene_sub
			},
			lovelevel_edit: {
				input: loveometer_level
			},
			lovelevel_visible: {
				change: loveometer
			},
			bubble_edit: {
				keyup: bubble
			},
			response_edit: {
				keyup: update_response
			},
			username_submit: {
				click: update_user
			},
			username_edit: {
				keyup: update_user_name
			},
			avatar_edit: {
				change: update_avatar,
				keyup: update_avatar
			}
		}));

		populate_scenes([ "#scene_edit" ]);
		populate_avatars([ "#avatar_edit" ]);
		populate_emotions([ "#actor1_edit", "#actor2_edit" ]);

		// Select default option
		querySelector('#scene_edit option[value="8"]').selected = true; // Classroom A
		querySelector('#actor1_edit option[value="37"]').selected = true; // Nathaniel
		querySelector('#actor2_edit option[value="8"]').selected = true; // Castiel
		querySelector('#avatar_edit option[value="33"]').selected = true; // Docete

		var event = new Event('change');
		querySelector('#scene_edit').dispatchEvent(event);
		querySelector('#actor1_edit').dispatchEvent(event);
		querySelector('#actor2_edit').dispatchEvent(event);

		var region = get_cookie('region');
		if(region) {
			console.log("REGION | " + region);
			querySelector('#region_edit option[value="' + region + '"]').selected = true;

		}
		var username = get_cookie('username');
		if(username) {
			console.log("USERNAME | " + username);
			querySelector('#username_edit').value = username;
			querySelector('#username_submit').dispatchEvent(new Event('click'));
		}

		
		// document.querySelectorAll(".drag").forEach(function(el) {
		// 	el.addEventListener("mousedown", drag_start, false);
		// 	el.addEventListener("mouseup", drag_stop, false);
		// });
		document.ondblclick = double_click;
		document.onmousedown = drag_start;
		document.onmouseup = drag_stop;

		// querySelector("#pnj1").onmousedown = function() { alert("MOUSE DOWN!") };
		// querySelector("#pnj1").onmouseup = function() { alert("MOUSE UP!") };
	});

	scriptTag.src = "assets/js/conf.js";

	document.head.appendChild(scriptTag);

	var hideMissingChecksum = false;

	function populate_scenes(inputs) {
		inputs.forEach(function(input_id) {
			var input = querySelector(input_id);

			CONFIG.scenes.forEach(function(e, i) {
				var hasChecksums = !hideMissingChecksum;
				e.variations.forEach(function(e) {
					if(e.checksum)
						hasChecksums = true;
				});
				if(!hasChecksums) return; // Skip is checksum is missing

				var el = document.createElement("option");
				el.textContent = e.name;
				el.value = i;
				input.appendChild(el);
			});
		});
	}

	function populate_scenes_sub(index, input) {
		// Clear all options
		while(input.options.length > 0)
			input.remove(0);

		var scene = CONFIG.scenes[index];
		scene.variations.forEach(function(e, i) {
			console.log("VAR | " + e.name);
			if(hideMissingChecksum && !e.checksum) return; // Skip is checksum is missing

			var el = document.createElement("option");
			el.textContent = e.name;
			el.value = i;
			el.dataset.scene = index;
			input.appendChild(el);
		});

		input.dispatchEvent(new Event('change'));
	}

	function populate_avatars(inputs) {
		inputs.forEach(function(input_id) {
			var input = querySelector(input_id);

			CONFIG.avatars.forEach(function(e, i) {
				if(hideMissingChecksum && !e.checksum) return; // Skip is checksum is missing

				var el = document.createElement("option");
				el.textContent = e.name;
				el.value = i;
				el.dataset.checksum = e.checksum;

				if(e.name === "[Sucrette]")	el.selected = "true";

				input.appendChild(el);
			});
		});
	}

	function populate_emotions(inputs) {
		inputs.forEach(function(input_id) {
			var input = querySelector(input_id);

			CONFIG.emotions.forEach(function(e, i) {
				var hasChecksums = !hideMissingChecksum;
				e.variations.forEach(function(e) {
					if(e.checksum)
						hasChecksums = true;
				});
				if(!hasChecksums) return; // Skip is checksum is missing

				var el = document.createElement("option");
				el.textContent = e.name;
				el.value = i;
				input.appendChild(el);
			});
		});
	}

	function populate_emotions_sub(index, input) {
		// Clear all options
		while(input.options.length > 0)
			input.remove(0);

		var emotion = CONFIG.emotions[index];
		emotion.variations.forEach(function(e, i) {
			//console.log("VAR | " + variation.name);
			if(hideMissingChecksum && !e.checksum) return; // Skip is checksum is missing

			var el = document.createElement("option");
			el.textContent = e.name;
			el.value = i;
			el.dataset.emotion = index;
			input.appendChild(el);
		});

		input.dispatchEvent(new Event('change'));
	}
}(window, document, function(a) {
	return document.querySelector(a);
}));

function set_cookie(key, val) {
	var date = new Date();
	date.setDate(date.getDate() + 30);

	document.cookie = key + "=" + val + "; expires=" + date.toUTCString();

	console.log("SET COOKIE | " + key + " = " + val);
}

function get_cookie(key) {
	var re = new RegExp("(?:(?:^|.*;\\s*)" + key + "\\s*\\=\\s*([^;]*).*$)|^.*$");
	return document.cookie.replace(re, "$1");
}


var drag = false,
	offsetX,
	offsetY,
	startX,
	startY,
	highest_zIndex = 0;

function drag_start(e) {
	e = e || window.event;

	if(e.target.className.indexOf("drag") == -1)
		return true;

	if(!e.target) {
		e.target = e.srcElement; // IE uses srcElement, others use target
		e.button--;
	}

	// Only process left-click
	if(e.button != 0)
		return true;

	if(e.preventDefault) e.preventDefault();

	// calculate event X, Y coordinates
	offsetX = e.clientX;
	offsetY = e.clientY;

	e.target.onmousemove = drag_move;
	drag = e.target;

	// Default positions
	if(!e.target.style.left)
		e.target.style.left = '0px';
	if(!e.target.style.bottom)
		e.target.style.bottom = '0px';

	highest_zIndex++;
	e.target.style.zIndex = highest_zIndex;

	// Store initial position
	startX = parseInt(e.target.style.left);
	startY = parseInt(e.target.style.bottom);

	return false;
}

function drag_move(e) {
	e = e || window.event;
	if(!e.target) e.target = e.srcElement; // IE uses srcElement, others use target

	if(!drag) return;

	var is_pnj = drag.className.indexOf("actor") != -1;

	e.target.style.left = startX + e.clientX - offsetX + 'px';
	if(!is_pnj || e.shiftKey) // e.ctrlKey | e.shiftKey | e.altKey
		e.target.style.bottom = startY - e.clientY + offsetY + 'px';

	return false;
}

function drag_stop(e) {
	e = e || window.event;
	if(!e.target) e.target = e.srcElement; // IE uses srcElement, others use target

	drag = null;
	document.onmousemove = null;
}

function double_click(e) {
	e = e || window.event;
	e.target = e.target || e.srcElement;

	if(e.target.className.indexOf("actor") == -1)
		return true;

	e.target.classList.toggle('flipX');
}


function load_from_file(file_in, img_out, bg_out) {
	// 'avatar_file_edit'
	var file = document.getElementById(file_in);

	if(!file.files || !file.files.length) {
		console.log('No file selected'); alert('Seleciona primeiro o ficheiro, baka!'); return;
	}
	if(!FileReader) {
		console.log('No support for FileReader'); return;
	}

	var fr = new FileReader();
	fr.onload = function() {
		if(img_out) document.querySelector(img_out).src = fr.result;
		if(bg_out) {
			console.log(document.querySelector(bg_out));
			console.log(fr.result);
			document.querySelector(bg_out).style.backgroundImage = "url(" + fr.result + ")";
		}
		console.log('IMG LOADED');
	};
	fr.readAsDataURL(file.files[0]);
}