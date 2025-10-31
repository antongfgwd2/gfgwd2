let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

document.addEventListener("keypress", () => {
  if (!started) {
    started = true;
    nextSequence();
  }
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
  });
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
    if (gamePattern.length == userClickedPattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    document.querySelector("h1").innerText = "Game Over, Please restart";
    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++; // level = level + 1
  document.querySelector("h1").innerText = "Level " + level;
  let randomNumber = Math.floor(Math.random() * 4); //0 - 3
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  let randomElem = document.querySelector("#" + randomChosenColor);

  randomElem.setAttribute("style", "opacity:0.3");
  setTimeout(() => {
    randomElem.setAttribute("style", "opacity:1");
  }, 200);
  playSound(randomChosenColor);
}

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(color) {
  let elem = document.querySelector("#" + color);
  elem.classList.add("pressed");
  setTimeout(() => {
    elem.classList.remove("pressed");
  }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
