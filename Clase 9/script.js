const btnSaludoGenerico = document.getElementById('generico'),
btnSaludoPersonalizado = document.getElementById('personalizado'),
btnTest = document.getElementById('prueba'),
titulo = document.querySelector('.codertitulo'),
inputNombre = document.querySelector('#inputNombre'),
inputPassword = document.querySelector('#inputPassword'),
caja = document.querySelector('.embajada'),
fotoBotellas = document.getElementById('imgBotellas');

function saludarGenerico() {
    alert('Hola!');
}

function saludarPersonalizado(nombre) {
    alert('Hola, '+nombre)
}

// btnSaludoGenerico.addEventListener('click', saludarGenerico);

// btnSaludoPersonalizado.addEventListener('click', ()=> {
    // saludarPersonalizado(nombreUsuario);
// })

btnSaludoGenerico.onclick = saludarGenerico;

btnSaludoPersonalizado.onclick = ()=>{
    let nombreUsuario = prompt('Ingresa tu nombre para que te saludemos');
    saludarPersonalizado(nombreUsuario);
}

btnTest.onclick = () => {
    console.log('Hiciste click en el boton');
}

// btnTest.onmousemove = ()=> {
    // console.log('Moviste el mouse por acá');
// }

// caja.onmouseover = () => {
    // caja.style.backgroundImage = 'url("./img/estados.jpg")';
    // console.log('Estados Unidos');
// }

// caja.onmouseout = ()=> {
    // caja.style.backgroundImage = 'url("./img/australia.jpg")';
    // console.log('Australia');
// }

let radios = document.querySelectorAll('input[type="radio"]');
console.log(radios);

// radios.addEventListener('click', ()=>{
    // console.log('Hiciste click en el radiobutton');
// })

// for (const elemento of radios) {
    // elemento.addEventListener('click',  ()=> {
        // console.log('Hiciste click en el radiobutton '+elemento.value);
    // })
// }

function cambiarImagen(elemento, source) {
    elemento.src = source;
}

const botellas = [{
    id: 1,
    nombre: 'tupperware twist 500',
    color: 'rosa',
    imagen: './img/rosa.webp'
}, {
    id: 2,
    nombre: 'tupperware twist 500',
    color: 'azul',
    imagen: './img/azul.webp'
}, {
    id: 3,
    nombre: 'tupperware twist 500',
    color: 'naranja',
    imagen: './img/naranja.webp'
}, {
    id: 4,
    nombre: 'tupperware twist 500',
    color: 'verde',
    imagen: './img/verde.webp'
}]

radios.forEach(item=>{
    item.addEventListener('click', ()=>{
        let colorUsuario = item.value;
        let variante = botellas.find(botella=>botella.color==colorUsuario);
        cambiarImagen(fotoBotellas, variante.imagen)
    })
})

//EVENETOS TECLADO

// //KEYUP CAPTURA EL DATO CUANDO SE TERMINA DE ESCRIBIR
// inputPassword.addEventListener('keyup', ()=>{
    // console.log(inputPassword.value);
// })

// //KEYDOWN CAPTURA EL DATO AL MOMENTO DE ESCRIBIRLO
// inputPassword.addEventListener('keydown', ()=>{
    // console.log(inputPassword.value);
// }) 

inputNombre.onchange = ()=>{
    console.log(inputNombre.value);
}

inputPassword.addEventListener('keypress', (evento)=>{
    let codCaracter = evento.charCode;
    if(codCaracter !=0) {

        if(codCaracter<97||codCaracter>122){
            evento.preventDefault()
            alert("Solo podes usar minusculas");
        }
    }
})

const btnRegistrar = document.getElementById('registrar');

btnRegistrar.onclick=(evento)=>{
    evento.preventDefault()
    alert('Te registraste exitosamente');
}