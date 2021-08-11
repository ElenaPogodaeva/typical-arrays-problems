
exports.min = function min (array) {
	if ((arguments.length == 0) || (array.length == 0)) {
		return 0;
	}
	let minValue = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] < minValue) 
			minValue = array[i];
	}
   return minValue;
}

exports.max = function max (array) {
	if ((arguments.length == 0) || (array.length == 0)) {
		return 0;
	}
	let maxValue = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] > maxValue) 
			maxValue = array[i];
	}
   return maxValue;
}

exports.avg = function avg (array) {
	if ((arguments.length == 0) || (array.length == 0)) {
		return 0;
	}
  let avgValue = array.reduce((sum, current) => sum + current, 0) / array.length;
  /*for (let i = 0; i < array.length; i++) {
	  sum += array[i];
  }
  let avgValue = sum / array.length; */
  return avgValue;
}
