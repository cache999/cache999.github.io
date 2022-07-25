var ja_zero = 1658505600;
var blink = 0.527;
var minute = 613 * blink;
var hour = 5 * minute;
var day = 25 * hour;
var week = 9 * day;
var month = 72 * day;
var year = 12 * month;
var ache = 487 * year;


function unix_to_ja_array(date) {
	var JA_array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
	//mb, b, min, h, day, week, month, year, ache, A?J bool
	JA_timestamp = date - ja_zero;
	if (JA_timestamp < 0) { //BJ
		JA_timestamp = JA_timestamp * -1;
		JA_array[9] = 0;
	};
	leftovers = 0;
	JA_array[8] = Math.floor(JA_timestamp / ache);
	leftovers = JA_timestamp % ache;
	JA_array[7] = Math.floor(leftovers / year);
	leftovers = leftovers % year;
	JA_array[6] = Math.floor(leftovers / month);
	leftovers = leftovers % month;
	JA_array[5] = Math.floor(leftovers / week);
	JA_array[4] = Math.floor(leftovers / day);
	leftovers = leftovers % day;
	JA_array[3] = Math.floor(leftovers / hour);
	leftovers = leftovers % hour;
	JA_array[2] = Math.floor(leftovers / minute);
	leftovers = leftovers % minute;
	JA_array[1] = Math.floor(leftovers / blink);
	leftovers = leftovers % blink;
	JA_array[0] = Math.floor(leftovers / (blink / 1000))

	return JA_array
}

function fix_digits(int, num) { // add digits to the left until it works
	return
}

function JA_array_to_str(a) {
	var period = 'BJ';
	if (a[9]) {
		period = 'AJ';
	}
	return a[3] + ":" + a[2] + ":" + a[1] + "." + a[0] + " // " + a[4] + "/" + a[6] + "/"+ a[7] + "/"+ a[8] + " " + period;
}

function main_loop() {
	var jaa = unix_to_ja_array(Date.now() / 1000);
	document.getElementById("clock").innerHTML = JA_array_to_str(jaa);
	setInterval(main_loop, 1); 
}

