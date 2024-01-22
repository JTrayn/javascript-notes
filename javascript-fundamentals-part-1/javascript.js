/*--------------------------------
 JAVASCRIPT FUNDAMENTALS - PART 1
--------------------------------*/

let num = 100;
const BRIGHT_RED = "#FFFFFF";
let firstName = 'Jayden';
let objectNumber = new Number(500);

// Check if a valid number:
console.log(isNaN(num));

// Math rounding:
console.log(Math.round(1.4000));

//convert to different base (2, HEX, 8 ect)
let asd = 69;
console.log("Convert 69 to base 2: " + asd.toString(2));

// Cutting off to decimal place:
let number = 10.9238492;
console.log(number.toFixed(4));

// How to convert string to number:
let stringNumber = "99";
console.log((stringNumber + 1) + " is a " + typeof stringNumber);
stringNumber = Number(stringNumber) + 1;
console.log(stringNumber + " is a " + typeof stringNumber);

// converts String to number with '+apple' unary operator
let apple = '123';
console.log(apple + " is a " + typeof(+apple));
let x = 5;

// Prompts for user input (prompt returns string my default)
// let a = +prompt("First number?", 1);
// let b = +prompt("Second number?", 6);
// let c = a + b;
// alert("The answer is: " + c);









