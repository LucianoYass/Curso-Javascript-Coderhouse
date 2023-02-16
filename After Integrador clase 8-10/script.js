//Fake databases de usuarios y mascotas.
const usuarios = [{
    nombre: 'Azul',
    mail: 'azul@mail.com',
    pass: 'user123'
},
{
    nombre: 'Betiana',
    mail: 'beti@mail.com',
    pass: 'tite25'
},
{
    nombre: 'Carlos',
    mail: 'carlos@mail.com',
    pass: 'sanlore2002'
}]

const mascotas = [{
    nombre: "Oddie",
    especie: "perro",
    edad: 1,
    peso: 3,
    img: './img/oddie.jpg'
}, {
    nombre: "Garfield",
    especie: "gato",
    edad: 3,
    peso: 8,
    img: './img/garfield.webp'
}, {
    nombre: "Orson",
    especie: "chancho",
    edad: 2,
    peso: 40,
    img: './img/orson.webp'
}, {
    nombre: "Roy",
    especie: "gallo",
    edad: 2,
    peso: 2,
    img: './img/roy.webp'
}]

//Todos los elementos del DOM que voy a necesitar.
const mailLogin = document.getElementById('emailLogin'),
    passLogin = document.getElementById('passwordLogin'),
    recordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    contTarjetas = document.getElementById('tarjetas'),
    toggles = document.querySelectorAll('.toggles');

function guardarDatos(usuarioDB, storage){
    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass
    }


    storage.setItem('usuario', JSON.stringify(usuario));
}

function recuperarUsuario(storage){
    let usuarioEnStorage = JSON.parse(storage.getItem('usuario'));
    return usuarioEnStorage;
}

function saludar(usuario){
    nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
}

function mostrarInfoMascota(array) {
    contTarjetas.innerHTML = '';
    array.forEach(element => {
        let html = `<div class="card cardMascota" id="tarjeta${element.nombre}">
                <h3 class="card-header" id="nombreMascota">Nombre: ${element.nombre}</h3>
                <img src="${element.img}" alt="${element.nombre}" class="card-img-bottom" id="fotoMascota">
                <div class="card-body">
                    <p class="card-text" id="especieMascota">Especie: ${element.especie}</p>
                    <p class="card-text" id="edadMascota">Edad: ${element.edad} años</p>
                    <p class="card-text" id="pesoMascota">Peso: ${element.peso} kilos</p>
                </div>
            </div>`;
        contTarjetas.innerHTML += html;
    });
}

function presentarInfo(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase)
    });
}

function validarUsuario(userDB, user, pass) {
    let encontrado = userDB.find((userDB) => userDB.mail == user);

    if (typeof encontrado ==='udefined') {
        return false;
    }else{
        if(encontrado.pass!=pass){
            return false;
        }else{
            return encontrado;
        }
    }
}

btnLogin.addEventListener('click',(e)=>{
    e.preventDefault();

    if(!mailLogin.value||!passLogin.value){
        alert('Todos los campos son requeridos');
    }else{
        let data = validarUsuario(usuarios, mailLogin.value, passLogin.value)
        if(!data){
            alert('Usuario y/o contraseña erroneos');
        }else{
            if(recordar.checked) {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            } else {
                guardarDatos(data, sessionStorage);
                saludar(recuperarUsuario(sessionStorage));
            }
                modal.hide();
                mostrarInfoMascota(mascotas);
                presentarInfo(toggles, 'd-none');
        }
    }
})

btnLogout.addEventListener('click', ()=>{
    borrarDatos();
    presentarInfo(toggles, 'd-none');
});

function estaLogueado(usuario) {
    if(usuario) {
        saludar(usuario);
        mostrarInfoMascota(mascota);
        presentarInfo(toggles, 'd-none');
    }
}

estaLogueado(recuperarUsuario(localStorage));