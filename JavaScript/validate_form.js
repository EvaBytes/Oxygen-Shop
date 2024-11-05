// Seleccionamos los elementos del formulario
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const consentCheckbox = document.getElementById('consentCheckbox');
const checkboxErrorMessage = document.getElementById('checkboxErrorMessage');

// Función para validar los campos del formulario
function validateForm() {
    let isValid = true;

// Validación del nombre
    if (nameInput.value.length < 2 || nameInput.value.length > 100) {
        nameInput.classList.add('error'); // Añade borde rojo si el nombre es inválido
        isValid = false;
    } else {
        nameInput.classList.remove('error'); // Quita borde rojo si el nombre es válido
    }

// Validación del email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('error'); // Añade borde rojo si el email es inválido
        isValid = false;
    } else {
        emailInput.classList.remove('error'); // Quita borde rojo si el email es válido
    }

    // Validación del checkbox de consentimiento
    if (!consentCheckbox.checked) {
        consentCheckbox.classList.add('error'); // Añade borde rojo si el checkbox no está marcado
        isValid = false;
        checkboxErrorMessage.style.display = 'block'; // Muestra mensaje de error para el checkbox
    } else {
        consentCheckbox.classList.remove('error'); // Quita borde rojo si el checkbox está marcado
        checkboxErrorMessage.style.display = 'none'; // Oculta mensaje de error
    }

    return isValid;
}

// Evento de envío del formulario
document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Prevenir el envío del formulario si es inválido
    if (!validateForm()) {
        event.preventDefault(); // Evita el envío del formulario si hay errores
        alert("Por favor, completa correctamente todos los campos."); // Mensaje de error general
    } else {
        alert("Formulario enviado correctamente!");
    }
});
