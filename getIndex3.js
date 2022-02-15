const prompt = require('prompt-sync')({sigint: true});

// first prompt the user for the array, 
let userInput = JSON.parse(prompt("enter an array"));

// get the last item 
const lastItem = userInput[userInput.length -1];
if (userInput[3] === undefined) {

    console.log("No index 3 item, user array last item is: " + lastItem);

} else {

    console.log("Index 3 item is: " +  userInput[3]);

}