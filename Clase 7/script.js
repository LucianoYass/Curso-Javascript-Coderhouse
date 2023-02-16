//Metodos de los arrays, que son funciones de orden superior (reciben otra funcion como parametro)
//Metodo forEach, indica que para cada elemento se realice una misma accion.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const triplicados=[]

// numeros.forEach(numero => {
    // numero = numero*3;
    // triplicados.push(numero)
// });

// console.log(triplicados);

const cursos = [{
    nombre: 'Javascript',
    precio: 15000
},
{
    nombre: 'ReactJS',
    precio: 22000
},
{
    nombre: 'AngularJS',
    precio: 20500
},
{
    nombre: 'Desarrollo Web',
    precio: 16000
}]

// //find(). Retorna el primer elemento que cumple con la condicion. Si no hay ninguno, retorna undefined.

// const encontrado = cursos.find(curso=>curso.precio>20000);

// console.log(encontrado);

// const noEncontrado = cursos.find((curso) => curso.nombre.includes ('anashe'));
// console.log(noEncontrado);

//some(). Retorna true si algun elemento cumple la condicion, o false si ninguno lo hace.

// const alguno = juegos.some(juego=>juego.nombre=="Monkey Island")
// console.log(alguno);

//filter(). Retorna un array con todos los elementos que cumplen la condicion. Si no hay ninguno, devuelve un array vacio.

// const filtrado = cursos.filter(curso=>curso.precio<20000)
// console.log(filtrado);

// let keyword = prompt('Ingrese el termino de busqueda')
// const otroFiltrado = cursos.filter(curso=>curso.nombre.includes(keyword))
// console.log(otroFiltrado);

//map(). Retorna un array con la misma cantidad de elementos que el array original, pero con la operacion aplicada.

// const cursosConDescuento = cursos.map(curso=>{
    // return {
        // nombre: curso.nombre,
        // precio: curso.precio* .30
    // }
// })

// console.log(cursosConDescuento);

//reduce(), acumula elementos para obtener uno solo que suma todo.
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const totalArray = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

// console.log(totalArray);
// const totalCuenta = cursos.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);

//sort(). Ordena el array original segun la funcion elegida (menor a mayor, mayor a menor). METODO DESTRUCTIVO

// const desordenados = [1, 5, 23, 45, 2, 78, 4]
// const ordenados = desordenados.slice(0)

// ordenados.sort((a,b)=>b-a)
// console.log(ordenados);

// console.log(Math.max(22,64,57,84,120,-30))
// console.log(Math.min(22,64,57,84,120,-30))

// let azar = Math.random();
// console.log(azar);

// console.log(Math.ceil(azar));
// console.log(Math.floor(azar));
// console.log(Math.round(azar));
// console.log(Math.trunc(azar));

// console.log(azar.toFixed(2));