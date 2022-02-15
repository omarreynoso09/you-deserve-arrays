const prompt = require('prompt-sync')({sigint: true});

// first prompt the user for the array, 
let userInput = JSON.parse(prompt("enter an array"));

// checking for lenth over 10 or under 

if (userInput.length >= 10) {

    console.log(true);
    console.log(" The array is at least 10 items long.");

} else {

    console.log (false);
    console.log(" The array is not 10 items long.");

}