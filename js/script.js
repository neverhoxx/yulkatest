const burgerBtn = document.querySelector(".menu");
const burgerMenu = document.querySelector(".burger_menu");

burgerBtn.addEventListener("click", function () {
    if (burgerBtn.classList.contains("opened")) {
        burgerMenu.style.transform = "translateX(100%)"; 
        burgerBtn.classList.add("closed");
        burgerBtn.classList.remove("opened");
    } else if (burgerBtn.classList.contains("closed")) {
        burgerMenu.style.transform = "translateX(0)"; 
        burgerBtn.classList.add("opened");
        burgerBtn.classList.remove("closed");
    }
});

document.addEventListener("click", function (event) {
    if (!burgerMenu.contains(event.target) && !burgerBtn.contains(event.target)) {
        burgerMenu.style.transform = "translateX(100%)";
        burgerBtn.classList.add("closed");
        burgerBtn.classList.remove("opened");
    }
});
