let guess = parseInt(prompt("Guess a random number between 0 and 5"));
console.log(prompt);

let randomnumber = Math.floor(Math.random() * 6);

console.log(randomnumber);

if (guess == randomnumber) {
  console.log("You guessed it right");
} else {
  alert("You guessed wrong");
}
