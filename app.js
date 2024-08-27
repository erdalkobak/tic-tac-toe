const zone = document.querySelectorAll(".game .zone");
const display = document.querySelector(".display");
const playerOne = document.querySelector(".player-1");
const playerTwo = document.querySelector(".player-2");
const board = document.querySelector(".board");
const btn = document.querySelector(".btn");
const btnNext = document.querySelector(".btn-next");

let turn = 1;

for (let i = 0; i <= zone.length; i++) {
  zone[i].addEventListener("click", () => {
    function nextTurn() {
      if (turn == 1) {
        zone[i].innerHTML = "X";
        zone[i].classList.add("pointer");
        turn = 2;
        display.innerHTML = "Player 2 turn";
      } else if (turn == 2) {
        zone[i].innerHTML = "O";
        zone[i].classList.add("pointer");
        turn = 1;
        display.innerHTML = "Player 1 turn";
      }
    }
    nextTurn();
    checkWinner();
  });
  btnNext.addEventListener("click", () => {
    zone[i].innerHTML = " ";
    board.classList.remove("pointer");
    zone[i].classList.remove("pointer");
    display.innerHTML = "Game Begin!";
  });

  btn.addEventListener("click", () => {
    zone[i].innerHTML = " ";
    board.classList.remove("pointer");
    zone[i].classList.remove("pointer");
    display.innerHTML = "Game Begin!";
    playerOne.innerHTML = 0;
    playerTwo.innerHTML = 0;
  });
}

function checkWinner() {
  if (
    (zone[0].innerHTML == "X" &&
      zone[1].innerHTML == "X" &&
      zone[2].innerHTML == "X") ||
    (zone[3].innerHTML == "X" &&
      zone[4].innerHTML == "X" &&
      zone[5].innerHTML == "X") ||
    (zone[6].innerHTML == "X" &&
      zone[7].innerHTML == "X" &&
      zone[8].innerHTML == "X") ||
    (zone[0].innerHTML == "X" &&
      zone[3].innerHTML == "X" &&
      zone[6].innerHTML == "X") ||
    (zone[1].innerHTML == "X" &&
      zone[4].innerHTML == "X" &&
      zone[7].innerHTML == "X") ||
    (zone[2].innerHTML == "X" &&
      zone[5].innerHTML == "X" &&
      zone[8].innerHTML == "X") ||
    (zone[0].innerHTML == "X" &&
      zone[4].innerHTML == "X" &&
      zone[8].innerHTML == "X") ||
    (zone[2].innerHTML == "X" &&
      zone[4].innerHTML == "X" &&
      zone[6].innerHTML == "X")
  ) {
    display.innerHTML = "Player 1 Win";
    playerOne.innerHTML++;
    board.classList.toggle("pointer");
  } else if (
    (zone[0].innerHTML == "O" &&
      zone[1].innerHTML == "O" &&
      zone[2].innerHTML == "O") ||
    (zone[3].innerHTML == "O" &&
      zone[4].innerHTML == "O" &&
      zone[5].innerHTML == "O") ||
    (zone[6].innerHTML == "O" &&
      zone[7].innerHTML == "O" &&
      zone[8].innerHTML == "O") ||
    (zone[0].innerHTML == "O" &&
      zone[3].innerHTML == "O" &&
      zone[6].innerHTML == "O") ||
    (zone[1].innerHTML == "O" &&
      zone[4].innerHTML == "O" &&
      zone[7].innerHTML == "O") ||
    (zone[2].innerHTML == "O" &&
      zone[5].innerHTML == "O" &&
      zone[8].innerHTML == "O") ||
    (zone[0].innerHTML == "O" &&
      zone[4].innerHTML == "O" &&
      zone[8].innerHTML == "O") ||
    (zone[2].innerHTML == "O" &&
      zone[4].innerHTML == "O" &&
      zone[6].innerHTML == "O")
  ) {
    display.innerHTML = "Player 2 Win";
    playerTwo.innerHTML++;
    board.classList.toggle("pointer");
  }
}
