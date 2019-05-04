function changeBackgroundToWhite() {
  document.body.style.backgroundColor = 'white';
}

function changeBackgroundToGray() {
  document.body.style.backgroundColor = 'gray';
}

function changeBackgroundToRed() {
  document.body.style.backgroundColor = 'red';
}

function changeBackgroundToBlue() {
  document.body.style.backgroundColor = 'blue';
}

function changeBackgroundToYellow() {
  document.body.style.backgroundColor = 'yellow';
}

const liRed = document.createElement("li");
const liYellow = document.createElement("li");
const liBlue = document.createElement("li");
document.getElementById("switcher").appendChild(liRed);
document.getElementById("switcher").appendChild(liYellow);
document.getElementById("switcher").appendChild(liBlue);


