window.onload = function() {
  const body = document.body;

  const createDuck = () => {
    const music = () => {
      const audio = new Audio("audio/start-round.mp3");
      audio.play();
    }
    setTimeout(music, 1000);
    setInterval(music, 6700);

    for(let i = 0; i < 5; i++) {
      let duck = document.createElement("div");
      duck.classList.add("duck");
      body.appendChild(duck);

      const moveDuck = (ducks) => {
        ducks.style.top = Math.random() * window.innerHeight + "px";
        ducks.style.left = Math.random() * window.innerWidth + "px";
      }

      const flapWings = () => {
        setInterval(() => {
          duck.classList.toggle("flap");
          }, 200);
        }
        flapWings();

      const respondDuck = () => {
        setInterval(() => {
        moveDuck(duck);
        }, 1000);
      }
      respondDuck();

      const shot = () => {
        duck.classList.add("shot");
        setTimeout(function() {
          duck.classList.remove("shot", "duck");
        }, 500);
      }
      duck.addEventListener("click", shot);
;    }
  }
  createDuck();

  const checkForWinner = () => {
  	let ducks = document.querySelectorAll(".duck");
  	if(ducks.length === 0) {
      alert("TIME TO EAT!");
		  clearInterval(wait);
		}
  }
  const wait = setInterval(checkForWinner, 100);
};

 // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second) Hint Hint...use setTimeout
  //     as for removing the element check out https://dzone.com/articles/removing-element-plain

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can        we see how many elements we get back) If not, alert "YOU WIN!"

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing

  // FIN. You win 1 trillion tokens.  Play the day away!
