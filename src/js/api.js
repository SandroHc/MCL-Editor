import CryptoJS from "crypto-js";

export const api = {
	player: 'https://api3.{site}/v2/player/user',
	profile: 'https://api3.{site}/v2/profile/find/{user}?withEpisodes=1',
	assets: 'https://assets3.{site}/avatarpart/web/portrait/501-7339a780ecce8c7e~1526642175.png'
};


export function getPlayerInfo(region, username) {
	return new Promise((resolve, reject) => {
		if (!username) {
			reject("invalid username");
			return;
		}

		let timestamp = Date.now().toString();
		let message = [
			'anonymous', // Private key
			'GET',
			'https://api3.' + region.link + '/v2/profile/find/' + username, timestamp
		];

		let hash = CryptoJS.HmacSHA1(message.join('+'), 'anonymous'); // (message, passphrase)


		// API: https://api3.amordoce.com/v2/profile/find/{username}
		fetch(`https://mcl.sandrohc.net/${region.id}/v2/profile/find/${username}`, {
			headers: new Headers({
				'X-Beemoov-Application': 'anonymous',
				'X-Beemoov-Signature': hash,
				'X-Beemoov-Timestamp': timestamp,
			})
		})
			.then(response => {
				if (!response.ok) throw new Error(response.status)
			})
			.then(data => data.json())
			.then(data => {
				resolve(data.data);
			}).catch(error => {
			reject(error);
		});
	})
}

export function getPlayerAvatar(region, playerId) {
	return new Promise((resolve, reject) => {
		if (!playerId) {
			reject("invalid id");
			return;
		}

		// API: http://api3.amordoce.com/v2/avatar/{player_id}
		fetch(`https://mcl.sandrohc.net/${region.id}/v2/avatar/${playerId}`, {
			headers: new Headers({
			})
		})
			.then(response => {
				if (!response.ok) throw new Error(response.status)
			})
			.then(data => data.json())
			.then(data => {
				resolve(data.data);
			}).catch(error => {
			reject(error);
		});
	})
}
