// import { messages } from '@/wip/lang'
//
// export default function __(key) {
// 	return messages[key] || ('{{' + key + '}}');
// }

export function loadFromFile(e, bg_out = 'scene', img_out = undefined) {
	console.log("Loading file");

	const file = e.target.files[0];
	if (!file) {
		console.log('No file selected');
		alert('Seleciona primeiro o ficheiro, baka!');
		return;
	}

	if (!FileReader) {
		console.log('FileReader not supported');
		return;
	}

	let fr = new FileReader();
	fr.onload = function () {
		if (img_out) {
			document.querySelector(img_out).src = fr.result;
		}
		if (bg_out) {
			return document.getElementById(bg_out).style.backgroundImage = 'url(' + fr.result + ')';
		}
	};

	fr.readAsDataURL(file);
}

export function sort(list, key = a => a.name) {
	return list.sort((a, b) => {
		a = key(a).toUpperCase();
		b = key(b).toUpperCase();

		if (a.indexOf('[') > b.indexOf('[')) {
			// Display '[val]' at the top
			return -1;
		} else if (a < b) {
			return -1;
		} else if (a > b) {
			return 1;
		} else {
			return 0;
		}
	});
}
