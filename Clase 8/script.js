h//DOM
//Es una estructura de objetos generada por el navegador, la cual representa la pagina HTML actual.
//Todas las etiquetas del HTML dentro del DOM son llamados nodos.

// let elementoID = document.getElementById('parrafoEspecial')
// console.log(elementoID);

// let elementosClass = document.getElementsByClassName('resaltado');
// // console.log(elementosClass);

// let elementosTag = document.getElementsByTagName('p');
// console.log(elementosTag);


// for (const elemento of elementosClass) {
    // console.log(elemento)
// }

// let elementoQS = document.querySelector('span.resultado')
// console.log(elementoQS);

// let todosQS = document.querySelectorAll('span.resaltado');
// console.log(todosQS);

// let especificoQS = document.querySelectorAll("Input[type='text']");
// console.log(especificoQS);

// let titulo = document.getElementById('tituloPrincipal');

// titulo.innerText = 'Hola soy un nuevo titulo';
// titulo.className ='bg-success text-light';

// let nuevoTitulo = prompt('Ingresa el nuevo titulo de la web');
// titulo.innerText=nuevoTitulo;

// let imagen = document.getElementById('imagen');
// imagen.remove();
// // let colorElegido = prompt('Elegi una imagen: \n1-info sobre DOM en fondo blanco \n2-Info sobre DOM en fondo negro');

// if(colorElegido=='1'){
    // imagen.src = './img/domWhite.png';
// } else if (colorElegido=='2'){
    // imagen.src= './img/domBlack.jpg';
// } else {
    // alert('eleccion invalida');
    // imagen.src='./img/404.webp';
// } 

// let contenedor = document.querySelector('#teoria');
// // contenedor.innerHTML +=' <p>Soy un nuevo parrafo agregado a traves del innerHTML.</p>'

// let nuevoDiv = document.createElement('div');
// document.body.prepend(nuevoDiv);
// // nuevoDiv.innerHTML = '<footer class="conainter-fluid bg-warning text-light py-5"><span>lucho cordoba 2022</span></footer>';

// let producto = {
    // id: 1,
    // nombre: 'SMART TV SAMSUNG 32"HD',
    // precio: 10000,
// }

// // let concatenado = "ID: "+producto.id+" - Producto: "+producto.nombre+ " - $ "+producto.precio;
// console.log(concatenado);

// // let plantilla = ' ID: ${producto.id} - Producto: ${producto.nombre} - $ ${producto.precio} '
// console.log(plantilla)

let tarjeta = document.createElement('div');
tarjeta.className = 'card my-5 bg-light';
tarjeta.id= `${producto.id}`;
tarjeta.innerHTML = '<h4 class="card-header">${producto.nombre}</h4>'