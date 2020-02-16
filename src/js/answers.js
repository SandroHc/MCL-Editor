import { messages } from './lang'

const DEFAULT_ANSWERS = messages['answers_default'];

let answers = undefined;

export function init() {
	load();

	document.getElementById('answers-edit').addEventListener('keyup', changed);
}

function load() {
	answers = localStorage.getItem('answers') || DEFAULT_ANSWERS;

	let $el = document.getElementById('answers-edit');
	$el.textContent = answers;

	apply();
}

function changed() {
	answers = this.value;
	apply();
	persist();
}

function apply() {
	let $el = document.getElementById('answers');

	if (answers !== '') {
		let answersHtml = answers.replace(/\n/g, '</span></li><li class="response"><span class="text">');

		$el.style.display = 'block';
		$el.innerHTML = '<li class="response"><span class="text">' + answersHtml + '</span></li>';

		// add event listener for when the user clicks an answer
		document.querySelectorAll('.response').forEach(el => {
			el.addEventListener('click', e => {
				e.target.classList.toggle('checked');
			});
		});

		// display the avatar
		document.querySelector('.player').style.display = 'block';
	} else {
		// hide the answers & avatar
		$el.style.display = 'none';
		document.querySelector('.player').style.display = 'none';
	}
}

function persist() {
	if (answers) {
		localStorage.setItem('answers', answers);
	} else {
		localStorage.removeItem('answers');
	}
}
