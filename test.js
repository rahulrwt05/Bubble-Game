let hitvalue;
let score = 0;
let time = 60; // Initial time

//a function to make bubbles when it starts and refresh required

function makingbubbles() {
  var a = "";
  for (var i = 0; i <= 200; i++) {
    var c = Math.floor(Math.random() * 40);
    a += `<div class="bubble">${c}</div>`;
  }
  document.querySelector(".box2").innerHTML = a;
}

//starting the timer when the start button is clicked

function timer() {
  const timerint = setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector("#timer").textContent = time;
    }
    if (time == 0) {
      clearInterval(timerint);
      endGame();
    }
  }, 1000);
}

// Function to end the game

function endGame() {
  document.querySelector(
    ".box2"
  ).innerHTML = `<h1>Game Over<br>Your Score : ${score}</h1>`;
  butt.style.backgroundColor = "white";
  document.querySelector("#start").innerHTML = "Start Again";
  hitvalue = 0;
  time = 60;
  score = 0;
  document.querySelector("#score").innerHTML = score;
  document.querySelector("#timer").innerHTML = time;
  document.querySelector("#hit").innerHTML = hitvalue;
}

//a function to update the hit value

function getnewhit() {
  hitvalue = Math.floor(30 * Math.random());
  document.querySelector("#hit").innerHTML = hitvalue;
}

//a function to update the score

function updatescore() {
  score = Number(document.querySelector("#score").textContent);
  score += 10;
  document.querySelector("#score").innerHTML = score;
}

//event listener whenever there is a click which triggers to check if the clicked value is equal to the hit value
function clickedbubble() {
  document.querySelector(".box2").addEventListener("click", function (e) {
    const c = Number(e.target.textContent);
    if (c === hitvalue) {
      updatescore();
      getnewhit();
      makingbubbles();
      butt.textContent = "Great hit!";
    } else {
      console.log("Sd");
      butt.textContent = "Not Bad, Try Again";
    }
  });
}

//this function runs when start button is clicked
let butt;
function start() {
  butt = document.getElementById("start"); // Corrected ID selection
  const colors = ["AQUA", "green", "blue", "red", "ORANGE", , "NAVY"];
  let colorIndex = 0;
  butt.addEventListener("click", function (e) {
    timer();
    butt.textContent = "Do fast lol";
    makingbubbles();

    getnewhit();
    clickedbubble();
    colorChangeInterval = setInterval(() => {
      butt.style.backgroundColor = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
    }, 200); // Change color every 500 milliseconds
  }); // Changing button color on click
}

start();
makingbubbles();
