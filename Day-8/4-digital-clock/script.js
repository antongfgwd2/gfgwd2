function showTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let session = "AM";

  if (hours == 0) {
    hours = 12;
  } else if (hours == 12) {
    session = "PM";
  } else if (hours > 12) {
    hours -= 12;
    session = "PM";
  }

  // ternary operator - condition ? true : false

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = `${hours}:${minutes}:${seconds}:${session}`;
  document.querySelector(".clock").innerText = time;
  setTimeout(() => {
    showTime();
  }, 1000);
}

showTime();

// setInterval(() => {
//   showTime();
// }, 1000);
