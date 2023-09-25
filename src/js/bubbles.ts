const DEFAULT_BUBBLE = {
	text: '',
	pos: {
		x: 0,
		y: 0
	}
};

export let bubble = DEFAULT_BUBBLE;

export function loadBubbles() {
	try {
		const storedBubble = localStorage.getItem('bubble');
		if (storedBubble) {
			bubble = JSON.parse(storedBubble);
		}
		if (!storedBubble) {
			bubble = DEFAULT_BUBBLE;
		}
	} catch(e) {
		bubble = DEFAULT_BUBBLE;
	}

	const bubbleEditor = document.getElementById('bubble-edit')! as HTMLTextAreaElement;
	bubbleEditor.value = bubble.text;
	bubbleEditor.addEventListener('keyup', bubbleChanged);

	apply();
}

function bubbleChanged() {
	const bubbleEditor = document.getElementById('bubble-edit')! as HTMLTextAreaElement;
	bubble.text = bubbleEditor.value;

	apply();
	persistBubble();
}

function apply() {
	const bubbleCanvas = document.getElementById('bubble')!;
	if (!bubble.text) {
		bubbleCanvas.style.display = 'none';
		return;
	}

	bubbleCanvas.style.display = 'block';
	bubbleCanvas.innerHTML = bubble.text.replace(/\n/g, '<br>');
	bubbleCanvas.style.transform = `translate(${bubble.pos.x}px, ${bubble.pos.y}px)`;
}

export function persistBubble() {
	if (bubble) {
		localStorage.setItem('bubble', JSON.stringify(bubble));
	} else {
		localStorage.removeItem('bubble');
	}
}
