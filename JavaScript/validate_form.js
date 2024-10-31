document.getElementById('contactForm').addEventListener("submit")

//¿Qué elementos queremos que sean rellenados?
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const consentCheckbox = document.getElementById('consentCheckbox');

  
//Para validar el nombre y el email, le establecemos la longitud que queremos min y máx
    if (nameInput.value.length < 2 || nameInput.value.length > 100) {
      nameInput.style.border = '2px solid red';
      isValid = false;
    };