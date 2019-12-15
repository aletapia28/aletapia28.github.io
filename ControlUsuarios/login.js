function test_pass() {
    var res;
    var str = document.getElementById("password").value;
    if (str.match(/[a-z]/g) && str.match(
        /[A-Z]/g) && str.match(
            /[0-9]/g) && str.length >= 8) {
        res = true;
    }
    else
        res = false;
        


    document.getElementById("correo").value = res;
    return res;

} 


function validate_pass (){
    
    window.location.href = "registrarse.html";

}

function ShowPass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function registrarse(){
    window.location.href= "login.html"
}


function cambiar_pass(){
    window.location.href= "login.html"

}