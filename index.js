var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "images/dice" + randomNumber1 + ".png";
document.getElementById("dice1").setAttribute("src", randomImage1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.getElementById("dice2").setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "player 1 is win";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "player 2 is win";
}
else {
  document.querySelector("h1").innerHTML = "tie";
}