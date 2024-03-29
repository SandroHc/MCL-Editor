import interact from "interactjs";
import { getCharacter, persistCharacters } from "./characters.js";
import { bubble, persistBubble } from "./bubbles";


let zIndexCurrent = 0;

export function loadCanvas() {
	interact('.draggable')
		.draggable({
			inertia: true,
			modifiers: [
				interact.modifiers.restrict({
					restriction: 'parent',
					endOnly: true,
					elementRect: {
						top:    0.5,
						left:   0.5,
						bottom: 0.5,
						right:  0.5,
					}
				}),
			],

			listeners: {
				start(event) {
					event.target.style.zIndex = ++zIndexCurrent
				},

				move(event) {
					let isActor = event.target.className.indexOf('actor') !== -1;
					if (isActor && !event.shiftKey)
						event.dy = 0; // Reset y-pos if the SHIFT key is not being pressed
					return dragUpdatePos(event, event.target);
				},

				end(event) {
					let isActor = event.target.className.indexOf('actor') !== -1;
					if (isActor) {
						persistCharacters();
					} else {
						// Assume we're moving the bubble
						persistBubble();
					}
				}
			}
		})
		.on('doubletap', event => {
			let actorId = event.target.dataset.actor;
			if (!actorId)
				return;

			let actor = getCharacter(actorId);
			actor.flipped = !actor.flipped;
			persistCharacters();

			dragUpdatePos(event, event.currentTarget);
		});
}

function dragUpdatePos(event, target) {
	let characterId = event.target.dataset.actor;
	let info = characterId ? getCharacter(characterId) : bubble;

	let x = info.pos.x + (event.dx || 0);
	let y = info.pos.y + (event.dy || 0);

	// Translate the element
	target.style.transform = `translate(${x}px, ${y}px) scaleX(${info.flipped ? -1 : 1})`;

	// Update the position attributes
	info.pos.x = x;
	info.pos.y = y;
}
