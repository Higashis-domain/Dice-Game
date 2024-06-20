document.getElementById("click-me").addEventListener("click", function () {
  var dice1 = (Math.floor(Math.random() * 6)) + 1;
  var dice2 = (Math.floor(Math.random() * 6)) + 1;
  document.getElementById("dice1").setAttribute("src", "./assets/images/dice" + dice1 + ".png");
  document.getElementById("dice2").setAttribute("src", "./assets/images/dice" + dice2 + ".png");
  if (dice1 > dice2) {
      document.getElementById("announcer-p").innerHTML = "Player 1 wins";
  } else if (dice1 < dice2) {
      document.getElementById("announcer-p").innerHTML = "Player 2 wins";
  } else {
      document.getElementById("announcer-p").innerHTML = "Draw!";
  }
});
