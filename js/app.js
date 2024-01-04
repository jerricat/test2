const toggle_button = document.querySelector(".toggle-button");
const links = document.querySelector(".links");

toggle_button.addEventListener("click", () => {
 links.classList.toggle("active");   
});