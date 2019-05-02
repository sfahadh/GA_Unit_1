const colorButton = document.getElementById("set-color");
const colorBox = document.querySelector(".brush");
const inputBox = document.getElementById("color-field");

const colors = events => {
    switch (inputBox.value.toLowerCase()) {
        case "orange":
            colorBox.style.background = "orange";
            break;
        case "red":
            colorBox.style.background = "red";
            break;
        case "green":
            colorBox.style.background = "green";
            break;
        case "blue":
            colorBox.style.background = "blue";
            break;
        case "pink":
            colorBox.style.background = "pink";
            break;
        case "black":
            colorBox.style.background = "black";
            break;
        case "purple":
            colorBox.style.background = "purple";
            break;
        case "brown":
            colorBox.style.background = "brown";
            break;
        case "yellow":
            colorBox.style.background = "yellow";
            break;
        case "gray":
            colorBox.style.background = "gray";
            break;
            default:
            alert("Too bad we don't have that color");
    }
    event.preventDefault();
}
colorButton.addEventListener("click", colors);

for(let i = 0; i < 8000; i++) {
    let divs = document.createElement("div");
    divs.classList.add("square");
    document.querySelector("body").appendChild(divs);

    const draw = () => {
        divs.style.background = inputBox.value;
    }
    divs.addEventListener("mouseover", draw);
}

// Bonus
// Add a color swatch. You should have 3 boxes with the most recent 3 colors used. When you click on each of those boxes, it should set the current brush color back to that color.