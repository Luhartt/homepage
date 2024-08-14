function setTime() {
  let currentTime = new Date();
  let suffix;
  const displayHours = document.querySelector("div#time>span.hours");
  const displayMinutes = document.querySelector("div#time>span.minutes");
  let hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  suffix = hours < 12 ? "AM" : "PM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  displayHours.innerHTML = hours;
  displayMinutes.innerHTML = minutes + " " + suffix;
  setTimeout(setTime, 1000);
}

function setColon() {
  const colon = document.getElementById("colon");
  colon.classList.toggle("blink");
  setTimeout(setColon, 1000);
}

const Palletes = {
  Morning: {
    "--background": 'url("background2.png")', //background image
    "--main-color": "#351440", //links and heading of cards
    "--cards": "#CCB2FD", //cards
    "--search": "#CCB2FD", //searcg bar
    "--placeholder": "#7C4F88", //place holder ("what's new")
    "--time": "#351440", //time
    "--moon": "black", //moon color
    "--shadow": "drop-shadow(0 0 1rem rgb(160, 0, 210)"

  },
  Noon: {
    "--background": 'url("background3.png")',
    "--main-color": "#574A68",
    "--cards": "#AE95D0",
    "--search": "#AE95D0",
    "--placeholder": "#7C4F88",
    "--time": "#574A68",
    "--moon": "#574A68",
    "--shadow": "drop-shadow(0 0 1rem rgb(160, 0, 210)"

  },
  Afternoon: {
    "--background": 'url("background4.png")',
    "--main-color": "#351440",
    "--cards": "#FCC4FF",
    "--search": "#FCC4FF",
    "--placeholder": "#7C4F88",
    "--time": "#351440",
    "--moon": "D9A4FF",
    "--shadow": "drop-shadow(0 0 1rem rgb(160, 0, 210)"

  },
};

function Morning() {
  Object.entries(Palletes.Morning).forEach(([key, color]) => {
    document.documentElement.style.setProperty(`${key}`, `${color}`);
  });
}
function Noon() {
  Object.entries(Palletes.Noon).forEach(([key, color]) => {
    document.documentElement.style.setProperty(`${key}`, `${color}`);
  });
}
function Afternoon() {
  Object.entries(Palletes.Afternoon).forEach(([key, color]) => {
    document.documentElement.style.setProperty(`${key}`, `${color}`);
  });
}

function setColor() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  if (hours < 12) {
    Morning();
  } else if (hours >= 12 && hours < 15) {
    Noon();
  } else if (hours >= 15 && hours < 18) {
    Afternoon();
  } else {
    return;
  }
  setTimeout(setColor, 5000);
}

function parralax(){
  document.addEventListener("mousemove", (e)=>{
    const MouseX = ((e.clientX - window.innerWidth) / 10)
    const MouseY = ((e.clientY - window.innerHeight) / 10)

    const background = document.querySelector("div.background");
  background.style.transform = "translateX(" + MouseX + "px) translateY(" + MouseY + "px)"
   })
}





document.addEventListener("DOMContentLoaded", ()=>{

setColon();
setTime();
setColor();
parralax();

})






