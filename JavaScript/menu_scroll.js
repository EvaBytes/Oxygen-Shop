document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".navbar__menu-item");
    const navbar = document.querySelector(".navbar"); 

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const navbarHeight = navbar.offsetHeight; 
                const extraOffset = -50; 

                window.scrollTo({
                    top: targetSection.offsetTop - navbarHeight - extraOffset, 
                    behavior: "smooth"
                });
            }
        });
    });
});
