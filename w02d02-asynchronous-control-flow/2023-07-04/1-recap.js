// Different styles of writing functions
functionDeclaration(); // This is fine because of hoisting, but tricky so we avoid function declarations
function functionDeclaration(args) {
  console.log("This is a function declaration");
}

function functionDeclaration(args) { // Function declarations can also be overwritten
  console.log("This is a hijacked function declaration");
}

// functionExpression(); // This gives an error because function expressions are not hoisted
const functionExpression = function (args) {
  console.log("This is a function expression");
};

const arrowFunctionExpression = (args) => {
  console.log("This is an arrow function expression");
};

functionExpression()
arrowFunctionExpression();

const returnsFive = (args) => { return 5 };
// is the same as:
const returnsFiveImplicitReturn = (args) => 5; // Omitting the braces allows us to omit "return" and get same functionality

console.log(returnsFive());
console.log(returnsFiveImplicitReturn());

// Callback recap

// Higher order functions - either takes in a function as an argument, or returns a function

const add = (a, b) => a + b // Takes in numbers, gives us flexibility with inputting data

const addAndDoSomething = (a, b, doSomething) => { // Takes in a function, gives us flexibility with the action we take afterwards
  const sum = a + b;
  doSomething(sum);
}

const printToConsole = (thingToPrint) => console.log(thingToPrint);

console.log("start");
addAndDoSomething(1, 1, printToConsole); // printed immediately - not asynchronous even though it takes a callback

const someArray = [];
const addToArray = (element) => someArray.push(element);

addAndDoSomething(1, 1, addToArray);
console.log("finish");
