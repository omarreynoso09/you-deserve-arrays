const prompt = require('prompt-sync')({sigint: true});

// first prompt the user for the array, 
let userInput = JSON.parse(prompt("enter an array"));

// checking for userInput = a numbe  


if (typeof userInput[0] === "number") {

    console.log("The first item of an array is a number");

} else {

    console.log("The first item of the array is not a number");

}