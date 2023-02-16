//CICLOS POR CONTEO
//Repiten un bloque de codigo un numero de veces especifica. Estructura for
//CICLOS CONDICIONALES
//Repiten un bloque de codigo mientras la condicion evaluada es verdadera. Estructuras while y do...while

//FOR
//for(desde; hasta; actualizacion) {
    //lo que se ejecute aca se ejecutara mientras dure el ciclo
//};

//Ejemplo
//para contar de 0 a 9
//for (let i = 0; i < 10; i++) {
    //alert(i);
//};
//para contar de 1 a 10
//for (let i = 1; i <= 10; i++) {
    //alert(i);
//};

//let ingresarNumero = parseInt(prompt("Ingresar Numero"));
//for (let i = ingresarNumero; i <= 10; i++) {
    //let resultado = ingresarNumero * i;
    //console.log(ingresarNumero +" X "+ i +" = "+ resultado);
//}

//for (let i = 1; i <= 3; i++) {
    //let ingresarNombre = prompt("Ingresar nombre");
    //alert(" Turno Nº "+i+" Nombre: "+ingresarNombre);
//}

//BREAK CON LOGIN

//for(let i = 1; i <= 3; i++) {
    //let usuario = prompt("Ingresa tu nombre de usuario");
    //let password = prompt("Ingresa tu contraseña");
    //if((usuario == "Pepe")&&(password == "1234")) {
        //alert("Bienvenido al sistema, Pepe");
        //break;
    //} else {
        //alert("Usuario y/o contraseña incorrecta");
    //}    
//}

//CONTINUE

//for(let i=1; i<=10; i++) {
    // % calculo le resto de la division entera (si es impar da resto 1, par da resto 0)
    //if(i%2==0) {
        //lo salteo porque es impar
        //continue;
    //} else {
        //console.log("El numero impar es: " + i);
    //}
//}

//WHILE
//Permite crear bucles que se ejecutan cero o mas veces, dependiendo de la condicion indicada.

//let repetir = false;

//while(repetir) {
    //console.log("Al infinito y mas alla");
//}

//let entrada = prompt("Ingresar un dato");
//while(entrada != "ESC") {
    //alert("El usuario ingreso "+ entrada);
    //entrada = prompt("Ingresar otro dato");
//}

//Ciclos por condincion - WHILE
//Calculador de promedio de notas
//let contador = 0;
//let sumadorNotas = 0;
//let promedio;

//let nota = parseInt(prompt("Ingrese la nota: (-1 para salir)"));

//while(nota != -1) {
//    contador = contador + 1;
//    sumadorNotas = sumadorNotas + nota;
//    nota=parseInt(prompt("Ingrese la nota: (-1 para salir)"));
//}

//console.log("Se ingresaron "+contador+" notas");
//console.log("La suma de todas las notas es: "+sumadorNotas);
//promedio = sumadorNotas / contador;
//console.log("El promedio de las notas de los "+contador+" alumnos es "+promedio);

//DO... WHILE
//Permite crear bucles que se ejecutan una o mas veces, dependiendo de la condicion indicada.
//A diferencia de while, garantiza que el bloque de codigo se interpreta al menos una vez, porque la condicion se evalua al final.

//let repetir = false;
//do{
//    console.log("Solo una vez");
//}while(repetir)

//Ciclo por condicion - do...while
//let equipo;
//do{
//    equipo = prompt("Ingresa tu equipo de futbol favorito:(s para salir)");
//    if(equipo !="s") {
//        console.log("El equipo ingresado es "+equipo);
//    }
//}while(equipo!="s")

//SWITCH
//Esta especialmente diseñada para manejar de forma sencilla multiples condiciones sobre la misma variable.

//let producto=prompt("Ingresa el producto y te dire el precio por kg.");
//switch(producto) {
//    case "manzana":
//        console.log("El precio de la manazana por kg es $300");
//        break;
//    case "banana":
//        console.log("El precio de la banana por kg es $289.99");
//        break;
//    case "durazno":
//        console.log("El precio del durazno por kg es $499");
//        break;
//    case "naranja":
//        console.log("El precio de la naranja por kg es $199");
//        break;
//    case "frutilla":
//    case "pera":
//        console.log("El precio de la frutilla o la pera por kg es $799.90");
//        break;
//    default: console.log("Fruta sin stock por el momento");
//        break;
//}

