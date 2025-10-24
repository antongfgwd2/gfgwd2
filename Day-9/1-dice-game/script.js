function startGame() {
  let randomNumber1 = Math.random();
  randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

  let randomSource1 = `images/dice${randomNumber1}.png`;

  document.querySelector(".img1").setAttribute("src", randomSource1);

  let randomNumber2 = Math.random();
  randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

  let randomSource2 = `images/dice${randomNumber2}.png`;

  document.querySelector(".img2").setAttribute("src", randomSource2);

  let h1 = document.querySelector("h1");

  if (randomNumber1 > randomNumber2) {
    h1.innerText = "Player 1 Wins !!";
  } else if (randomNumber2 > randomNumber1) {
    h1.innerText = "Player 2 Wins !!";
  } else {
    h1.innerText = "!! It's a tie !!";
  }
}

startGame();

// event listener

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  startGame();
});
