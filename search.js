const { key, query } = settings.youtube;

// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  //$('#search-button').attr('disabled', false);
	search();
}

// Search for a specified string.
function search() {
  var request = gapi.client.youtube.search.list({
    q: query,
		key: key,
    part: 'snippet',
		eventType: 'live',
		type: 'video',
		maxResults: 50,
  });

  request.execute(function(response) {
    console.log(JSON.stringify(response.result));
		str = '';
		const { items } = response.result;
		if (items.length) {
			items.forEach (item => {
				const { videoId } = item.id;
				const { title, thumbnails, channelTitle } = item.snippet;
				str += `
				<div class="stream-container">
					<a href="https://www.youtube.com/live/${videoId}" target="_blank" rel="noopener noreferrer">
						 <img src="${thumbnails.medium.url}" />
						 <h2>${title}</h2>
						 <p>${channelTitle}</p>
					</a>
    		</div>`;
			});
		}
    $('#search-container').html(str);
  });
}