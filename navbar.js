let hamburger = document.querySelector(".hamburger");
let closeIcon = document.querySelector(".close");
let links = document.querySelector(".links");

hamburger.addEventListener("click", () => {
    links.classList.add("show");
    hamburger.classList.add("hidden");
    closeIcon.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
    links.classList.remove("show");
    closeIcon.classList.add("hidden");
    hamburger.classList.remove("hidden");
});