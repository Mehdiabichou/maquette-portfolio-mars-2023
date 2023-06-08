const button = document.querySelector(".sub-title");
const button2 = document.querySelector(".sub-title2");

button.addEventListener("click", () => {
  button.classList.toggle("active-mode");
});
button2.addEventListener("click", () => {
  button2.classList.toggle("active-mode");
});
