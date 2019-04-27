// Write your pseudo code here! HAPPY CODING! :) 
const x = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");

const sidebar = document.querySelector(".sidebar")

const open = () => {
    sidebar.classList.toggle("sidebar");
}

const close = () => {
    sidebar.classList.toggle("active");
}

hamburger.addEventListener("click", open);
x.addEventListener("click", close);