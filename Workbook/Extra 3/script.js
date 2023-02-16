//ACTIVIDAD 1 - REPETICION UNO
//Solicitar al usuario un (1) un número y un (1) texto. Efectuar una salida por alerta con el mensaje ingresado por cada repetición, hasta alcanzar el valor señalado por el usuario.

// let numero = prompt('Ingrese un numero:');
// let texto = prompt('Ingrese un texto:');

// for (let index = 0; index < numero; index++) {
    // alert(texto);
// }

//ACTIVIDAD 2 - REPETICION DOS
//Solicitar al usuario un (1) número. Emplear este valor para determinar la cantidad de repeticiones, y efectuar una salida por alerta con el mensaje “lado” en cada repetición.
//Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.

// let numero = prompt('Ingrese un numero:');

// for (let index = 0; index < numero; index++) {
    // if (index > 3) {
        // break;
    // }
    // alert('lado')
// };

//ACTIVIDAD 3 - REPETICION TRES
// Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
// Luego realizar un única salida por alerta, con el listado de alumnos registrados.

    // let alumnos = '';

    // for (let index = 0; index < 10; index++) {
        // alumnos += prompt('Ingrese alumnos');
    // };

    // alert(alumnos)

//ACTIVIDAD 4 - REPETICION CUATRO
//Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”.
//Luego realizar un única salida por alerta, con todos los nombres ingresados.

// let nombres = prompt('Ingrese nombres.');

// let nombresIngresados = '';

// while (nombres != 'voldemort') {
    // nombresIngresados += nombres +"\n";
    // nombres = prompt('Ingrese nombres.');
// }
// alert(nombresIngresados);

//ACTIVIDAD 5 - REPETICION CINCO
// Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
// “Tomate” si es 1.
// “Papa” si es 2.
// “Carne” si es 3.
// “Pollo” si es 4.

// let numeros = prompt('Ingrese numeros.');

// while (numeros != "ESC") {
    // switch (numeros) {
        // case "1":
            // alert("Tomate");
            // break;
        // case "2":
            // alert("Papa");
            // break;
        // case "3":
            // alert("Carne");
            // break;
        // case "4":
            // alert("Pollo");
            // break;
        // default:
            // alert("Error");
            // break;
    // }
    // numeros = prompt('Ingrese numeros.');
// }
