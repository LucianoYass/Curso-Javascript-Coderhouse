//ARRAY
//Un array es un tipo de dato que sirve para almacenar valores en forma de lista.
//Puede ser numeros, strings, booleanos, objetos, o una lista de listas.
//Los elementos del array tienen un indice, que va desde el 0 hasta el ultimo elemento.

//Declaracion

// const carrito = [`pizza`, `birra`];
// const mix = [12,3.14,['hamburguesa', 'flan', ['Maradona', 'Messi', 'Riquelme']], false];
// console.log(carrito);

// const familiaSimpson = ['Abe Simpson', 'Homer Simpson', 'Marge Simpson', 'Bart Simpson', 'Lisa', 'Maggie', 'Huesos', 'Bola de nueve'];

// // const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // console.log(familiaSimpson.length)

// // for (let i=0; i<familiaSimpson.length;i++) {
    // // console.log(familiaSimpson[i]);
// // }

// // //Se puede operar
// // let resultado = numeros[6]*numeros[3];
// // console.log(resultado);


// // //Reasignar valor
// // familiaSimpson[7]='Coltrane';


// //Saltear valores del array
// //familiaSimpson[15] = 'Selma Bouvier'
// // console.log(familiaSimpson);

// // for (let i=0; i<familiaSimpson.length;i++) {
    // // console.log(familiaSimpson[i]);
// //    }


// //Agregar mas elementos al final del array.
// // familiaSimpson.push('Ned Flanders', 'Apu');
// // console.log(familiaSimpson);

// // //Agregar mas elementos al principio del array.
// // familiaSimpson.unshift('Paty', 'Barney');
// // console.log(familiaSimpson);

// // // let nuevoPersonaje = prompt('Ingresa un personaje')

// // // familiaSimpson.push(nuevoPersonaje);
// // // console.log(nuevoPersonaje);

// // //Eliminar ultimo parametro.
// // let eliminado = familiaSimpson.pop();
// // console.log(familiaSimpson);
// // // console.log(eliminado);


// // //Eliminar primer parametro.
// // familiaSimpson.shift();
// // console.log(familiaSimpson);


// // //Eliminar 1 o mas parametros.
// // //El primer parametro define desde que posicion y el segundo define cuantos.
// // familiaSimpson.splice(3, 4);
// // console.log(familiaSimpson);

// //TO STRING
// //Modifica el array a un string largo.
// // const aCadena = familiaSimpson.toString();
// // console.log(aCadena);

// //JOIN
// //Modifica el array a un string separado en enters
// const imprimible = familiaSimpson.join(' & ');
// console.log(imprimible);
// console.log(familiaSimpson.join('\n'));


//CONCAT
//Unifica dos arrays
// const perros = ['firu', 'terbal', 'bolt', 'srBigotes', 'lazzie'];
// const gatos = ['michis', 'fuz', 'garfield'];

// const mascotas = perros.concat(gatos);
// console.log(mascotas);

// //SLICE
// //Copia los parametros del array.
// //El primer parametro define desde que posicion y el segundo hasta cual posicion.
// const otrosPerros = perros.slice(2, 5);
// console.log(otrosPerros);

// const copiaFamilia = familiaSimpson.slice(0);
// console.log(copiaFamilia);

// //Index of
// //Para averiguar la posicion de un elemento.
// console.log(familiaSimpson.indexOf('Huesos'));


// //Includes
// //Te indica si se encuentra el elemento en el array indicando true o false.
// console.log(familiaSimpson.includes('Lisa'));


// //Reverse
// //Te da vuelta las posiciones de los elementos del array.
// copiaFamilia.reverse();
// console.log(copiaFamilia);


//Objetos dentro de arrays
// const librosHarryPotter = [ {id:100, titulo: "HP y la piedra filosofal", fecha:1997}, {id: 200, titulo: 'HP y la camara de los secretos'} ];

// librosHarryPotter.push( {id:500, titulo: 'anaaashe'});


// //BUCLE FOR...OF
// //Indica desde donde hasta donde
// for (const libro of librosHarryPotter) {
    // console.log(libro['id']);
// }