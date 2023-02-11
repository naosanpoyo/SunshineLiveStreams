const { clientId, clientSecret, gameId } = settings.twitch;

function getTwitchAuthorization() {
	 	let url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;

    return fetch(url, {
    method: "POST",
    })
    .then((res) => res.json())
    .then((data) => {
        return data;
    });
}

async function getStreams() {
	 	console.log(settings);
	 	const endpoint = `https://api.twitch.tv/helix/streams?game_id=${gameId}`;

    let authorizationObject = await getTwitchAuthorization();
    let { access_token, expires_in, token_type } = authorizationObject;

    token_type =
    token_type.substring(0, 1).toUpperCase() +
    token_type.substring(1, token_type.length);

    let authorization = `${token_type} ${access_token}`;

    let headers = {
    authorization,
    "Client-Id": clientId,
    };

    fetch(endpoint, {
    headers,
    })
    .then((res) => res.json())
    .then((data) => renderStreams(data));
}

function renderStreams(data) {
	 	console.log(JSON.stringify(data));
    let { data: streams } = data;
    let streamsContainer = document.querySelector("div.streams");
		let multiStreamUrl = 'https://multistre.am/';

    streams.forEach((stream) => {
			let { thumbnail_url: thumbnail, title, user_name, user_login } = stream;
			let hdThumbnail = thumbnail
					.replace("{width}", "1280")
					.replace("{height}", "720");
			streamsContainer.innerHTML += `

			<div class="stream-container">
					<a href="https://www.twitch.tv/${user_login}" target="_blank" rel="noopener noreferrer">
						 <img src="${hdThumbnail}" />
						 <h2>${title}</h2>
						 <p>${user_name}</p>
					</a>
			</div>

			`;
			multiStreamUrl += `${user_login}/`;
    });
		streamsContainer.innerHTML += `<button class="multi-stream-button" type=“button” onclick="window.open('${multiStreamUrl}')">複窓する</button>`;
}

getStreams();