document.getElementById('contactForm').addEventListener("submit", function (event) {
  event.preventDefault(); // Previene el envío si hay errores

  // Selección de los elementos del formulario
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const consentCheckbox = document.getElementById('consentCheckbox');
  const checkboxErrorMessage = document.getElementById('checkboxErrorMessage');

  let isValid = true; // Variable para verificar si todos los campos son válidos

  // Validación del nombre
  if (nameInput.value.length < 2 || nameInput.value.length > 100) {
      nameInput.classList.add('error'); // Añadir clase de error
      isValid = false;
  } else {
      nameInput.classList.remove('error'); // Eliminar clase de error si es válido
  }

  // Validación del correo electrónico usando la expresión regular de emailregex.com
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailInput.value)) {
      emailInput.classList.add('error'); // Añadir clase de error
      isValid = false;
  } else {
      emailInput.classList.remove('error'); // Eliminar clase de error si es válido
  }

  // Verificación del checkbox
  if (!consentCheckbox.checked) {
      consentCheckbox.classList.add('error'); // Añadir clase de error
      checkboxErrorMessage.style.display = 'block'; // Muestra el mensaje de error
      isValid = false;
  } else {
      consentCheckbox.classList.remove('error'); // Eliminar clase de error si es válido
      checkboxErrorMessage.style.display = 'none'; // Oculta el mensaje de error
  }

  // Si todos los campos son válidos, se envía el formulario
  if (isValid) {
      alert("Formulario enviado correctamente!");
      // Aquí puedes enviar el formulario o hacer otras acciones necesarias
      document.getElementById("contactForm").submit();
  }
});
