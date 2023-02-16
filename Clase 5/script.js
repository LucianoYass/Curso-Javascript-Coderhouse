// Que es un objeto
// Un objeto es una coleccion de datos relacionados con una entidad.
// Son estructuras que podemos definir para agrupar valores bajo un mismo criterio.
// Se componen de un listado de pares clave-valor, contienen propiedades y valores agrupados.

// Ejemplo
// OBJETOS LITERALES

    // const lapicera = {
        // marca: "Toyo",
        // color: "negro",
        // trazos: "fino",
    // }

    // console.log(lapicera);

    // console.log("El color de lapicera es: "+lapicera.color);
    // console.log("La marca de lapicera es: "+lapicera["marca"]);


    // //Modificar una propiedad
    // lapicera.trazos="grueso";

    // console.log(lapicera);

    // ////////////////////////////////
    // const producto = {
        // nombre: "Mouse wireless",
        // marca: "Logitech",
        // cantidad: 54,
        // disponibilidad: true,
    // }

    // //Funcion constructora - molde para crear objetos de un mismo tipo

    // function Automovil (marca, modelo, color) {
        // this.marca = marca;
        // this.modelo = modelo;
        // this.color = color;
    // }

    // const auto1 = new Automovil("WV", "Amarok", "Celeste");
    // console.log(auto1);

    // //Pasando un objeto literal como parametro a constructor

    // function Mascota (objetoMascota) {
        // this.nombre = objetoMascota.nombre;
        // this.raza = objetoMascota.raza;
    // }

    // const miPerro = new Mascota ({
        // nombre: "felipe",
        // raza: "pitbull",
        // edad: 10,
    // })

    // console.log(miPerro);

    // const otroPerro = new Mascota({raza:"golden"});
    // console.log(otroPerro)

    //Metodos de Strings
    //Cada vez que creamos una cadena de caracteres se crea automaticamente como una instancia del objeto String.

    // let frase = "Persevera y triunfaras ! ";
    // // metodos
    // console.log(frase.toUpperCase());
    // console.log(frase.toLowerCase());
    // //propiedad length
    // console.log("La longitud de la frase es "+frase.length+" caracteres");

    // let mejorJugador = prompt("Ingrese el nombre del mejor jugador del mundo");

    // if (mejorJugador.toLowerCase() == "messi") {
        // console.log("Acertaste pa!");
    // }

    //Metodos personalizados
    //Metodos para objetos personalizados referenciando funciones por su nombre o definiendo funciones anonimas asociadas a una propiedad de la funcion constructora.

    //Funcion constructora con metodos propios
    // function Rectangulo(base, altura) {
        // this.base = base;
        // this.altura = altura;
        // //metodo
        // this.calcularArea = function() {console.log("El area del rectangulo es "+this.base*this.altura)}
    // }

    // let rectangulo1 = new Rectangulo(4, 2);
    // rectangulo1.calcularArea();

    // // let rectangulo2 = new Rectangulo(17, 7);
    // // rectangulo2.calcularArea();

    // //Operador IN y FOR..IN
    // //El operador IN devuelve TRUE si la propiedad especificada existe en el objeto.
    // //El bucle FOR...IN permite acceder a todas las propiedades del objeto.

    // for (const prop in rectangulo1) {
        // console.log(prop);
        // console.log(rectangulo1[prop]);
    // }

    //CLASES
    //Son una equivalencia al empleo de funcion constructora y permite definir distintos tipos de metodos.

    // class Persona {
        // constructor(nombre, edad, calle) {
            // this.nombre = nombre;
            // this.edad = edad;
            // this.calle = calle;
        // }
        // hablar(){
            // console.log("HOLA SOY "+ this.nombre+" CHINO, SOY COMO HOMERO, PERO CHINO");
        // }
    // }
    // const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
    // console.log(persona1);
    // persona1.hablar();

    

    //CLASES Y METODOS
    //La funcion constructora es reemplazada por el metodo constructor. Los metodos
    //en las clases no referencian a propiedades, se declaran dentro del bloque sin la palabra function.


    //OBJETOS RESUMEN
    //Los objetos tienen propiedades y metodos.
    //El metodo constructor de un objeto sirve para crear el mismo y asignarle sus propiedades. Permite crear varios objetos usando el mismo constructor.
    //Las funciones de JS son generalmente de acceso global y los metodos son unicamente utilizados para ser invocados por los objetos que lo contienen.
    //Las clases son otra forma de crear objetos personalizadas en JS.