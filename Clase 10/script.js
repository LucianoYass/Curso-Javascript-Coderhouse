//El objeto STORAGE permite almacenar datos de manera local en el navegador sin necesidad de realizar ninguna conexion con el servidor. De esta manera, cada cliente puede preservar informacion de la aplicacion. El navegador nos ofrece dos tipos de storage: localStorage y sessionStorage.

//Sessionstorage:
//Los datos almacenados en sessionStorage se almacenan en el navegador hasta que se cierre o se reinicie. No persiste mas que eso.

//Localstorage: setitem.
//Los datos almacenados en localStorage (variable global preexistente) se almacenan en el navegador de forma indefinida (o hasta que se borren los datos de navegacion del browser).

// localStorage.setItem('nombre','Emiliano');
// localStorage.setItem('apellido','Velazquez');
// localStorage.setItem('edad',24);
// localStorage.setItem('esMayor',true);
// sessionStorage.setItem('nombre','Martina');
// sessionStorage.setItem('apellido','DiMaria');
// sessionStorage.setItem('edad',15);
// sessionStorage.setItem('esMayor',false);

//Si vuelvo a guardar una clave que ya existe, voy a sobreescribir su valor
// sessionStorage.setItem('edad', 16);

// let emailUsuario = document.getElementById('emailAddress');
// let btnLogin = document.getElementById('btnLogin');

// btnLogin.addEventListener('click', ()=>{
    // localStorage.setItem('email', emailUsuario.value)
// })

// console.log(localStorage.getItem('edad'))

// let titulo = document.getElementById('titulo')
// titulo.innerText = `Bienvenido, ${localStorage.getItem('nombre')}`

// for(let i=0;i<sessionStorage.length;i++){
    // let clave = sessionStorage.key(i);
    // let valor = sessionStorage.getItem(clave);
    // console.log('Clave: ' + clave);
    // console.log('Valor: ' + valor);
// }

//Por defecto, los valores se guardan como strings, independientemente del tipo de dato original. Y se recupera tambien como strings.

// sessionStorage.setItem('peso', 23.4)
// let pesoProducto = sessionStorage.getItem('peso');
// console.log(pesoProducto);

//JSON: es un formato basado en texto plano, para representar datos estructurados con la sintaxis de objetos de JavaScript. Es comunmente utilizado para enviar y almacenar datos en aplicaciones web.

// let flor = {
    // user: "Flor",
    // pass: 123,
    // esCasada: true
// }

// sessionStorage.setItem('user', JSON.stringify(flor));

// let usuario = JSON.parse(sessionStorage.getItem('user'));

// console.log(usuario);

// let carrito = [{nombre: 'papas', cantidad: 3, marcas: 'Pringles'},
// {nombre: 'cerveza', cantidad: 1, marcas: 'Quilmes'}]

// localStorage.setItem('carritoEnStorage', JSON.stringify(carrito));

// console.log(JSON.parse(localStorage.getItem('carritoEnStorage')));

// localStorage.removeItem('carritoEnStorage');

// sessionStorage.clear()
let btnLogin = document.getElementById('btnLogin');
let btnVaciarTodo = document.getElementById('btnVaciarLocalStorage');
let btnVaciarSessionStorage = document.getElementById('btnVaciarSessionStorage');
let recordar = document.getElementById("rememberMe");


function guardarDatos(storage) {
    let user = document.getElementById('emailAddress').value;
    let pass = document.getElementById('password').value;

    const usuario = {
        "user": user,
        "pass": pass
    }

    storage.setItem('user', JSON.stringify(usuario))
}

function borrarDatos(storage) {
    storage.clear()
}

btnVaciarTodo.addEventListener('click', ()=>{
    borrarDatos(sessionStorage);
    borrarDatos(localStorage);
})

btnVaciarSessionStorage.addEventListener('click', ()=>{
    borrarDatos(sessionStorage)
})

btnLogin.addEventListener('click', ()=>{
    if(recordar.checked) {
        guardarDatos(localStorage)
    } else {
        guardarDatos(sessionStorage)
    }
})
