const formulario = document.getElementById("formulario")

const nameValidation = document.getElementById("name_validation")
const surnameValidation = document.getElementById("surname_validation")
const mailValidation = document.getElementById("email_validation")
const phoneValidation = document.getElementById("phone_validation")
const addressValidation = document.getElementById("address_validation")
const passwordValidation = document.getElementById("password_validation")

formulario.oninput = (event) => {
    event.preventDefault()

    // VALIDAMOS EL NOMBRE

    const nameInput = event.target.name
    const name = nameInput.value

    const nameRegex = new RegExp(/^[A-Za-zÁÉÍÓÚÑáéíóúñ]{2,25}$/) // Verifica solo un nombre

    if (nameRegex.test(name)) {
        nameValidation.innerText = "👍"
    } else {
        nameValidation.innerText = "❌"
    }
    // VALIDAMOS EL APELLIDO

    const surnameInput = event.target.surname
    const surname = nameInput.value

    const surnameRegex = new RegExp(/^[A-Za-zÁÉÍÓÚÑáéíóúñ]{2,25}$/) // Verifica solo un apellido 

    if (surnameRegex.test(surname)) {
        surnameValidation.innerText = "👍"
    } else {
        surnameValidation.innerText = "❌"
    }

    // VALIDAMOS EL EMAIL

    const mailInput = event.target.mail
    const mail = mailInput.value

    const mailRegEx = new RegExp(/^[\w.]+@[\w]+\.{1}[\w]+(.{1}[\w]+)*$/) // Verifica que el email este bien

    if (mailRegEx.test(mail)) {
        mailValidation.innerText = "👍"
    } else {
        mailValidation.innerText = "❌"
    }

    // VALIDAMOS EL NUMERO TELEFONICO

    const phoneInput = event.target.phone
    const phone = phoneInput.value

    const phoneRegex = new RegExp(/^\d+$/) // Verifica números en general

    if (phoneRegex.test(phone)) {
        phoneValidation.innerText = "👍"
    } else {
        phoneValidation.innerText = "❌"
    }

    // VALIDAMOS EL DIRECCIÓN

    const addressInput = event.target.address
    const address = addressInput.value

    const addressRegex = new RegExp(/^[a-zA-Z]+\s\d+$/) // verifica Una palabra, un espacio y el número

    if (addressRegex.test(address)) {
        addressValidation.innerText = "👍"
    } else {
        addressValidation.innerText = "❌"
    }

    // VALIDAMOS LA CONTRASEÑA

    const passwordInput = event.target.password
    const password = passwordInput.value

    const passwordRegex = new RegExp(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/)
        // verifica que la contraseña tenga al menos 8 caracteres, que tenga algun número, alguna letra mayuscula, alguna minuscla y algún caracter especial

    if (passwordRegex.test(password)) {
        passwordValidation.innerText = "👍"
    } else {
        passwordValidation.innerText = "❌"
    }


}