//ASINCRONIA: Facilita el manejode programas que realizan multiples acciones a la vez. Uno  de sus principales riesgos: puede dificultar la comprension de aquellos programas que tienden a seguir una unica linea de accion. No se explica con el timepo de ejecucion del  proceso, sino con el orden que ocupa en el listado de peticiones a ejecutar.

//setTimeout(()=>{
//  console.log("Proceso asincronico")
//}, 3000);

//console.log("inicio del proceso");

// setTimeout(()=>{
// console.log("mitad del proceso");
// }, 3000);

//console.log("Fin del proceso");

//CALL STACK
//Es una lista dfodne se apilan las distintas tareas a ejecutar por nuestro programa. Javascript es un lenguaje single threaded, lo que significa que tiene un unico stack de ejecucion. De ahi que la ejecucion es implicitamente sincronica.

//EVENT LOOP
//El event loop es la herramienta que permite la sincronizacion entre nuestro call stack con estas tareas asincronicas que funcionan  en un thread aparte. Si el stack esta vacio, el event loop envia la primera funcion que este en la callback queue al call stack y comienza a ejecutarse.

//setInterval
//Tiene la misma sintaxis que setTimeout, pero la unidad de tiempo es un intervalo para la repeticion de la funcion asociada. Permite ejecutar funciones de manera reiterativa tras los milisegundos indicados hasta que indiquemos su detencion o se cierre la aplicacion.

//ClearInterval y clearTimeout
//En caso de querer remover un intervalo, utilizamos la funcion clearInterval(). Tambien podemos detener la ejecucion de un setTimeout invocando clearTimeout().

// console.log("Primero");

// setTimeout(()=>{
    // // console.log("Segundo");
// }, 0);

// console.log("Tercero");

// setTimeout(()=>{
    // // console.log("Cuarto");
// }, 0);

// new Promise((resolve)=>{
    // // resolve("Promesa");
// }).then(console.log);

// console.log("Ultimo");

// function funcion() {
    // // console.log("Funcion");
// }

// funcion();

//PROMESAS
//Es un objeto de Javascript que representa un evento a futuro. Es una accion asincronica que se puede completar en algun momento y producir un valor, y notificar cuando esto suceda. Una promesa cuenta con tres estados posibles: 1-pending 2-fullfilled 3-rejected. Las promesas pueden ser resueltas o rechazadas.

// const aplicarDescuento = new Promise((resolve, reject)=>{
    // const descuento = true;

    // if (descuento) {
        // resolve("Descuento aplicado");
    // } else {
        // reject("No se puede aplicar descuento");
    // }
// });
// // console.log(aplicarDescuento);

// // // //el .then sobreentiende que el resultado se aplica si se cumplio la promesa, mientras que el .catch entienede el error se aplica si no se cumplio la promesa.

// aplicarDescuento.then((resultado)=>{
    // console.log(resultado);
// }).catch((error)=>{
    // console.log(error);
// });

const productos = [
    {id: 1, nombre: "producto1", precio: 1000},
    {id: 2, nombre: "producto2", precio: 1500},
    {id: 3, nombre: "producto3", precio: 2000},
];

const findProdByID = (id)=>{
    const prod = productos.find((item)=>item.id === id);

    return  new Promise((resolve, reject)=>{
        if(prod){
            resolve(prod);
        } else {
            reject("No coincide con la busqueda");
        }
    });
};

findProdByID(4).then((prod)=>console.log(prod)).catch((err)=>console.log(err));