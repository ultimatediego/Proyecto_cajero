let cuentas = [
    { nombre: "Mali", saldo: 200, password: "contra1" },
    { nombre: "Gera", saldo: 290, password: "contra1" },
    { nombre: "Maui", saldo: 67, password: "contra1" }
];



function verificar(){
    var respuesta = document.getElementById("x1").value;
    if (respuesta == "contra"){
        window.location.assign("usuario.html") //referencia : https://www.w3schools.com/js/js_window_location.asp
    }
    else {
        document.getElementById("rx1").innerHTML = "Contraseña Incorrecta"
    }
}

function ingresar(){
    let ingreso = Number(document.getElementById("x2").value);
    if(ingreso < 0){
        document.getElementById("rx2").innerHTML = "no puede ingresar un cifra negativa"
    }
    else{
        let nuevoSaldo = ingreso+Number(localStorage.getItem('miClave'));
        if (nuevoSaldo <=990){
            localStorage.setItem('miClave',nuevoSaldo);
            document.getElementById("rx21").innerHTML = "Usted a ingresado la cantidad de: $"+ +ingreso
            document.getElementById("rx2").innerHTML = "Su nuevo saldo es: $"+ nuevoSaldo
        }
        else {
            document.getElementById("rx2").innerHTML = "La cifra ingresada, no es valida segun nuestra regla de negocio de tener mas de $990.00"
        }
    }
}

function showSaldo(){ 
    let Saldo =  localStorage.getItem('miClave');
    document.getElementById("rx3").innerHTML = "Su saldo es: $"+ Saldo;
    
}

function retirar(){
    let ingreso1 = Number(document.getElementById("x4").value);
    
    if(ingreso1 < 0){
        document.getElementById("rx4").innerHTML = "no puede retirar un cifra negativa"
    }
    else{
        let nuevoSaldo1 = localStorage.getItem('miClave')- ingreso1;

        if (nuevoSaldo1 < 10){
            document.getElementById("rx4").innerHTML = "La cifra ingresada, no es valida segun nuestra regla de negocio de tener al menos $10.00 en su cuenta"
        }
        else{
            localStorage.setItem('miClave',nuevoSaldo1);
            document.getElementById("rx41").innerHTML = "Usted a retirado la cantidad de: $" + ingreso1
            document.getElementById("rx4").innerHTML = "Su nuevo saldo es: $"+ nuevoSaldo1
        }
    }
    
}



