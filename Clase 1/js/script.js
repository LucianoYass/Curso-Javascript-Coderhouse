//Esto es un comentario de una linea. Ctrl+K+C

/* Este es un comentario de varias lineas
sirve para explicar funcionalidades
y tambien para comentar bloques de codigo
mientras esta en desarrollo
El atajo es Shift+Alt+A */

/*Palabras reservadas: break, case, catch, continue, default, let, delete
do, else, finally, for, function, if, in, instanceof, new, return, switch, this
throw, try, typeof, var, void, while, with, y varias mas*/

/* Variable: es un espacio reservado en memoria para un dato*/

//Esto declara una variable y la inicializa
//let me permite despues modificar la variable
//Ej: miNombre = "Roberto Carlos";
/*let miNombre = 'Luciano';
let minombre = 'Lucho';
let nombreDeOtraPersona = "Matias";
//No es recomendable usar var, porque este permite modificarla desde cualquier parte, fuera de una funcion, etc
var nombreDelGato = 'Smelly Cat';
//const permite crear variables absolutas, que no se van a poder modificar a lo largo del programa
//se suelen declarar en mayuscula para que despues al llamarlas sepamos que son variables absolutas
const TATUAJE ='mama me tatue';
const PI = 3.14;
const IVA = 0.21;
//No usar caracteres especiales para nombrar variables. Ejemplo ñ, ì, @, !, etc. No dejar espacioes en blanco entre palabras en el nombre de la variable. Si hace falta, usar camelCase.

//Valores de variables

let cantMascotas = 1; //Int
let altura = 1.62; //Float
let apellido = 'Hendel'; //String

//Variables que almacenan datos de tipo String
let fraseFavorita = 'Menos charla y mas accion';
let palabraFavorita = 'Serendipia'

//Creacion de variable
let ciudad;
let pais;
let edad;

//Asignacion e inicializacion de variables
ciudad = 'Cartagena';
pais = 'Argentina';
edad = 2;

//Operadores aritmeticos
let numeroA = 4;
let numeroB = 9;

let suma = numeroA + numeroB;
let resta = numeroB - numeroA;
let modulo = numeroB % numeroA;
let prducto = numeroA * PI;

//Concatenadores
let palabra1 = 'Hola';
let palabra2 = 'Mundo';
let remate = 'A la grande le puse Cuca';
let numero = 27;
let numeroString = '39';

let concatenar1y2 = palabra1+palabra2; //console.log(concatenar1y2) = HolaMundo

let concatenarConEspacio = palabra1+ '' + palabra2; //console.log(concatenar1y2conEspacio) = Hola Mundo

let numeroStringYNumero = numeroString + numero;

let nombreUsuario = prompt('Ingresa tu nombre');

alert('Bienvenido/a ' + nombreUsuario);

console.log(suma);
console.log('El resultado de la suma es '+ suma);*/

//parseInt transforma una string a num entero y parseFloat transforma una string en num decimal
/*let edadUsuario = parseInt(prompt('Ingresa tu edad'));
let alturaUsuario = parseFloat(prompt('Ingresa tu altura'));
console.log(edadUsuario);
console.log(alturaUsuario);*/

/*let edadActual = parseInt(prompt('Ingresa tu edad actual'));
let edadEn5 = edadActual + 5;
console.log(edadEn5);
alert('En 5 años, tendras ' + edadEn5 + ' años.');*/

//Condicionales, if
/*let nombre="Pepe"; //Si le pongo otro nombre, no aparecera ningun mensaje
if(nombre=="Pepe") {
    console.log("Bienvenido Pepe!!!")
}*/


//Condicionales, else
/*let nombre=prompt("Ingresa tu nombre");
if (nombre=="Pepe") {
    console.log("Bienvenido Pepe!!!");
    alert("Bienvenido Pepe!!!");
} else {
    console.log("Usuario: "+nombre+" no autorizado");
    alert ("Vos no sos Pepe!!!");
}*/

//Condicionales, else-if
/*let calorias=parseInt(prompt("Ingrese la cantidad de calorias que consume en el dia"));

if(calorias < 1500) {
    console.log("Deficit calorico! ATENCION!!!");
} else if(calorias < 2000) {
    console.log("Calorias adecuadas");
} else if(calorias < 2800) {
    console.log("Exceso calorico, hace deporto dogor");
} else {
    console.log("Te pasaste de calorias");
}*/

//Booleanos, true o false
/*let conEnvio = true;

if(conEnvio) {
    let direccion=prompt("Ingrese la direccion de entrega del paquete");
    console.log("Mañana recibiras tu pedido en "+direccion);
}*/

///////////////

/*let edad=parseInt(prompt("Ingrese su edad"));
let esMayorDeEdad = (edad > 17);//true, si seria menor, corresponde false

if(esMayorDeEdad) {
    console.log("Puede ingresar al bar");
} else {
    console.log("Aun no puede ingresar al bar");
}*/

//Operadores relacionales (==, ===, !=, !==, <; <=; >; >==)

/*let num1= 1;
let numUno = "1";

let sonIguales = (num1 == numUno);
console.log("Son iguales "+ sonIguales);

let sonEstrictamenteIguales = (num1 === numUno);
console.log("Son estrictamente iguales "+ sonEstrictamenteIguales);

let esDistinto = (num1 != numUno);
console.log("Es distinto "+ esDistinto);

let esEstrictamenteDistinto = (num1 !== numUno);
console.log("Es estrictamente distinto "+ esEstrictamenteDistinto);
*/

//Operadores logicos
//Operador && - AND

/*let usuario=prompt("Nombre de usuario");
let contrasenia=prompt("Contraseña ");

if((usuario=="Pepe")&&(contrasenia=="1234")) {
    console.log("Bienvenido al sistema");
} else {
    console.log("Usuario no autorizado");
}*/

//Operador || - OR

/*let puntos=0;
let pregunta1 = prompt("Donde se esta jugando el Mundial de futbol 2022??");

if((pregunta1 == "qatar")||(pregunta1 == "catar")) {
    alert("Excelente suma 2 puntos");
    puntos = puntos + 2;
} else {
    alert("La respuesta era qatar, no suma puntos");
}

console.log("Puntos acumulados: "+puntos);*/

