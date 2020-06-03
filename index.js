alert("Press OK to roll!");
// generate random integer from 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1

// set randomImage for dice based on randomNumber
var randomImage1 = "images/dice" + randomNumber1 + ".png"
var randomImage2 = "images/dice" + randomNumber2 + ".png"

// changes src attribute for img1 and img2 based on randomImage for dice
document.querySelector("img.img1").setAttribute("src", randomImage1);
document.querySelector("img.img2").setAttribute("src", randomImage2);

var winner = "";
// checks for winner
if (randomNumber1 > randomNumber2) {
  winner = "🚩 Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1) {
  winner = "Player 2 Wins! 🚩"
}
else {
  winner = "😱 Draw! 😱"
}

// changes innerHTML value of h1 to display the winner
document.querySelector("h1").innerHTML = winner;
