//Declaracion
/*function saludar () {
    alert("Hola pa");
}

//Invocacion a la funcion
saludar();*/

/*function calcularEdad() {
    const year=2022;
    let nacimiento=parseInt(prompt("Ingresa el año en que naciste"));
    let edad=year - nacimiento;
    alert("Tenes "+edad+" años");
}

//calcularEdad();


//Funciones con parametros

//Ej

function calcularMultiplicacion(num1, num2) {
    let resultado = num1 * num2
    alert("El resultado de multiplicar "+num1+" x "+num2+" es: "+resultado);
}

//calcularMultiplicacion(14, 10);

/*let primerNum=parseInt(prompt("Ingrese el primer num"));
let segundoNum=parseInt(prompt("Ingrese segundo num"));

calcularMultiplicacion(primerNum, segundoNum);*/

/*function calcularIva(precio) {
    let totalConIva = precio * 1.21;
    alert("El precio total con Iva incluido es $"+totalConIva);
}

//for(let i=1; i<4; i++) {
//    let precioProd = parseFloat(prompt("Ingrese el precio del producto"));
//    calcularIva(precioProd);
//}

//let precioProd = parseFloat(prompt("Ingresa el precio del producto (0 para salir)"));
//while(precioProd!=0) {
//    calcularIva(precioProd);
//    precioProd= parseFloat(prompt("Ingresa el precio del producto (0 para salir)"));
//}

//function con parametros y return

function calcularM2(largo, ancho) {
    let metrosCuadrados=largo * ancho;
    return metrosCuadrados;
}

function mostrarResultado(result) {
    alert("El valor calculado es: "+result);
}

//una variable recibe lo que arroja la funcion
let resultado = calcularM2(5,7);
//alert("Resultado "+resultado+" M2.");
//mostrarResultado(resultado);

//Variables globales y locales
let equipo="Argentina";
//variable equipo es global
//console.log(equipo);

for(let i=1; i<3;i++){
    console.log(equipo);
    //variable color es local
    let color="celeste";
    console.log(color)
}*/

//Funciones anonimas
//Es una funcion que se define sin nombre y se utiliza para ser pasada como parametro
//o asignada a una variable

//Funciones flecha
//Identificamos a las funciones flechas como funciones anonimas de sintaxis simplificada.

//let descuento = (precio) => precio * 0.10;
//console.log(descuento(1000));

//Funcion anonima, concateno nombre y apellido
//let nombreCompleto = (nombre, apellido) => {
//    let concatenado = nombre + " " + apellido;
//    return concatenado;
//}

//console.log(nombreCompleto("Pepe"+"Gomez"));

