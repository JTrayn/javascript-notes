/*--------------------------------
 JAVASCRIPT FUNDAMENTALS - PART 3
--------------------------------*/

/* ----- Console methods -----*/
// https://developer.mozilla.org/en-US/docs/Web/API/console/time_static

// warnings / errors
let value = 20;
console.log("Hello world!");
console.warn("this is a warning");
console.error("this is an error");
// Only fires when assertion fails
console.assert(value === 21, "Value is not 21");
// Timing a process. timeLog will provide time midway through process.
console.time("adding to ten thousand");
let counter = 0;
for (let i = 0; i < 10000; i++) counter++;
console.log(counter);
console.timeLog("adding to ten thousand");
for (let i = 0; i < 10000; i++) counter++;
console.log(counter);
console.timeEnd("adding to ten thousand");

/* ----- Functions: Reusable blocks of code ---------------------*/
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions

// Creating and calling a function. 'Hoisting' means function declaration is moved to
// start of scope, and therefore I can call the function before it's decleared.
helloWorld("BAZINGA!");
function helloWorld(message = "default message") {
    console.log(message);
}
helloWorld();

// Default function call. Standard behaviour of event handling means that when creating
// an event, javascript will create an event object that provides information associated
// with that event (such as the event target). Therefore 'e' captures that object, and 
// is used to reference the calling object with e.target (title).
let title = document.querySelector(".title");
title.addEventListener("mouseover", changeColor);
function changeColor(e) {
    if(e.target.style.color != "red"){
        e.target.style.color = "red";
    } else {
        e.target.style.color = "black";
    }
}
// Anonymous function call
title.addEventListener("mouseout", function (e) {
    if(e.target.style.color != "red"){
        e.target.style.color = "red";
    } else {
        e.target.style.color = "black";
    }
});
// Arrow function call.
title.addEventListener("click", (e) => {
    if(e.target.style.background != "cyan") e.target.style.background = "cyan";
    else e.target.style.background = "white";
});
// Utilising the 'e' object allows me to easily reuse functions for any element
let paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", changeColor);
paragraph.addEventListener("mouseout", changeColor);

// Using short form function with single line return statement. Omitting return.
// Map iterates through each value of the array and performs function.
let original = [1, 2, 3, 4, 5];
let doubled = original.map(item => item * 2); // ((item) => {return item * 2;})
console.log(doubled);
// Same thing with seperate function:
let og = [3, 6, 9, 12, 15];
let ng = og.map(triple);
console.log(ng);
function triple(item) {
    item = item * 3;
    return item;
}
// Another arrow function example
let textbox = document.querySelector("#textbox");
textbox.addEventListener("keydown", (e) => console.log(`You pressed the ${e.key} key`));

/* --------------- Return Values --------------- */
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values

// String.replace() returns a new String.
let weather = "The weather is warm";
let newWeather = weather.replace("warm", "cold");
console.log(newWeather);
// Cool custom String.replace() function that I made
function replaceString(input = "", oldString = "", newString = "") {

    let matchCounter = 0;
    let startIndex = 0;

    let inputArray = input.split("");
    let resultArray = inputArray;
    let oldStringArray = oldString.split("");
    let newStringArray = newString.split("");

    for (let i = 0; i < input.length; i++) {
        if(inputArray[i] === oldStringArray[0 + matchCounter]) {
            matchCounter++;
            if(startIndex == 0) {
                startIndex = i;
            }
        } else {
            matchCounter = 0;
            startIndex = 0;
        }
        if(matchCounter == oldString.length) {
            resultArray.splice(startIndex, oldString.length, ...newStringArray);
            i = startIndex + newStringArray - 1;
            matchCounter = 0;
        }
    }
    return resultArray.join("");

}
let myString = "Steph is really hungry";
console.log(replaceString(myString, "hungry", "TIRED"));
//------------------------------------------------------------------------------------
// Examples of return functions. I've thrown an error in squareNumber()
function squareNumber(number) {
    
    if((typeof number === 'number') && !isNaN(number)) {
        return number * number;
    } else {
        let e = new Error("Error. Parameter needs to be a number.");
        e.name = "Error 693: Not a number";
        throw e;
    }
}
function exponentNumber(number, exponent) {
    return number ** exponent; 
}
// Using try/catch exception handling. Decides whether to log the error or the message
try {
    let squareResult = squareNumber("10"); // throws error
    console.log(`The square of 10 is: ${squareResult}`);
} catch (e) {
    console.error(`${e.name}\n${e.message}`);
}
console.log(`69 to the power of 3 is: ${exponentNumber(69, 3)}`);
//-------------------------------------------------------------------------------------

// Function expressions:
function sayHi() {
    console.log("Greetings!");
}
let hello = sayHi;
hello();

let helloAgain = function() {
    console.log("Greetings Again!!!");
}
helloAgain();
console.log(helloAgain);

// Callback functions:
function chooseMessage(age, old, young) {
    if(age >= 18) {
        old();
    } else {
        young();
    }
}

function oldMessage() {
    console.log("You are old!");
}
function youngMessage(message) {
    console.log(message);
}
chooseMessage(15, oldMessage, youngMessage.bind(null, "You're young!"));
chooseMessage(12, oldMessage, () => youngMessage("You're super young"));

// Arrow functions
let sumNumbers = (first, second) => first + second;
let coolNumbers = (first, second) => {
    first++
    second++
    return (first + second) / 2;
};
console.log(sumNumbers(5, 10)); // return 15
console.log(coolNumbers(5, 10)); // return 8.5

// arrow function with ? operator
let age = 10;
let welcome = (+age >= 18) ?
    () => console.log("Welcome adult!") :
    () => console.log("Welcome child!");
welcome();
//-------------------------------------------------------------------
// JAVASCRIPT CALL STACK

// capitalize
function capitalizeFirst(word){
    return word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase();
}
console.log(capitalizeFirst("jayden"));

function returnLastCharacter(word) {
    return word.charAt(word.length - 1);
}
console.log(returnLastCharacter("hello"));


