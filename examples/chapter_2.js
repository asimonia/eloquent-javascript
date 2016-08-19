for(var str = '#'; str.length <= 7; str += '#') {
	console.log(str);
}


for (var i = 1; i <= 100; i++) {

	if (i % 3 == 0 && i % 5 != 0) {
		console.log('Fizz');
	} else if (i % 3 != 0 && i % 5 == 0) {
		console.log('Buzz');
	} else if (i % 3 == 0 && i % 5 == 0) {
		console.log('FizzBuzz');
	} else {
		console.log(i);
	}
}


var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
