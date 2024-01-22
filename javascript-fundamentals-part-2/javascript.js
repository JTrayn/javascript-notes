/*--------------------------------
 JAVASCRIPT FUNDAMENTALS - PART 2
--------------------------------*/

/* ----- Javascript - Datatypes ---------------------*/
// https://javascript.info/types

// BigInt - New datatype added recently for arbitrary length.
let bigNumber = 23490n;
console.log(bigNumber);
console.log(typeof(bigNumber));
// convert to String and then number (can't directly convert to number)
let number = +bigNumber.toString();
console.log(number);

// Embedded operations with `backtick` quotes in a string.
let firstName = "cool";
let secondName = "jayden";
// Embedded vs unembedded
console.log(`My name is ${firstName + secondName}`);
console.log("My name is " + firstName + secondName);

/* ----- Handling text - Strings in Javascript ---------*/
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings

// Backtick `` quotes can be multi-line
let string = `This is a poem:

Hello world.

The end`;
console.log(string);

// Escape characters for new lines / quotes
console.log("I've got the coolest name");
console.log('I\'ve got the coolest\nname');

// converting numbers -> string and vice versa
console.log(typeof Number('100'));
console.log(typeof String(100));

/*----- Javascript String Methods --------------*/
// https://www.w3schools.com/js/js_string_methods.asp

let person = "Jayden Traynor";
console.log("\nString Methods on string 'Jayden Traynor'\n\n");
console.log(person.length); // 6
console.log(person.charAt(4)); // n
console.log(person.charCodeAt(4)); // UTF-16 code 0-65535 https://asecuritysite.com/coding/asc2
console.log(person.slice(0, 6)); // slice section. End not included.
console.log(person.toUpperCase());
console.log(person.toLowerCase());
// trim start and end of string
console.log("  white space  ".trim()); // trim outside whitespace
console.log("   white space   ".trimEnd()); // trimStart() also works
// padStart and parEnd let us pad until we reach a certain character length.
console.log(person.padStart(20, "_"));
console.log(person.padEnd(20, "_"));
console.log(person.repeat(2)); // repeat string
// replacing parts of string
console.log(person.replace("Jayden", "Bob")); // replaces only first instance.
console.log(person.replace(/jayden/i, "Bob")); // i flag makes it case-insensitive
console.log(person.replace(/a/g, "z")); // g flag makes replace all instances
console.log(person.replaceAll(" ", "")); // no need for regular exp
// converting string to array
console.log(person.split("")); // create array, splitting on value
console.log(person.split(" ")); // splits at " "
console.log(person.split("a")); // default behaviour removes "a" on split
console.log(person.split(/(?=a)/)) // positive lookahead reg exp, split after a
console.log(person.split(/(?<=a)/)) // positive lookbehind reg exp, split before a

/*----- MDN Web docs - String -----------------*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// includes() searches for string in text and returns boolean
console.log(person.includes("jayden"));
console.log(person.toLowerCase().includes("jayden")); // case insensitive

/*----- Javascript: Comparisons ----------------*/
// https://javascript.info/comparison

// String comparison
console.log("jayden" > "traynor");
console.log("2" == 2); // true. Strings evaluated as numbers.
console.log("002.0" == 2); // also true.
console.log(undefined == null); // always returns true
console.log(undefined === null); // always false
/* In comparisons, undefined evaluates to NaN and null evaluates to 0. However
undefined and null will only ever == each other, and never anything else like 0. */
console.log(null == 0); // always false due to ^ despite evaluating to 0.
console.log(undefined == 0); // false because evaluates to NaN.

/*----- Javascript: if, else, else if ----------------*/
// https://www.w3schools.com/js/js_if_else.asp

let value = 40;
if (value > 50) {
    console.log("Value is huge!");
} else if (value > 30) {
    console.log("Value is kinda small!");
} else {
    console.log("value is small!");
}

/*----- Javascript Logical Operators ----------------*/
// https://javascript.info/logical-operators

/*  || OR
    && AND
    !  NOT
    ?? Nullish Coalescing */
    
console.log(false || true); // true
console.log(false && true); // false
console.log(false != true); // true
console.log(0 && 1); // false (0)
// With ||, it returns the first truthy value, or the last falsey value if no truthy.
// Both names are "" which is falsy, therefore it chooses "Anonymous"
let userFirstName = "";
let userSecondName = "";
console.log((userFirstName + userSecondName) || "Anonymous");
console.log(Boolean(0)); // convert 0/1 to boolean true/false

/*----- Making decisions in your code conditionals ----------------*/
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals

// Illustrating the use of conditionals with HTML code / user interaction
let dropdownMenu = document.querySelector("#dropdown");
let paragraph = document.querySelector("p");
dropdownMenu.addEventListener("change", setWeather); // setWeather() would pass the return of the function instead of a reference to the function
function setWeather() {
    let weather = dropdownMenu.value;
    if(weather === "Cloudy"){
        paragraph.textContent = "It is very cloudy today!" // .textContent is a property of p, not a method.
    } else if(weather === "Rainy") {
        paragraph.textContent = "It is very rainy today!"
    } else if(weather === "Sunny") {
        paragraph.textContent = "It is very sunny today!"
    } else {
        paragraph.textContent = "";
        console.log("Nothing selected");
    }
}
// Anything other than 0, false, NaN, null, undefined, "" is true.
let orange = "orange";
if(orange){console.log("orange is true")};
// negating expressions
if(!(orange == "orange")){console.log("This won't log")};

// Switch statements:
let color = "green";
switch (color) {
    case "blue":
        console.log("The color is blue");
        break;
    case "red":
        console.log("The color is red");
        break;
    case "green":
        console.log("The color is green");
        break;
    default:
        console.log("The color is something weird");
        break;
}
// Ternary operator. Is birthday true or false?
let isBirthday = true;
isBirthday 
    ? console.log("Happy birthday!") 
    : console.log("Hello!");

// Using switch statements with HTML
let colorMenu = document.querySelector("#dropdownTheme");
let html = document.querySelector("html");
colorMenu.addEventListener("change", changeColor);
function changeColor() {
    switch(colorMenu.value) {
        case "white":
            html.style.backgroundColor = "white";
            html.style.color = "black";
            break;
        case "black":
            html.style.backgroundColor = "black"; 
            html.style.color = "white";
            break;
        default:
            console.log("This shouldn't be happening...");
    }
}

/*----- Switch statements -----*/
// https://javascript.info/switch




























