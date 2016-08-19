// Key Concepts & Questions

/*  
(1) How do functions help us?
(2) What about the scope of functions?
(3) Two things to be aware of when making calls to functions. (infinite recurision) (if statements)
(4) Closure
(5) Recursion
(6) Growing functions
(7) Side effects

*/

// Functions:
// functions wrap a piece of a program into a container
// functions reduce repetition, serves as documentation, isolates programs from each other

// Scope:
// variables inside the function are local in scope to them.  
// variables outside the function are global in scope to them.
// if you want to access a variable that is in the global scope,
// you can do it in the function, but not the other way around 
// variables that are local to a function are not visible from the outside
// they are recreated every time a function is called


// functions also have several levels of locality
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(2);
  mountain(15);
  flat(22);
  mountain(5);
  return result;
};

console.log(landscape());

// functions have optional parameters and a body
var square = function(x) {
	return x * x;
};

// call square with the argument 2
console.log(square(2));	// → returns a number 4

var makeNoise = function() {
	console.log("Blah!");
};

// call makeNoise with no args

console.log(makeNoise());	// → executes Blah! and returns undefined

// Another way to declare functions
// It is moved to the bottom because top-down point of flow doesn't matter
console.log("The future says:", future());

function future() {
  return "We STILL have no flying cars.";
}


// Do NOT put functions inside of if statements
function example() {
  function a() {} // Okay
  if (something) {
    function b() {} // Danger!
  }
}

// infinite recursion DO NOT do this
// VM1591:4 Uncaught RangeError: Maximum call stack size exceeded
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");

// Closure
// Being able to reference a specific instance of a local variables in an
// enclosing function--is called closure.  A function closes over
// some local variables is called a closure.

// the function keyword freezes the code in the body and wraps it in a package
// So when you read return function(...) {...}, think of it as returning a 
// handle to a piece of computation, frozen for later use.
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));
// → 10


// Recursion
// It is perfectly okay for a function to call itself, as long as it takes care not to overflow the stack.

function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));
// → 8
