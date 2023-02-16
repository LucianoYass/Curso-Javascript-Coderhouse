// Traslada al proyecto integrador el concepto de objetos, visto en la clase de hoy. A partir de los ejemplos mostrados la primera clase, y en función del tipo de simulador que hayas elegido, deberás:
// Incorporar al menos un Array en tu proyecto.
// Utilizar algunos de los métodos o propiedades vistos en la clase.


//Declaro variables.
let precio;
let precioFinal;
let nombre;
let notebook;
let confirmacion;
let descuento;


//Declaro arrays.
const notebook1 = ['Dell Inspiron', 460];
const notebook2 = ['Acer Nitro 5', 950];
const notebook3 = ['Apple Macbook Air', 980];
const notebook4 = ['Lenovo Legion', 890];
const notebook5 = ['HP', 570];


//Declaro funciones.
function confirmacionProducto () {
    confirmacion = parseInt(prompt("El precio de "+notebook+" es de "+precio+"USD. Para confirmar ingrese 1, de lo contrario ingrese 0."));
};

function calcularDescuento() {
    descuento = 15 * precio / 100;
    precioFinal = precio - descuento;
}

//Pido el ingreso de datos para comenzar con el ciclo, lo cual el mismo llevara un condicional, el programa no continuara hasta que se ingresen los datos pedidos.
alert("Bienvenido a TodoNotebooks, su tienda de computadoras portatiles.")
alert("Ahora dinos tu nombre.")
nombre = prompt("¿Cuál es tu nombre?");
notebook = prompt(nombre+" tenemos cinco modelos de notebooks diferentes, Dell Inspiron, Acer Nitro 5, Apple Macbook Air, Lenovo Legion, HP.");

do {
    if (notebook.toLowerCase() == "dell inspiron"){
        notebook = notebook1[0];
        precio = notebook1[1];
        confirmacionProducto ();
        if (confirmacion === 0){
            notebook = prompt(nombre+" tenemos cinco modelos de notebooks diferentes, Dell Inspiron, Acer Nitro 5, Apple Macbook Air, Lenovo Legion, HP.");
        }
    } else if (notebook.toLowerCase() =="acer nitro 5") {
        notebook = notebook2[0];
        precio = notebook2[1];
        confirmacionProducto ();
        if (confirmacion === 0){
            notebook = prompt(nombre+" tenemos cinco modelos de notebooks diferentes, Dell Inspiron, Acer Nitro 5, Apple Macbook Air, Lenovo Legion, HP.");
        }
    } else if (notebook.toLowerCase() == "apple macbook air") {
        notebook = notebook3[0];
        precio = notebook3[1];
    confirmacionProducto ();
        if (confirmacion === 0){
            notebook = prompt(nombre+" tenemos cinco modelos de notebooks diferentes, Dell Inspiron, Acer Nitro 5, Apple Macbook Air, Lenovo Legion, HP.");
        }
    } else if (notebook.toLowerCase() == "lenovo legion") {
        notebook = notebook4[0];
        precio = notebook4[1];
    confirmacionProducto ();
        if (confirmacion === 0){
            notebook = prompt(nombre+" tenemos cinco modelos de notebooks diferentes, Dell Inspiron, Acer Nitro 5, Apple Macbook Air, Lenovo Legion, HP.");
        }
    } else if (notebook.toLowerCase() == "hp") {
        notebook = notebook5[0];
        precio = notebook5[1];
    confirmacionProducto ();
        if (confirmacion === 0){
            notebook = prompt(nombre+" tenemos cinco modelos de notebooks diferentes, Dell Inspiron, Acer Nitro 5, Apple Macbook Air, Lenovo Legion, HP.");
        }
    } else {
        notebook = prompt(nombre+" no elegiste un modelo correcto, tenemos cinco modelos de notebooks diferentes, Dell Inspiron, Acer Nitro 5, Apple Macbook Air, Lenovo Legion, HP.");
    }
    
} while (confirmacion != 1)

descuento = parseInt (prompt("¿Con qué medio de pago desea abonar? En efectivo contamos con un 15% de descuento. Ingrese 1 si abona en efectivo, 0 si abona con otro medio de pago."));

//Segun el dato ingresado, el programa vera si hace el descuento, o si no, no hara ningun descuento y se pagara el precio normal.
switch(descuento) {
    case 1:
        calcularDescuento();
        alert("El precio con 15% de descuento de "+notebook+" es de "+precioFinal+"USD.");
    break;

    case 0:
        precioFinal = precio;
        alert("El precio sin descuento de "+notebook+" es de "+precioFinal+"USD.");
    break;
    default:
        descuento = parseInt (prompt("No se encontró esa opción. ¿Con qué medio de pago desea abonar? En efectivo contamos con un 15% de descuento. Ingrese 1 si abona en efectivo, 0 si abona con otro medio de pago."));
}

//Mas que nada para guiarme de que finalizo toda la seguidilla de acciones el programa.
console.log("Fin del programa.");
