function min(a, b) {
  
  if (a > b)
    return b;
  else
    return a;
}


function isEven(n) {

	if (n == 0)
		return true;
	else if (n == 1)
		return false;
	else if (n < 0)
		return isEven(-n);
	else
		return isEven(n - 2);
}


function countChar(str, char) {
  var counter = 0;
  
  for (x = 0; x < str.length; x++) {
    if (str.charAt(x) == char)
      counter++;
  }
  
  return counter;
}
