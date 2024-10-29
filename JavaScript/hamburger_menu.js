document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    // Toggle the 'active' class to show/hide the menu on mobile only
    hamburger.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
});
