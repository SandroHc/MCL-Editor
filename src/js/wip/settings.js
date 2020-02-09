
export function init() {
	document.getElementById('clear-cache').addEventListener('click', clearConfigs);
}

function clearConfigs() {
	localStorage.clear();
	window.location.reload();
}
