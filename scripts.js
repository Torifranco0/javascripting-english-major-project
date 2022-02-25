

let userInput;
userInput = prompt("What is the best movie of all time?", "Give your answer here");
if ( userInput === "Harry Potter" ) {
$("#response").html("I knew you had amazing taste!");
} else {
$("#response").html("What about Harry Potter, yo?");
}
