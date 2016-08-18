function range(start, end, step) {
	if (step == null) step = 1;
	var array = [];

	if (step > 0) {
		for (var i = start; i <= end; i += step)
			array.push(i);
	} else {
		for (var i = start; i >= end; i += step)
			array.push(i);
	}
	return array;
}

function sum(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++)
		total += array[i];
	return total;
}

function reverseArray(array) {
	var output = [];
	for (var i = array.length - 1; i >= 0; i--)
		output.push(array[i]);
	return output;
}

function reverseArrayInPlace(array) {
	for (var i = 0; i < Math.floor(array.length / 2); i++) {
		var old = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = old;
	}
	return array;
}


function arrayToList(array) {
	var list = null;
	for (var i = array.length - 1; i >= 0; i--)
		list = {value: array[i], rest: list};
	return list;
}


function listToArray(list) {
	var array = [];
	for (var node = list; node; node = node.rest)
		array.push(node.value);
	return array;
}


function prepend(value, list) {
	return {value: value, rest: list};
}

function nth(list, n) {
	if (!list)
		return undefined;
	else if (n == 0)
		return list.value;
	else
		return nth(list.rest, n - 1);
}

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}