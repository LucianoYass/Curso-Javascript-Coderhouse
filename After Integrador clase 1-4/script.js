let savedPIN = "1405";

function login() {

    let access = false;
    
    for (let i = 2; i >=0; i--) {
        let userPIN = prompt("Ingrese su PIN. Tienes "+(i+1)+" intentos.");

        if (userPIN===savedPIN) {
            alert('Ingreso exitoso. Bienvenido/a');
            access = true;
            break;
        } else {
            alert("Error. Te quedan "+i+" intentos.");
        }
    }

    return access;
}

if (login()) {
    let saldo = 150000;

    let option = prompt("Elegi una opcion: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Deposito. \nPresiona X para finalizar.");
    
    while (option!='x' && option!='X') {
        switch(option) {
            case "1":
                alert('Tu saldo es '+saldo);
                break;
            case "2":
                let retiro = parseInt(prompt('Ingrese cantidad a retirar.'));
                    if (retiro <= saldo) {
                        saldo = saldo-retiro;
                        alert('Retiro exitoso. Tu nuevo saldo es $ '+saldo);
                    } else {
                        alert('Fondos insuficientes.');
                    }
                break;
            case "3":
                let deposito = parseInt(prompt('Ingrese monto a depositar.'));
                saldo += deposito;
                alert('Deposito exitoso. Tu nuevo saldo es $ '+saldo);
                break;
            default:
                alert('Elegiste una opcion invalida.')
                break;
        }

        option = prompt("Elegi una opcion: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Deposito. \nPresiona X para finalizar.");
    }

} else {

    alert('Retendremos tu tarjeta por seguridad.');
}

alert('Adios.');