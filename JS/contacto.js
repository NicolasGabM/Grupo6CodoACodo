function emailValido(valor){
    return  (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor));
}

var boton = document.getElementById("botonEnviar");
var mail = document.getElementById("mail");
var nombre = document.getElementById("nombre");
var mensaje = document.getElementById("mensaje");
function validar(){
    if(emailValido(mail.value) && nombre.value !== ""){
        alert("se envio la informacion");
    }
    else if(nombre.value == ""){
        alert("Debe ingresar un nombre");
        event.preventDefault();
    }
    else if(!emailValido(mail.value)){
        alert("Debe ingresar un mail valido")
        event.preventDefault();
    }
}
