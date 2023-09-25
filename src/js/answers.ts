import { messages } from './lang.js'

const DEFAULT_ANSWERS = messages['answers_default'];

let answers = DEFAULT_ANSWERS;

export function loadAnswers() {
	answers = localStorage.getItem('answers') || DEFAULT_ANSWERS;

	const answersEditor = document.getElementById('answers-edit')! as HTMLTextAreaElement;
	answersEditor.textContent = answers;
	answersEditor.addEventListener('keyup', answersChanged);

	apply();
}

function answersChanged() {
	const answersEditor = document.getElementById('answers-edit')! as HTMLTextAreaElement;
	answers = answersEditor.value;

	apply();
	persistAnswers();
}

function apply() {
	const answersCanvasElement = document.getElementById('answers')!;
	const avatarElement = document.getElementById('player')!;

	if (!answers) {
		// Hide the answers & avatar section
		answersCanvasElement.style.display = 'none';
		avatarElement.style.display = 'none';
		return;
	}

	// Clear previous answers
	let prevAnswers = [];
	while (answersCanvasElement.lastChild) {
		const el = answersCanvasElement.lastElementChild as HTMLElement;
		const wasSelected = el.classList.contains('checked');
		prevAnswers.unshift(wasSelected); // add at the start of the list

		answersCanvasElement.removeChild(answersCanvasElement.lastChild);
	}

	let i = 0;
	for (const answer of answers.split('\n')) {
		const answerInnerElement = document.createElement('span');
		answerInnerElement.classList.add('text');
		answerInnerElement.textContent = answer;

		const answerElement = document.createElement('li');
		answerElement.classList.add('response');
		answerElement.appendChild(answerInnerElement);
		answerElement.addEventListener('click', () => answerElement.classList.toggle('checked'));

		// Keep previous answers checked
		if (prevAnswers.length > i && prevAnswers[i]) {
			answerElement.classList.add('checked');
		}

		answersCanvasElement.appendChild(answerElement);

		i++;
	}

	// Display the avatar & answers section
	avatarElement.style.display = 'block';
	answersCanvasElement.style.display = 'block';
}

function persistAnswers() {
	if (answers) {
		localStorage.setItem('answers', answers);
	} else {
		localStorage.removeItem('answers');
	}
}
