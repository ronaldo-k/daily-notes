const chart = document.getElementById('notes-chart');

new Chart('notes-chart', {
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
 * Sets chart's x-axis labels.
 * @param {Array} labels 
 */

function setLabels(labels) {
	chart.labels = labels;
}

/**
 * Sets chart's data.
 * @param {Array} data 
 */

function setData(data) {
	chart.data = data;
}