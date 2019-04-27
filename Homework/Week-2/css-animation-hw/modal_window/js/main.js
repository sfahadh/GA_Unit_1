// Write your pseudo code here! HAPPY CODING!!
const modalButton = document.getElementById("showModal");
const closeModal = document.getElementById("close");
const modalBackground = document.querySelector(".modal-background");


const open = () => {
    const modalBackground = document.querySelector(".modal-background");
    modalBackground.style.position = "relative";
}

const close = () => {
    modalBackground.style.position = "fixed";
}

modalButton.addEventListener("click", open);
closeModal.addEventListener("click", close);


