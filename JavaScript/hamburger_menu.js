const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    

const img = hamburger.querySelector("img");
    if (mobileMenu.classList.contains("active")) {
        img.src = "images/Vector (2).png"; 
        img.alt = "Close Icon";
    } else {
        img.src = "images/Menu.png";
        img.alt = "Menu Icon";
    }
});
