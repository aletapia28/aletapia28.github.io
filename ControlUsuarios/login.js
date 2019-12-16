
function test_pass(pass) {
    if (pass.match(/[a-z]/g) && pass.match(
        /[A-Z]/g) && pass.match(
            /[0-9]/g) && pass.length >= 8) {
        return true;
    }
    else {
        alert("La contraseña no es válida")
        return (false)
    }

}

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    alert("La dirección de correo no es válida")
    return (false)
}



function IniciarSesion() {
    var passw = document.getElementById("password").value;
    var mail = document.getElementById("correo").value;

    
    if (test_pass(passw) == true && ValidateEmail(mail))
        window.location.href = "index.html"
    
}

function ShowPass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function registrarse() {
    var nombre = document.getElementById("Nombre").value;
    var passw = document.getElementById("password").value;

    if (test_pass(passw) == true)
        window.location.href = "login.html"
    else
        alert("La contraseña no es valida");
}


function cambiar_pass() {
    var passw = document.getElementById("passwordNueva").value;
    var passwNueva = document.getElementById("password2").value;
    var mail = document.getElementById("email").value;

    if (test_pass(passw) == true && passwNueva===passw && ValidateEmail(mail)==true)
        
            window.location.href = "index.html"
        
        
    else
        alert("La contraseña no es valida");


}

function recover() {
    var mail = document.getElementById("email").value;

    if(ValidateEmail(mail)==true)
        window.location.href = "login.html"
}