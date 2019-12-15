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
