const apiKey = "xJC4zpyIQjInEzpobewugwnAViPk952Jg42lYckzhks9DRUOKI";
const button = document.getElementById('load-data-input');

button.addEventListener('click', fetchPostNotes);

async function fetchPostNotes(buttonActionID) {
	const blogName = document.getElementById('username-input').value;

	try {
		const response = await fetch("http://api.tumblr.com/v2/blog/" + blogName + ".tumblr.com/posts?api_key=" + apiKey + "&notes_info=true");
		
		// If rate limit is exceeded
		if (response.status == 429) {
			// Limit exceeded error
			return;
		}

		const data = await response.json();
		console.log(data);
	} catch (err) {
		// Unknown error
		console.log("Unknown error caught");
	}
}