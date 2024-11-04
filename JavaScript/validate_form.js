// Seleccionamos los elementos del formulario que queremos rellenar
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const consentCheckbox = document.getElementById('consentCheckbox');
const checkboxErrorMessage = document.getElementById('checkboxErrorMessage');


// Variable para verificar si todos los campos son válidos
let isValid = true;

  // Establecer los parámetros que debe tener el nombre para que sea correcto
if (nameInput.value.length < 2 || nameInput.value.length > 100) {
    nameInput.classList.add('error'); 
    isValid = false;
} else {
      nameInput.classList.remove('error'); // Eliminar clase de error si es válido
}

  // Hacemos lo mismo para el EMAIl (Usando el emailregex.com)
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add('error'); 
    isValid = false;
} else {
    emailInput.classList.remove('error'); 
}

// Verificación del checkbox..si es que el checkbox funciona
if (!consentCheckbox.checked) {
    consentCheckbox.classList.add('error'); 
    isValid = false;
} else {
    consentCheckbox.classList.remove('error'); 
    checkboxErrorMessage.style.display = 'none'; 
}

// Ahora, si todos los campos son válidos, el formulario se envía..
if (isValid) {
    alert("Formulario enviado correctamente!");
    document.getElementById("contactForm").submit();
}
