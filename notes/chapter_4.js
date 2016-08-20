// Key Concepts & Questions

/*  
(1) How to create and access object properties and methods?
(2) What is the delete keyword and what does the in operator do?
(3) What is mutability?
(4) How to use an object as a map?
(5) What are some properties of arrays?
(6) What is the arguments object?
(7) What is a namespace?
*/

// (1)
// The object is like key:value pairs; you can get properties and methods from it.
// The two most common ways to access properties in JavaScript are 
// with a dot and with square brackets. Both value.x and value[x] access a property 
// on value—but not necessarily the same property.
// Use () to call the method

// object literal.  Think python dictionary.
// braces {} can either describe an object or signal a code block
var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running",
           "television"]
};

// (2)

// delete removes a property off the object
// in checks to see if that property is in an object and returns a boolean

// (3)
// numbers, strings, and Booleans, are all immutable—
// it is impossible to change an existing value of those types, but
// you can combine or alter them to create new objects

// objects are mutable since you can alter their properties
// example of an array and a function that creates pushes a new object on the
// existing journal array
var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}

// (4)

// create the object
var map = {};

// declare the function
// this way you can store properties in the object
// that have spaces and treat it like key:value pairs
function storePhi(event, phi) {
	map[event] = phi;
}

// (5)
[1, 2, 3, 4, 5].indexOf(2);
[1, 2, 3, 4, 5].lastIndexOf(2);
[1, 2, 3, 4, 5].slice(2, 5);

// strings have properties too!
var string = 'abc';
console.log(string.length);
console.log(string.charAt(0));

// (6)
// when a variable is called, a special variable named arguments
// is added to the environment in which the function body runs.
// This variable refers to an object that holds all the arguments

// (7)
// Having too many global variables pollutes the namespace.
// You could overrite exist variables with too many of them.
// The solution is to create an object that holds these variables
// and the variables contained therein serve to form a namespace.