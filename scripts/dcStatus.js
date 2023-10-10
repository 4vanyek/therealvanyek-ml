	const discordUserId = '658287767490527243';

	// Define status colors
	const statusColors = {
		online: '#43b581',
		idle: '#faa61a',
		dnd: '#f04747',
		offline: '#747f8d'
	};

	// Define status labels
	const statusLabels = {
		online: 'Online',
		idle: 'Idle',
		dnd: 'Do not Disturb',
		offline: 'Offline'
	};


	// Make AJAX request to Lanyard API
	const xhr = new XMLHttpRequest();
	xhr.open('GET', `https://api.lanyard.rest/v1/users/${discordUserId}`);
	xhr.onload = function() {
		if (xhr.status === 200) {
			const data = JSON.parse(xhr.responseText);
			const status = data.data.discord_status;

			const statusLabel = statusLabels[status] || status;
    		// Update HTML to display status and activity
			const statusCircle = document.getElementById('discord-status-circle');
    		statusCircle.setAttribute('fill', statusColors[status]); // set fill color based on status
    		document.getElementById('discord-status').textContent = statusLabel;
    	} else {
    		console.error(error);
    	}
    };
    xhr.send();