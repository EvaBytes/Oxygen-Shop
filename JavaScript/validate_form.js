
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const consentCheckbox = document.getElementById('consentCheckbox');
const checkboxErrorMessage = document.getElementById('checkboxErrorMessage');


function validateForm() {
    let isValid = true;

    if (nameInput.value.length < 2 || nameInput.value.length > 100) {
        nameInput.classList.add('error');
        isValid = false;
    } else {
        nameInput.classList.remove('error');
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('error');
        isValid = false;
    } else {
        emailInput.classList.remove('error');
    }


    if (!consentCheckbox.checked) {
        consentCheckbox.classList.add('error');
        isValid = false;
        checkboxErrorMessage.style.display = 'block';
    } else {
        consentCheckbox.classList.remove('error');
        checkboxErrorMessage.style.display = 'none';
    }

    return isValid;
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    if (validateForm()) {
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            consent: consentCheckbox.checked
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert("Formulario enviado correctamente!");
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Hubo un problema al enviar el formulario.");
        });
    } else {
        alert("Por favor, completa correctamente todos los campos.");
    }
});
