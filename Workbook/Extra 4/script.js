//Actividad 1 Entradas y salidas

//Codificar tres funciones:
// Una función entrada(), la cual solicite un valor al usuario y lo retorne.
// Una función procesamiento(valor), donde se transforme la entrada.
// Una función salida(valor), la cual mostrará el resultado por alerta.
// Luego, invocar las tres funciones.

// function entrada() {
    // return prompt('Ingrese un valor');
// };

// function procesamiento(valor) {
    // return "La entrada es "+valor;
// };

// function salida(valor) {
    // alert(valor);
// };

// salida(procesamiento(entrada()));

//Actividad 2 Redondeo

//Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más cercano. Para ello, puede emplearse  Math.round.
//Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario.

// function redondeo(valor) {
    // return Math.round(valor);
// };


// for (let index = 0; index < 5; index++) {
    // let num = prompt('Ingrese  un numero decimal');
    // alert(redondeo(num));
// };

//Actividad 3 Impuestos

//Codificar una función con la siguiente cabecera: impuesto (precio, porcentaje). En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado.
// Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un precio y porcentaje al usuario.

// function impuesto(precio, porcentaje) {
    // return precio + ((precio * porcentaje) / 100);
// };

// for (let index = 0; index < 5; index++) {
    // // let resultado = impuesto(parseFloat(prompt('Ingresar un precio')), parseFloat(prompt('Ingresar un porcentaje')));

    // alert(resultado);
// };

//Actividad 4 Cotización

//Codificar dos funciones:
// Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.
// // Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.
// // Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.

// const cotizacionDolar = 374;

// const cotizarDolar = (pesos) => pesos / cotizacionDolar;

// const cotizarPesos = (dolar) => dolar * cotizacionDolar;

// // let cotizacion = prompt('Ingrese la cotizacion \n 1-Pesos a dolar \n 2-Dolar a pesos');

// let valor = prompt("Ingrese valor");

// switch (cotizacion) {
    // case "1":
        // alert(cotizarDolar(valor));
        // break;
    // case "2":
        // alert(cotizarPesos(valor));
        // break;
    // default:
        // break;
// };

//Actividad 5 Validación

//Codificar una función con la siguiente cabecera: validacion(cadena). En ella, se retorna un valor booleano, el cual es true si el parámetro no es un cadena vacía. Caso contrario, se retorna false. Luego invocar la función de forma iterativa, hasta que el usuario tipee “ESC”, solicitando en cada ciclo una cadena a validar.

function validacion(cadena) {
    return cadena != '';
};

let entrada = prompt("Ingrese ESC para salir");

while (entrada != "ESC") {
    alert(validacion(entrada));
    entrada = prompt("Ingrese ESC para salir");
};