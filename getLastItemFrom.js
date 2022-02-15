// Prompt Sync ===============================

const prompt = require('prompt-sync')({sigint: true});

let userArray = prompt('Input your array     ');

userArray = JSON.parse(userArray);


const lastItem = userArray[userArray.length -1];

console.log(lastItem);
