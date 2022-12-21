// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date

window.onload = displayClock();
function displayClock() {
	const monthNames = [
		'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
	];

	const date = new Date();
	const month = monthNames[date.getMonth()];
	const day = date.getDate();
	const min = date.getMinutes().toString().padStart(2, '0');
	const sec = date.getSeconds().toString().padStart(2, '0');
	let hour = date.getHours().toString().padStart(2, '0');
	let ampm = '';

	if (CONFIG.twelveHourFormat) {
		ampm = hour >= 12 ? ' pm' : ' am';
		hour = hour % 12;
		hour = hour === 0 ? 12 : hour;
	}

	document.getElementById('hour').innerText = hour;
	document.getElementById('minutes').innerText = min;
	document.getElementById('seconds').innerText = sec + ampm;

	document.querySelectorAll('.separator').forEach((x) => x.innerHTML = ' : ');

	document.getElementById('month').innerText = month;
	document.getElementById('day').innerText = day;

	setTimeout(displayClock, 1000);
}
