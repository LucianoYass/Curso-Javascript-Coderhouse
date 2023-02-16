//AJAX
//Javascript asincrono y XML, un  conjunto de tecnicas de desarrollo que permiten que las aplicaciones web funcionen de forma asincronica para procesar tareas en segundo plano.

//PETICIONES HTTP
//Una urlo direccion -> Un metodo (GET,POST,PUT,DELETE) -> Headers -> Body -> Parametros (Query Params o URL Params)
//Metodos: GET: Para obtener  informacion del  servidor. POST: Para enviar informacion al servidor para crear algun recurso. PUT: Para crear o modificar algun recurso en el servidor. DELETE: Para eliminar algun recurso en el servidor.
//POST y PUT van acompañados de un body, donde se definen los datos o informacion a enviar al servidor. GET o DELETE, por su parte,  no tienen body ya que no necesitan enviar datos adjuntos.
//HEADERS: permiten al cliente y servidor enviar informacion sobre la peticion y la respuesta. Los headers incluyen informacion sobre la peticion para establecer  una transferencia segura y clara, y de ser necesario se pueden modificar para agregar datos adicionales. NO DEBEMOS CONFUNDIR INFORMACION SOBRE LA PETICION (HEADERS) CON LOS DATOS QUE LA PETICION PUEDE TRANSFERIR (BODY).
//PARAMETROS: 
//Query Params: Esta sintaxis permite adjuntar en la URL una serie de parametros en la forma de pares clave-valor. Por ejemplo, si queremos buscar algo por google, debemos enviarle un valor de busqueda por el parametro "q", a traves de la url, EJ: https://www.google.com.ar/search?q=coderhouse. Se utiliza el simbolo "?" para indicar el final de la parte de la direccion de la url y el comienzo del query. A partir de allim se escriben parametros con la forma clave=valor, PUDIENDO DEFINIR VARIOS SEPARANDOLOS CON EL SIGNO "&".
//Url Params: Esta sintaxis permite enviar parametros directamente en la forma de segmentos de la URL, es decir separados por "/".

//API: es una aplicacion web construida en base a la arquitectura API REST, a la cual podemos solicitar y enviar informacion desde el cliente. Generalmente, nos comunicamos con aplicaciones de este tipo y es la tendencia actual de desarrollo.

//FETCH
//Metodo asincronico y trabaja con promesas.

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((resp) => resp.json())
// .then((data) => console.log(data[1].title));

// const lista = document.querySelector("#listado");

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((resp) => resp.json())
// .then((data) => {
    // data.forEach((post) => {
        // const li = document.createElement("li")
        // li.innerHTML = `
        // <h4>${post.title}</h4>
        // <h5>${post.body}</h5>
        // `
        // lista.append(li)
    // });
// });

//HACER "BASE DE DATOS" A PROYECTO
// const lista = document.querySelector("#listado");

// fetch("./data.json")
// .then((res)=>res.json())
// .then((data)=>{
    // data.forEach((producto)=>{
        // const li = document.createElement("li")
        // li.innerHTML = `
        // <h4>${producto.nombre}</h4>
        // <h5>${producto.precio}</h5>
        // `;
        // lista.append(li);
    // })
// })

// const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
//Await

const lista = document.querySelector("#listado");

const pedirPosts = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await resp.json();

    data.forEach((post)=>{
        const li = document.createElement("li");
        li.innerHTML = `
        <h4>${post.title}</h4>
        <h5>${post.body}</h5>
        `;
        lista.append(li);
    });
};

pedirPosts();