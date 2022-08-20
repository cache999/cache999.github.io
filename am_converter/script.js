function convert(value, unit_index, to_AM) {
	if (to_AM === 0) {
		to_AM = -1;
	};
	switch(unit_index) { // actually clean af, i'm proud of this code
	  case 0:
	  	return value * (1.74825 ** to_AM);
	  case 1:
	 	return value * (7.62195 ** to_AM);
	  case 2:
	  	return value * (0.42176 ** to_AM);
	  case 3:
	  	return value * (14.2857 ** to_AM);
	  case 4:
	  	return (value - 37.325)
	  case 5:
	  	value -= 0.16745;
	  	return value * (0.146282 ** to_AM);
	};
};


// oninput functions
function time_metric_f() {
	var to_return = convert(document.getElementById('time_metric').value, 0, 1)
	document.getElementById('time_am').value = parseFloat(to_return.toPrecision(5))
};

function time_am_f() {
	var to_return = convert(document.getElementById('time_am').value, 0, 0)
	document.getElementById('time_metric').value = parseFloat(to_return.toPrecision(5))
};

function length_metric_f() {
	var to_return = convert(document.getElementById('length_metric').value, 1, 1)
	document.getElementById('length_am').value = parseFloat(to_return.toPrecision(5))
};

function length_am_f() {
	var to_return = convert(document.getElementById('length_am').value, 1, 0)
	document.getElementById('length_metric').value = parseFloat(to_return.toPrecision(5))
};

function mass_metric_f() {
	var to_return = convert(document.getElementById('mass_metric').value, 2, 1)
	document.getElementById('mass_am').value = parseFloat(to_return.toPrecision(5))
};

function mass_am_f() {
	var to_return = convert(document.getElementById('mass_am').value, 2, 0)
	document.getElementById('mass_metric').value = parseFloat(to_return.toPrecision(5))
};

function current_metric_f() {
	var to_return = convert(document.getElementById('current_metric').value, 3, 1)
	document.getElementById('current_am').value = parseFloat(to_return.toPrecision(5))
};

function current_am_f() {
	var to_return = convert(document.getElementById('current_am').value, 3, 0)
	document.getElementById('current_metric').value = parseFloat(to_return.toPrecision(5))
};

function temperature_metric_f() {
	var to_return = convert(document.getElementById('temperature_metric').value, 4, 1)
	document.getElementById('temperature_am').value = parseFloat(to_return.toPrecision(5))
};

function temperature_am_f() {
	var to_return = convert(document.getElementById('temperature_am').value, 4, 0)
	document.getElementById('temperature_metric').value = parseFloat(to_return.toPrecision(5))
};

function luminosity_metric_f() {
	var to_return = convert(document.getElementById('luminosity_metric').value, 5, 1)
	document.getElementById('luminosity_am').value = parseFloat(to_return.toPrecision(5))
};

function luminosity_am_f() {
	var to_return = convert(document.getElementById('luminosity_am').value, 5, 0)
	document.getElementById('luminosity_metric').value = parseFloat(to_return.toPrecision(5))
};



function init() {
	document.getElementById('time_am').value = 1
	document.getElementById('length_am').value = 1
	document.getElementById('mass_am').value = 1
	document.getElementById('temperature_am').value = 0
	document.getElementById('current_am').value = 1
	document.getElementById('luminosity_am').value = 0
	time_am_f()
	length_am_f()
	mass_am_f()
	current_am_f()
	temperature_am_f()
	luminosity_am_f()
}