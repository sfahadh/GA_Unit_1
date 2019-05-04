let turn = Math.round(Math.random());

window.onload = function() {
    setTimeout(function() {
        if(turn == 1) {
            alert("Scorpion goes first");
        } else {
            alert("Sub-Zero goes first");
        }
    }, 100);
 };

const boxes = document.querySelectorAll(".box");

for(let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function(event) {
        if(event.target.innerHTML === "" && turn === 1) {
            event.target.innerHTML = "<span>X</span>";
            document.querySelector(".player1").style.transform = "scale(1.06)"
            document.querySelector(".player1").style.color = "red"
            document.querySelector(".player2").style.transform = "scale(1)"
            document.querySelector(".player2").style.color = "white"
            turn--;
        } else if(event.target.innerHTML === "" && turn === 0) {
            event.target.innerHTML = "<span>O</span>";
            document.querySelector(".player2").style.transform = "scale(1.06)"
            document.querySelector(".player2").style.color = "blue"
            document.querySelector(".player1").style.transform = "scale(1)"
            document.querySelector(".player1").style.color = "white"
            turn++;
        }  

        const scorpionWins = () => {
            const openModal = () => {
                document.getElementById(`modal1`).style.display = "block"; 
            }
            const music = () => {
                const audio = new Audio("ScorpionWins.mp3");
                audio.play();
              }
            setTimeout(music, 100);

            openModal();
            button.addEventListener("click", scorpionWins);
        }
        
        const subZeroWins = () => {
            const openModal = () => {
                document.getElementById(`modal2`).style.display = "block"; 
            }
            const music = () => {
                const audio = new Audio("SubZeroWins.mp3");
                audio.play();
              }
            setTimeout(music, 100);
            openModal();
            button.addEventListener("click", subZeroWins);
        }
        
        const playerWin = (player) => {
            const r1c1 = boxes[0].innerHTML;
            const r1c2 = boxes[1].innerHTML;
            const r1c3 = boxes[2].innerHTML;
            const r2c1 = boxes[3].innerHTML;
            const r2c2 = boxes[4].innerHTML;
            const r2c3 = boxes[5].innerHTML;
            const r3c1 = boxes[6].innerHTML;
            const r3c2 = boxes[7].innerHTML;
            const r3c3 = boxes[8].innerHTML;

            if(r1c1 !== "" && r1c1 === r1c2 && r1c1 === r1c3) {
                if(player == 0) {
                    document.querySelector(".player1").innerHTML = "WINNER";
                    scorpionWins();
                } else {
                    document.querySelector(".player2").innerHTML = "WINNER";
                    subZeroWins();
                }

            } else if(r2c1 !== "" && r2c1 === r2c2 && r2c1 === r2c3) {
                if(player == 0) {
                    document.querySelector(".player1").innerHTML = "WINNER";
                    scorpionWins();
                } else {
                    document.querySelector(".player2").innerHTML = "WINNER";
                    subZeroWins();
                }
            
            } else if(r3c1 !== "" && r3c1 === r3c2 && r3c1 === r3c3) {
                if(player == 0) {
                    document.querySelector(".player1").innerHTML = "WINNER";
                    scorpionWins();
                } else {
                    document.querySelector(".player2").innerHTML = "WINNER";
                    subZeroWins();
                }
            
            } else if(r1c1 !== "" && r1c1 === r2c1 && r1c1 === r3c1) {
                if(player == 0) {
                    document.querySelector(".player1").innerHTML = "WINNER";
                    scorpionWins();
                } else {
                    document.querySelector(".player2").innerHTML = "WINNER";
                    subZeroWins();
                }
            
            } else if(r1c2 !== "" && r1c2 === r2c2 && r1c2 === r3c2) {
                if(player == 0) {
                    document.querySelector(".player1").innerHTML = "WINNER";
                    scorpionWins();
                } else {
                    document.querySelector(".player2").innerHTML = "WINNER";
                    subZeroWins();
                }
            
            } else if(r1c3 !== "" && r1c3 === r2c3 && r1c1 === r3c3) {
                if(player == 0) {
                    document.querySelector(".player1").innerHTML = "WINNER";
                    scorpionWins();
                } else {
                    document.querySelector(".player2").innerHTML = "WINNER";
                    subZeroWins();
                }

            } else if(r1c1 !== "" && r1c1 === r2c2 && r1c1 === r3c3) {
                if(player == 0) {
                    document.querySelector(".player1").innerHTML = "WINNER";
                    scorpionWins();
                } else {
                    document.querySelector(".player2").innerHTML = "WINNER";
                    subZeroWins();
                }
            
            } else if(r1c3 !== "" && r1c3 === r2c2 && r1c3 === r3c1) {
                if(player == 0) {
                    document.querySelector(".player1").innerHTML = "WINNER";
                    scorpionWins();
                } else {
                    document.querySelector(".player2").innerHTML = "WINNER";
                    subZeroWins();
                }

            } else if(r1c1 !== "" && r1c2 !== "" && r1c3 !== "" && r2c1 !== "" && r2c2 !== "" && r2c3 !== "" && r3c1 !== "" && r3c2 !== "" && r3c3 !== "") {
                document.querySelector(".title").innerHTML = "";
                document.getElementById("tie").style.display = "block";
                document.querySelector(".player1").innerHTML = "I'LL KILL YOU NEXT TIME!";
                document.querySelector(".player2").innerHTML = "I LET YOU LIVE THIS TIME!";
            }
        }
        playerWin(turn);
    });
}

const reset = document.getElementById("reset");
reset.addEventListener("click", function() {
    window.location.reload();
});