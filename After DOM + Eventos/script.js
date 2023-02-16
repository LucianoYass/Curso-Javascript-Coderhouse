//Variables con elementos del formulario

let nombreForm = document.querySelector("#nombre");
let correoForm = document.querySelector("#correo");

//Eventos
nombreForm.addEventListener("input", function(){
    if(nombreForm.value===""){
        alert("El nombre es requerido");
    }
});

correoForm.addEventListener("input", function(){
    if(correoForm.value==="") {
        alert("El correo electronico es obligatorio");
    }
});

let formulario = document.querySelector("#formulario");
let info = document.querySelector(".info");

//Agregar la informacion del formulario en el DOM

const mostrarInfo = formulario.addEventListener("submit", function(e){
    e.preventDefault();

    info.innerHTML =`
    <div class="alert alert-warning" role="alert">
    <h5> Muchas gracias ${nombreForm.value} por tu mensaje, nos contactaremos a ${correoForm.value} para finalizar el proceso de compra de tus productos.</h5></div>
    `;
});

//Catalogo productos

//Leer el contenido de las tarjetas
const cards = document.querySelectorAll(".card")
cards.forEach((card)=>{
    card.addEventListener("click", (e)=>{
        leerDatosProducto(e.target.parentElement)
    })
})

let articulosCarrito = [];

function leerDatosProducto(producto){
    const infoProducto = {
        titulo: producto.querySelector(".card-title").textContent,
        texto: producto.querySelector(".card-text").textContent,
        id: producto.querySelector(".btn").getAttribute("data-id"),
    };
    //Agregar productos al carrito

    articulosCarrito = [...articulosCarrito, infoProducto];

    carritoHTML();
}

const carrito = document.querySelector("#carrito");

function carritoHTML(){
    limpiarHTML();

    articulosCarrito.forEach((producto)=>{
        const row = document.createElement("p")
        row.innerHTML=`
        <div class="container">
        <h5>${producto.titulo}</h5>
        <p>${producto.texto}</p>

        <button class="btn btn-danger" id="${producto.id}">Eliminar</button></div>

        `;
        carrito.appendChild(row);
    });
}

function limpiarHTML() {
    carrito.innerHTML = "";
}


//Eliminar productos

carrito.addEventListener("click", eliminarProducto);

function eliminarProducto(e){
    if(e.target.classList.contains("btn-danger")){
        let productoID = e.target.getAttribute("id");
        articulosCarrito = articulosCarrito.filter(
            (producto)=>producto.id !== productoID
        );

        carritoHTML();
    }
}

//OPCIONES MULTIPLES

let optionSelected = document.querySelectorAll(".form-select");
let btnreservar = document.querySelector(".btn-reservar");

btnreservar.addEventListener("click", function () {
    let dia = document.querySelector("#day").value;
    let hora = document.querySelector("#hr").value;

    let selector = document.querySelector(".selector");

    selector.innerHTML=`
    <div class="alert alert-success" role="alert">
    <h5>Vas a asistir el dia ${dia} a las ${hora} horas.</h5>
    </div>
    `;
});