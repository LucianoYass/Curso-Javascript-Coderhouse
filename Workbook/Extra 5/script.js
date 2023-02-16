//1- Declarar un clase Tienda que permita registrar:
    // Nombre de la tienda.
    // Dirección de la tienda.
    // Propietario de la tienda.
    // Rubro de la tienda.
// Luego invocar al menos tres (3) objetos usando esta clase.

// class Tienda {
    // constructor (nombre, direccion, propietario, rubro) {
        // this.nombre = nombre;
        // this.direccion = direccion;
        // this.propietario = propietario;
        // this.rubro = rubro;
    // }
// }

// const tienda1 = new Tienda ("COTO", "Jovellanos 151", "Alfredo Coto", "Vende cosas");
// const tienda2 = new Tienda ("Walmart", "Sarandi", "Julio Walmart", "Vende cosas");
// const tienda3 = new Tienda ("Yuya", "Las Flores 1600", "Walter el de Yuya", "Alto garca");

// console.log(tienda1);
// console.log(tienda2);
// console.log(tienda3);

//2- Solicitar al usuario el registro de cinco (5) tiendas.
// Emplear la clase Tienda de la actividad 1, para instanciar los objetos en función de las entradas capturadas. Generar una única salida compuesta por la información de los objetos instanciados.

// class Tienda {
    // constructor (nombre, direccion, propietario, rubro) {
        // this.nombre = nombre;
        // this.direccion = direccion;
        // this.propietario = propietario;
        // this.rubro = rubro;
    // }
// }

// let tiendasIngresadas = '';
// for (let i = 0; i < 5; i++) {
    // let tienda = new Tienda (prompt("NOMBRE"),
                            // prompt("DIRECCION"),
                            // prompt("PROPIETARIO"),
                            // prompt("RUBRO"));
                            
    // tiendasIngresadas+= "Tienda: "+tienda.nombre+ " " + "Direccion: "+tienda.direccion+ " " + "Propietario: " +tienda.propietario+ " " + "Rubro: "+tienda.rubro+"\n";
// }

// alert(tiendasIngresadas);


//3- Declarar un método para la clase Tienda con la siguiente cabecera estaAbierto(hora). Este retorna true si la hora enviada está entre las 08 y 12, o entre las 15 y 19. Caso contrario, se retorna false.
// Luego invocar al menos un (1) objeto usando esta clase, y solicitar al usuario tres (3) horas. Informar por alerta si la tienda está abierta, en función de la hora ingresada.

// class Tienda {
    // constructor (nombre, direccion, propietario, rubro) {
        // this.nombre = nombre;
        // this.direccion = direccion;
        // this.propietario = propietario;
        // this.rubro = rubro;
    // }

    // estaAbierto(hora) {
        // if (((hora >= 8) && (hora <= 12)) || ((hora >= 15) && (hora <= 19))) {
            // return true;
        // } else {
            // return false;
        // }
    // }
// }

// const tiendita = new Tienda ("COTO", "Jovellanos 151", "Alfredo Coto", "Viejo Garca");

// for (let i = 0; i < 3; i++) {
    // let ingresoHora = parseInt(prompt("Ingrese tres horas"));

    // if (tiendita.estaAbierto(ingresoHora)) {
        // alert ("La tienda esta abierta a las "+ingresoHora);
    // } else {
        // alert ("La tienda no esta abierta a las "+ingresoHora);
    // }
// }

//4- Declarar un método para la clase Tienda con la siguiente cabecera esPropietario(nombre). Se retorna true si el nombre enviado corresponde al propietario de la tienda.Caso contrario, se retorna false.
// Luego, invocar al menos tres(3) objetos usando esta clase y solicitar al usuario cinco(5) nombres. Informar por alerta si los nombres pertenecen a algún dueño de tienda.

// class Tienda {
    // constructor (nombre, direccion, propietario, rubro) {
        // this.nombre = nombre;
        // this.direccion = direccion;
        // this.propietario = propietario;
        // this.rubro = rubro;
    // }

    // esPropietario(nombre) {
        // if (nombre == this.propietario) {
            // return true;
        // } else {
            // return false;
        // }
    // }
// }

// const tienda1 = new Tienda ("COTO", "Jovellanos 151", "Alfredo", "Viejo Garca");
// const tienda2 = new Tienda ("ChangoMas", "Jovellanos 151", "Ernesto", "Viejo Garca");
// const tienda3 = new Tienda ("Yuya", "Jovellanos 151", "Walter", "Viejo Garca");

// for (let i = 0; i < 5; i++) {
    // let nombresIngresados = prompt("Ingrese 5 nombres");
    
    // if (tienda1.esPropietario(nombresIngresados)) {
        // alert ("El nombre "+nombresIngresados+" pertenece al dueño de "+tienda1.nombre);
    // }
    // if (tienda2.esPropietario(nombresIngresados)) {
        // alert ("El nombre "+nombresIngresados+" pertenece al dueño de "+tienda2.nombre)
    // }
    // if (tienda3.esPropietario(nombresIngresados)) {
        // alert ("El nombre "+nombresIngresados+" pertenece al dueño de "+tienda3.nombre)
    // }
// }

//5- Declarar una clase Cliente que permita registrar:
// Registrar nombre, presupuesto, si tiene tarjeta de descuento, y número de teléfono del cliente.
// Un método transferirDinero(valor), que permita  obtener y restar cierta cantidad del presupuesto, siempre que este parámetro sea menor al valor enviado, y mayor que cero.
// // Luego invocar al menos tres (3) objetos usando esta clase, y solicitar al usuario cinco (5) números. Informar por alerta si cada uno de los clientes cuenta con el presupuesto suficiente para realizar una transferencia de igual monto al ingresado.

// class Cliente {
    // constructor (nombre, presupuesto, tarjeta, numero) {
        // this.nombre = nombre;
        // this.presupuesto = parseFloat(presupuesto);
        // this.tarjeta = tarjeta;
        // this.numero = numero;
    // }

    // transferirDinero(valor) {
        // if (valor <= this.presupuesto && this.presupuesto > 0) {
            // this.presupuesto -= valor;
            // return valor;
        // } else {
            // return 0;
        // }
    // }
// }

// const cliente1 = new Cliente ("AAA", "5000", "Tarjeta si", "1");
// const cliente2 = new Cliente ("BBB", "1000", "Tarjeta no", "2");
// const cliente3 = new Cliente ("CCC", "10000", "Tarjeta si", "3");

// for (let i = 0; i < 5; i++) {
    // let precio = parseFloat(prompt("Ingrese 5 numeros"));

    // if (cliente1.transferirDinero(precio)) {
        // alert ("El cliente "+cliente1.nombre+" te puede pagar "+precio);
    // }
    // if (cliente2.transferirDinero(precio)) {
        // alert ("El cliente "+cliente2.nombre+" te puede pagar "+precio);
    // }
    // if (cliente3.transferirDinero(precio)) {
        // alert("El cliente "+cliente3.nombre+" te puede pagar "+precio);
    // }
// }