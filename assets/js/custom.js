(function(window, document, querySelector) {
	// document.querySelectorAll(".drag").forEach(function(el) {
	// 	el.addEventListener("mousedown", drag_start, false);
	// 	el.addEventListener("mouseup", drag_stop, false);
	// });
	document.ondblclick = double_click;
	document.onmousedown = drag_start;
	document.onmouseup = drag_stop;

	// querySelector("#pnj1").onmousedown = function() { alert("MOUSE DOWN!") };
	// querySelector("#pnj1").onmouseup = function() { alert("MOUSE UP!") };
}(window, document, function(a) { return document.querySelector(a) }));

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

