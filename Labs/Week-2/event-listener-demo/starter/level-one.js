/*
 * DOTS: Level One
 *
 */
const ball = document.querySelector(".js-ball");
let score = document.querySelector(".js-score").innerHTML = 0;
const balls = document.querySelectorAll("ball");


let levelOne = () => {
    score += 10;
    document.querySelector(".js-score").innerHTML = score;
    if(score === 100) {
        alert("move on to level 2");
    }
}
ball.addEventListener("click", levelOne);


