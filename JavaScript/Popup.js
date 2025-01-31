document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("newsletterModal");
    const closeModal = document.getElementById("closeModal");
    const newsletterForm = document.getElementById("newsletterForm");
    const newsletterEmail = document.getElementById("newsletterEmail");

    function showModal() {
        modal.style.display = "flex";
    }

    function hideModal() {
        modal.style.display = "none";
    }

    setTimeout(showModal, 5000);

    closeModal.addEventListener("click", hideModal);

    window.addEventListener("click", (event) => {
        if (event.target === modal) hideModal();
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") hideModal();
    });

    closeModal.addEventListener("mouseover", () => {
        closeModal.style.color = "darkgrey"; 
        closeModal.style.cursor = "pointer"; 
    });

    closeModal.addEventListener("mouseout", () => {
        closeModal.style.color = ""; 
    });

    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (validateEmail(newsletterEmail.value)) {
            fetch(newsletterForm.action, {
                method: "POST",
                body: new URLSearchParams(new FormData(newsletterForm)),
            })
            .then(response => response.ok ? hideModal() : alert("Failed to subscribe."))
            .catch(() => alert("Failed to subscribe."));
        } else {
            alert("Please enter a valid email address.");
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
