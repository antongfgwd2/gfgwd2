const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

async function generateJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    jokeEl.innerText = data.joke;
  } catch (error) {
    console.log(error);
  }
}

generateJoke();

jokeBtn.addEventListener("click", generateJoke);
