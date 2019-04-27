let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function(event) {
  // Random quote of the day generator
  function randomQuote() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of yo ur work inside the document.addEventListener

  // Part 1
  function shortenPageTitle() {
    document.getElementById("main-title").innerText = "I AM DOM TORETTO";
  }
  shortenPageTitle();

  // Part 2
  function changeBodyBgColor() {
    document.body.style.backgroundColor = "orange";
  }
  changeBodyBgColor();

  // Part 3
  function removeLastFavoriteThing() {
    const things = document.getElementById("favorite-things");
    const listThings = things.querySelectorAll("li");
    const lastThing = listThings[listThings.length-1];
    things.removeChild(lastThing);
  }
  removeLastFavoriteThing();

  // Part 4
  function makeSpecialTitlesBigger() {
    const title = document.querySelectorAll(".special-title");
    for(let i = 0; i < title.length; i++) {
      title[i].style.fontSize = "2rem";
    }
  }
  makeSpecialTitlesBigger();

  // Part 5
  function RemoveChicagoRace() {
    let races = document.getElementById("past-races");
    races.removeChild(races.children[3]);
  }
  RemoveChicagoRace();

  // Part 6
  function addPastRace() {
    const elem = document.createElement("li");
    const city = document.createTextNode("NYC");
    elem.appendChild(city);
    document.getElementById("past-races").appendChild(elem);
  }
  addPastRace();

  // Part 7
  function createNewBlogPost() {
    let div = document.createElement("div");
    div.classList.add("blog-post", "purple");
    document.querySelector(".main").appendChild(div);

    const h1 = document.createElement("h1");
    div.appendChild(h1);
    h1.innerHTML = "New York City"

    const p = document.createElement("p");
    div.appendChild(p);
    p.innerHTML = "I DEADASS DRIFTED UP THE BLOCK";
  }
  createNewBlogPost();
});