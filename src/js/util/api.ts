import hmacSHA1 from 'crypto-js/hmac-sha1';

import { region } from '../account.js'

function getApiHeaders(region, endpoint) {
	const privateKey = 'anonymous';

	let timestamp = Date.now().toString();
	let message = [
		privateKey,
		'GET',
		endpoint,
		timestamp
	].join('+');
	let hash = hmacSHA1(message, privateKey).toString(); // (message, passphrase)

	return new Headers({
		'Accept': 'application/json',
		'X-Beemoov-Application': privateKey,
		'X-Beemoov-Signature': hash,
		'X-Beemoov-Timestamp': timestamp,
	});
}

function get(endpoint) {
	endpoint = `https://api3.${region.link}/v2/` + endpoint;

	return fetch(endpoint, {
		headers: getApiHeaders(region, endpoint)
	})
		.then(response => {
			if (!response.ok) throw new Error(response.status);
			return response;
		})
		.then(data => data.json());
}

export function getPlayerInfo(username) {
	return new Promise((resolve, reject) => {
		if (!username) {
			reject("invalid username");
			return;
		}

		// API: https://api3.amordoce.com/v2/profile/find/${username}?withEpisodes=1
		// API: https://mcl.sandrohc.net/${region.id}/v2/profile/find/${username}?withEpisodes=1
		return get('profile/find/' + username + '?withEpisodes=1')
			.then(data => resolve(data.data))
			.catch(error => reject(error))
	})
}

export function getPlayerAvatar(playerId) {
	return new Promise((resolve, reject) => {
		if (!playerId) {
			reject("invalid id");
			return;
		}

		// API: http://api3.amordoce.com/v2/avatar/${playerId}
		// API: https://mcl.sandrohc.net/${region.id}/v2/avatar/${playerId}
		return get('avatar/' + playerId)
			.then(data => resolve(data.data))
			.catch(error => reject(error))
	})
}
