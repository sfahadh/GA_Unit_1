// Step 1: When the user hovers a mouse cursor over the `<div>`, 
// the background of the page should turn blue.
let background = document.querySelector("div");
background.addEventListener("mouseover", changeBackgroundColorToBlue);

// Step 2: When user's mouse cursor is no longer hovering over the `<div>`, 
// the background of the page should turn white.  
background.addEventListener("mouseout", changeBackgroundColorToWhite);


function changeBackgroundColorToBlue(){
  // No need to change the content of this function. Don't worry if this code is new to you.
  document.querySelector('body').style.backgroundColor = 'blue';
}

function changeBackgroundColorToWhite(){
  // No need to change the content of this function. Don't worry if this code is new to you.
  document.querySelector('body').style.backgroundColor = 'white';
}
