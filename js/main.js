const burgerIcon = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const closeIcon = document.querySelector(".close");
// Toggle Menu
burgerIcon.addEventListener("click", () => menu.classList.add("show"));
closeIcon.addEventListener("click", () => menu.classList.remove("show"));
