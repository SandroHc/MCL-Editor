const DEFAULT_LOVEOMETER_VISIBLE = false;
const DEFAULT_LOVEOMETER_LEVEL = 0;

let loveometerVisible = DEFAULT_LOVEOMETER_VISIBLE;
let loveometerLevel = DEFAULT_LOVEOMETER_LEVEL;

export function loadLoveometer() {
	try {
		let storedVisible = localStorage.getItem('loveometer');
		if (storedVisible) {
			loveometerVisible = JSON.parse(storedVisible);
		}
	} catch (e) {
		loveometerVisible = DEFAULT_LOVEOMETER_VISIBLE;
	}

	try {
		let storedLevel = localStorage.getItem('loveometer-level');
		if (storedLevel) {
			loveometerLevel = JSON.parse(storedLevel);
		}
	} catch (e) {
		loveometerLevel = DEFAULT_LOVEOMETER_LEVEL;
	}

	apply();

	const loveometerToggle = document.getElementById('lovelevel-toggle')! as HTMLInputElement;
	loveometerToggle.checked = loveometerVisible;
	loveometerToggle.addEventListener('change', toggleLoveometer);

	const loveometerPercent = document.getElementById('lovelevel-edit')! as HTMLInputElement;
	loveometerPercent.value = loveometerLevel.toString();
	loveometerPercent.addEventListener('input', changedLoveometerLevel);
}

function persist() {
	localStorage.setItem('loveometer', JSON.stringify(loveometerVisible));
	localStorage.setItem('loveometer-level',   JSON.stringify(loveometerLevel));
}

function toggleLoveometer() {
	console.debug('Loveometer visibility changed');

	const loveometerToggle = document.getElementById('lovelevel-toggle')! as HTMLInputElement;
	loveometerVisible = loveometerToggle.checked;

	apply();
	persist();
}

function changedLoveometerLevel() {
	console.debug('Loveometer level changed');
	const loveometerPercent = document.getElementById('lovelevel-edit')! as HTMLInputElement;
	const loveometerToggle = document.getElementById('lovelevel-toggle')! as HTMLInputElement;

	loveometerVisible = true;
	loveometerLevel = parseInt(loveometerPercent.value);

	apply();
	persist();

	// Enable the loveometer when the user uses the range input
	loveometerToggle.checked = true;
}

function apply() {
	let loveometerCanvas = document.getElementById('loveometer')!;
	loveometerCanvas.style.display = loveometerVisible ? 'block' : 'none';
	document.getElementById('gauge')!.style.height = loveometerLevel / 2 + 50 + '%';
	document.getElementById('heart-text')!.innerText = loveometerLevel + '%';
	document.getElementById('lovelevel-percentage')!.innerText = loveometerLevel + '%';
}
