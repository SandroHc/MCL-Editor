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

		// let authApp = 'anonymous';
		// let authSig = hash;
		// let authTime = timestamp;

		let authApp = '4e077f9f163167f625c84c541a0d7b7c1e6c892733dcd59ed59f0a9c98178e25';
		let authSig = 'b64bed658c8253030ece550fcae76097e1e09f9f';
		let authTime = '1581727516934';

		// API: https://api3.amordoce.com/v2/profile/find/${username}?withEpisodes=1
		// API: https://api3.${region.link}/v2/profile/find/${username}?withEpisodes=1
		// API: https://mcl.sandrohc.net/${region.id}/v2/profile/find/${username}?withEpisodes=1
		fetch(`https://api3.${region.link}/v2/profile/find/${username}?withEpisodes=1`, {
			headers: new Headers({
				'Accept': 'application/json',
				'X-Beemoov-Application': authApp,
				'X-Beemoov-Signature': authSig,
				'X-Beemoov-Timestamp': authTime,
			})
		})
			.then(response => {
				if (!response.ok) throw new Error(response.status);
				return response;
			})
			.then(data => data.json())
			.then(data => {
				resolve(data.data);
				resolve(data);
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

		// API: http://api3.amordoce.com/v2/avatar/${playerId}
		// API: http://api3.${region.link}/v2/avatar/${playerId}
		// API: https://mcl.sandrohc.net/${region.id}/v2/avatar/${playerId}
		fetch(`http://api3.${region.link}/v2/avatar/${playerId}`, {
			headers: new Headers({
				'Accept': 'application/json',
			})
		})
			.then(response => {
				if (!response.ok) throw new Error(response.status);
				return response;
			})
			.then(data => data.json())
			.then(data => {
				resolve(data.data);
			}).catch(error => {
			reject(error);
		});
	})
}
