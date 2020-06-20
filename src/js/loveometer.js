const DEFAULT_LOVEOMETER_VISIBLE = false;
const DEFAULT_LOVEOMETER_LEVEL = 0;

let loveometerVisible = undefined;
let loveometerLevel = undefined;

export function init() {
	loadLoveometer();

	document.getElementById('lovelevel-edit').addEventListener('input', changedLoveometerLevel);
	document.getElementById('lovelevel-visible').addEventListener('change', changedLoveometerVisible);
}

function loadLoveometer() {
	try {
		loveometerLevel = JSON.parse(localStorage.getItem('loveometer-level')) || DEFAULT_LOVEOMETER_LEVEL;
	} catch(e) {
		loveometerLevel = DEFAULT_LOVEOMETER_LEVEL;
	}

	try {
		loveometerVisible = JSON.parse(localStorage.getItem('loveometer-visible')) || DEFAULT_LOVEOMETER_VISIBLE;
	} catch(e) {
		loveometerVisible = DEFAULT_LOVEOMETER_VISIBLE;
	}	

	document.getElementById('lovelevel-edit').value = loveometerLevel;
	document.getElementById('lovelevel-visible').checked = loveometerVisible;

	apply();
}

function persist() {
	localStorage.setItem('loveometer-visible', JSON.stringify(loveometerVisible));
	localStorage.setItem('loveometer-level',   JSON.stringify(loveometerLevel));
}

function changedLoveometerVisible() {
	console.debug('Loveometer visibility changed');

	loveometerVisible = this.checked;

	apply();
	persist();
}

function changedLoveometerLevel() {
	console.debug('Loveometer level changed');

	loveometerVisible = true;
	loveometerLevel = this.value;

	apply();
	persist();

	// enable the loveometer when the user uses the range input
	document.getElementById('lovelevel-visible').checked = true;
}

function apply() {
	let $el = document.getElementById('loveometer');

	$el.style.display = loveometerVisible ? 'block' : 'none';
	$el.querySelector('.gauge').style.height = loveometerLevel / 2 + 50 + '%';
	$el.querySelector('.heart-text').innerHTML = loveometerLevel + '%';
}
