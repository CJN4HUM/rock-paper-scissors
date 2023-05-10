const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");
const choice = document.querySelectorAll(".choice");

let playerVar;
let computerVar;
let resultVar;

choice.forEach(button => button.addEventListener("click", () => {

  playerVar = button.textContent;
  computerTurn();
  player.textContent = `Player: ${playerVar}`;
  computer.textContent = `Computer: ${computerVar}`;
  result.textContent = checkWinner();
}));

function computerTurn(){
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch(randomNumber){
    case 1:
      computerVar = "ROCK";
      break;
    case 2:
      computerVar = "PAPER";
      break;
    case 3:
      computerVar = "SCISSORS";
      break;
  }
}

function checkWinner(){
  if(playerVar == computerVar){
    return "Draw! 😑";
  }
  else if(computerVar == "ROCK"){
    return (playerVar == "PAPER") ? "You Win! 🤩" : "You Lose! 🤡"
  }
  else if(computerVar == "PAPER"){
    return (playerVar == "SCISSORS") ? "You Win! 🤩" : "You Lose! 🤡"
  }
  else if(computerVar == "SCISSORS"){
    return (playerVar == "ROCK") ? "You Win! 🤩" : "You Lose! 🤡"
  }
}