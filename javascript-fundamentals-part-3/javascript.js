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
