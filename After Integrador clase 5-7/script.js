class Libro {

    constructor(titulo, autor, anio, genero, valoracion, id) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = parseInt(anio);
        this.genero = genero;
        this.valoracion = parseInt(valoracion);
        this.id = id;
    }

    asignarId(array){
    this.id = array.length;
    }

    asignarValoracion(valoracion){
    this.valoracion = valoracion;
    }

}

const libros = [
    new Libro('American Gods', 'Neil Gaiman', 2001, 'Fantasia', 6, 1),
    new Libro('Némesis', 'Agatha Christie', 1971, 'Misterio', 8, 2),
    new Libro('Los elefantes pueden recordar', 'Agatha Christie', 1972, 'Misterio', 7, 3),
    new Libro('David Copperfield', 'Charles Dickens', 1950, 'Novela', 8, 4),
    new Libro('Narciso y Golmundo', 'Hermann Hesse', 1930, 'Novela', 9, 5),
    new Libro('Los Borgia', 'Mario Puzo', 2001, 'Novela historica', 9, 6),
    new Libro('El Hobbit', 'J.R.R. Tolkien', 1937, 'Novela fantástica', 10, 7),
]

//----------------------Pedir que se ingrese libros nuevos y sumarlos al array----------------------//

let continuar = true;

while(continuar) {

    let ingreso = prompt('Ingresa los datos del libro: titulo, autor, año, género, puntaje de 1 a 10, separados por una barra diagonal (/). Ingresa X para finalizar');

    if(ingreso.toUpperCase()=='X'){
        continuar = false;
        break;
    }


    let datos = ingreso.split('/');

    const libro = new Libro(datos[0], datos[1], datos[2], datos[3], datos[4]);
    libros.push(libro);
    libro.asignarId(libros);

}

//----------------------Fin de pedir que se ingresen libros nuevos y sumarlos al array----------------------//

//----------------------Ordenar el array de acuerdo a lo que se elija----------------------//

let criterio = prompt ('Elegi el criterio deseado:\n1- Titulo (A a Z) \n2- Titulo (Z a A) \n3- Mejor a peor puntuado \n4- Fecha de publicacion (Mas viejo a mas nuevo)');

function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0);

    switch(criterio) {
            case '1':
                let nombreAscendente = arrayOrdenado.sort((a,b)=>a.titulo.localeCompare(b.titulo));
                return nombreAscendente;
            case '2':
                let nombreDescendente = arrayOrdenado.sort((a,b)=>b.titulo.localeCompare(a.titulo));
                return nombreDescendente;
            case '3':
                return arrayOrdenado.sort((a,b)=>b.valoracion-a.valoracion);
            case '4':
                return arrayOrdenado.sort((a,b)=> a.anio - b.anio);
            default:
                alert('No es un criterio valido');
                break;
    }

}

//----------------------Fin de ordenar el array de acuerdo a lo que se elija----------------------//

function crearStringResultado(array) {
    let info = ''
    array.forEach(elemento => {
        info+='Titulo: '+elemento.titulo+'\nAutor: '+elemento.autor+'\nAño de publicacion: '+elemento.anio+'\nValoracion: '+elemento.valoracion+' puntos.\n\n'
    });

    return info;
}

//----------------------Fin de crear el string con los resultados----------------------//

alert(crearStringResultado(ordenar(criterio,libros)))



