

const prompt = require("prompt-sync")({sigint: true});

let userArray = JSON.parse(prompt("Enter an array of at least three animals: "));
let thirdItem = userArray[2];


if (userArray.length < 3){
    console.log("You need to input at least 3 animals in this array.");
} 

else if (thirdItem.length < 2){
    console.log("The third item does not have at least 2 characters.");
} 

else if (typeof thirdItem !== "string" ){
    console.log("The third item is not a string.  Please try again.");
} 
else {
console.log("The second character of the third animal in your array is: " + thirdItem[1]);
}
