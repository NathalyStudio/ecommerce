const formulario = document.getElementById("formulario")

const nameValidation = document.getElementById("name_validation")
const surnameValidation = document.getElementById("surname_validation")
const mailValidation = document.getElementById("email_validation")
const phoneValidation = document.getElementById("phone_validation")
const addressValidation = document.getElementById("address_validation")
const passwordValidation = document.getElementById("password_validation")
const nameRegex = new RegExp(/^[A-Za-zÁÉÍÓÚÑáéíóúñ]{2,25}$/) // Verifica solo un nombre
const surnameRegex = new RegExp(/^[A-Za-zÁÉÍÓÚÑáéíóúñ]{2,25}$/) // Verifica solo un apellido 
const mailRegEx = new RegExp(/^[\w.]+@[\w]+\.{1}[\w]+(.{1}[\w]+)*$/) // Verifica que el email este bien
const phoneRegex = new RegExp(/^\d+$/) // Verifica números en general
const addressRegex = new RegExp(/^[a-zA-Z]+\s\d+$/) // verifica Una palabra, un espacio y el número
const passwordRegex = new RegExp(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/) 

function ValidacionEnTiempoReal(){
    const nombre = formulario.name.value
    const apellido = formulario.surname.value
    const email = formulario.mail.value
    const telefono = formulario.phone.value
    const direccion = formulario.address.value
    const pass = formulario.password.value
//valida nombre
    if(nameRegex.test(nombre)){
        nameValidation.innerText = "👍";
    }else{
        nameValidation.innerText = "❌";
    }
    //valida apellido
    if(surnameRegex.test(apellido)){
        surnameValidation.innerText = "👍"
    }else{
        surnameValidation.innerText = "❌"
    }
    //valida email
    if(mailRegEx.test(email)){
        mailValidation.innerText = "👍"
    }
    else{
        mailValidation.innerText = "❌"
    }
    //valida numero de telefono
    if(phoneRegex.test(telefono)){
        phoneValidation.innerText = "👍"
    }else{
        phoneValidation.innerText = "❌"
    }
    //valida direccion
    if(addressRegex.test(direccion)){
        addressValidation.innerText = "👍"
    }else{
        addressValidation.innerText = "👎"
    } 
    //valida contrase;a
    if(passwordRegex.test(pass)){
        passwordValidation.innerText = "👍"
    }else{
        passwordValidation.innerText = "👎"
    }
}

formulario.name.oninput = ValidacionEnTiempoReal
formulario.surname.oninput = ValidacionEnTiempoReal
formulario.mail.oninput = ValidacionEnTiempoReal
formulario.address.oninput = ValidacionEnTiempoReal
formulario.password.oninput = ValidacionEnTiempoReal

formulario.onsubmit = (event)=>{
    event.preventDefault()


    // VALIDAMOS EL NOMBRE

    const nameInput = event.target.name
    const name = nameInput.value

    
    if(name.length == 0 ){
        nameValidation.innerText = "❌El campo no puede estar vacio"
    }
    else{
        if(nameRegex.test(name)){
            nameValidation.innerText = "👍"
        }else{
            nameValidation.innerText = "👎"
        }
    }
    


     // VALIDAMOS EL APELLIDO

    const surnameInput = event.target.surname
    const surname = nameInput.value

   
    if(surname.length == 0 ){
        surnameValidation.innerText = "❌El campo no puede estar vacio"
    }else{
        if(surnameRegex.test(surname)){
            surnameValidation.innerText = "👍"
        }else{
            surnameValidation.innerText = "👎"
        }  
    }

    
    // VALIDAMOS EL EMAIL

    const mailInput = event.target.mail
    const mail = mailInput.value

   
    //verificamos primero que el campo no este vacio
    if(mail.length == 0 ){
        mailValidation.innerText = "❌El campo no puede estar vacio"
    }else{
        if(mailRegEx.test(mail)){
            mailValidation.innerText = "👍"
        }else{
            mailValidation.innerText = "👎"
        }
    }
    



    // VALIDAMOS EL NUMERO TELEFONICO

    const phoneInput = event.target.phone
    const phone = phoneInput.value

    
    //primero se verifica que el campo no este vacio
    if(phone.length == 0 ){
        phoneValidation.innerText = "❌El campo no puede estar vacio"
    }
    //verificamos ahora que sea un numero de telefono valido
    else{
        if(phoneRegex.test(phone)){
            phoneValidation.innerText = "👍"
        }else{
            phoneValidation.innerText = "👎"
        }
    }

    // VALIDAMOS EL DIRECCIÓN

    const addressInput = event.target.address
    const address = addressInput.value

    //el primer if es para verificar que el campo no este vacio
    if(address.length == 0 ){
        addressValidation.innerText = "❌El campo no puede estar vacio"
    }
    //ahora verificamos que sea una direccion valida
    else{
       if(addressRegex.test(address)){
        addressValidation.innerText = "👍"
    }else{
        addressValidation.innerText = "👎"
    }  
    }
    // VALIDAMOS LA CONTRASEÑA


    const passwordInput = event.target.password
    const password = passwordInput.value

   
    //verificamos que no este vacio
    if(password.length == 0 ){
        passwordValidation.innerText = "❌El campo no puede estar vacio"
    }
    //si tiene caracteres, procedemos a verificar con el regex lo demas
    // verifica que la contraseña tenga al menos 8 caracteres, que tenga algun número, alguna letra mayuscula, alguna minuscla y algún caracter especial
    else{
        if(passwordRegex.test(password)){
        passwordValidation.innerText = "👍"
    }else{
        passwordValidation.innerText = "👎"
    }
    }
    


}