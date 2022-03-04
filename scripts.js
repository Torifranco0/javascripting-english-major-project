/*
let userInput;
userInput = prompt("What is the best movie of all time?", "Give your answer here");
if ( userInput === "Harry Potter" ) {
$("#response").html("I knew you had amazing taste!");
} else {
$("#response").html("What about Harry Potter, yo?");
}

let userInput;
userInput = prompt("What do you want to have for dinner?", "Type your answer here.");
if ( userInput === "burrito" ) {
  $("#response").html("Brilliant choice!");
} else {
  $("#response").html("Don’t you want a burrito?");
}
*/
/*
let makeABurrito;
makeABurrito = function(beansVariable) {
let beansResponse;
beansResponse = "You ordered " + beansVariable + "beans. Good choice!";
$(#response").html(beansResponse);
};
let blackBeans;
blackBeans = "black";
makeABurrito(blackBeans);
*/


let arrayOfStrings, arrayOfNumbers, arrayMixed;
arrayOfStrings = ["a" , "b" , "c"];
arrayOfNumbers = [ 1, 2, 3];
arrayMixed = ["a", 1, null, true, arrayOfNumbers, [4.5, 5.6]];
$("#response").html(arrayOfStrings[2]);



