const nameInput = document.getElementById("name");
if (nameValue.length < 2 || nameValue.length > 100) {
    nameInput.style.borderColor = "red";
    isValid = false;
} else {
    nameInput.style.borderColor = ""; 
}


