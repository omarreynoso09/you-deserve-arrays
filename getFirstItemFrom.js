const prompt = require('prompt-sync')({sigint:true});


//use double quotes ""
let userArray = JSON.parse(prompt("Enter an array: "));

console.log ("the first item on this array is " + userArray[0])

