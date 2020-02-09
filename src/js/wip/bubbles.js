const DEFAULT_BUBBLE = {
	text: '',
	pos: { x: 0, y: 0 }
};

export let bubble = undefined;

export function init() {
	load();

	document.getElementById('bubble-edit').addEventListener('keyup', changed);
}

function load() {
	bubble = JSON.parse(localStorage.getItem('bubble')) || DEFAULT_BUBBLE;

	let $bubbleSetting = document.getElementById('bubble-edit');
	$bubbleSetting.value = bubble.text;

	apply();
}

function changed() {
	bubble.text = this.value;
	apply();
	persist();
}

function apply() {
	let $bubbleCanvas = document.getElementById('bubble');

	if (bubble.text === '') {
		$bubbleCanvas.style.display = 'none';
	} else {
		$bubbleCanvas.style.display = 'block';
		$bubbleCanvas.innerHTML = bubble.text.replace(/\n/g, '<br>');
		$bubbleCanvas.style.webkitTransform
			= $bubbleCanvas.style.transform
			= `translate(${bubble.pos.x}px, ${bubble.pos.y}px)`;
	}
}

export function persist() {
	localStorage.setItem('bubble', JSON.stringify(bubble));
}
