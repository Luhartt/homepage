function setTime() {
  let suffix;
  const displayHours = document.querySelector("div#time>span.hours");
  const displayMinutes = document.querySelector("div#time>span.minutes");
  let currentTime = new Date();
  let hours = currentTime.getHours();

  var minutes = currentTime.getMinutes();

  minutes = minutes < 10 ? "0" + minutes : minutes;
  suffix = hours < 12 ? "AM" : "PM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  displayHours.innerHTML = hours;
  displayMinutes.innerHTML = minutes + " " + suffix;
  setTimeout(setTime, 50000);
}

function setColon() {
  const colon = document.getElementById("colon");
  colon.classList.toggle("blink");
  setTimeout(setColon, 1000);
}

setColon();
setTime();
