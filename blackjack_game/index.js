let firstCard = 4;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

if (sum <= 20) {
    string = "Do you want to draw a new card?";
    message = string;
} else if (sum === 21) {
    string = "You won!";
    message = string;
    hasBlackJack = true;
} else {
    string = "You lost.";
    message = string;
    isAlive = false;
}

// Cash out
console.log(message)
console.log(hasBlackJack)
console.log(isAlive)