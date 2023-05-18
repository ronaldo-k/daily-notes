noteChart = document.getElementById('notes-chart');

new Chart(noteChart, {
type: 'line',
data: {
	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	datasets: [{
	label: '# of Votes',
	data: [12, 19, 3, 5, 2, 3],
	borderWidth: 1
	}]
},
options: {
	scales: {
	y: {
		beginAtZero: true
	}
	}
}
});

/**
 * Outputs a list of evenly-spaced time labels for the chart.
 * @param {Number}	interval	Interval between consecutive labels in minutes.
 * @returns {Array}	result  	Array of strings containing time labels in increasing order.
 */
function getLabels(interval) {
	let startTime = 0, arraySize = 1440/interval;
	const result = new Array(arraySize);

	for (let i = 0; i < arraySize; i++) {
		const label = String(startTime / 60) + String(startTime);
		result[i] = label;

		startTime += interval;
	}

	return result;
}