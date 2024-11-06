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

// Para que la pop-up salte a los 5 segundos o 25% de desplazamiento de la página
    setTimeout(showModal, 5000);

// Cerrar modal con X, fuera del modal o con tecla ESC
    closeModal.addEventListener("click", hideModal);
    window.addEventListener("click", (event) => {
        if (event.target === modal) hideModal();
    });
    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") hideModal();
    });

// Si queremos validar y enviar el formulario, eventListener para enviar si el correo es válido
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (validateEmail(newsletterEmail.value)) {
            // Envía el formulario si el correo es válido
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

    // Validación básica de email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
})