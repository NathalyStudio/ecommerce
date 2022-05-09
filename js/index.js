const API_URL = async() => { //await me sirve para esperar a que mi url termine de cargar
    //await funcina solamente con funciones asincronicas por eso uso async.
    try {
        const respuesta = await fetch("https://ig-food-menus.herokuapp.com/burgers"); // Fetch nos permite acceder y manipular contenido http
        console.log(respuesta); // La respuesta a mi petición van a ser todas las hamburguesas

        if (respuesta.status === 200) { // El codigo 200 me dice que esta todo Ok y procedo a acceder al contenido
            const datos = await respuesta.json(); // Los datos que obtengo son .json

            let burgers = ""; // Todos los datos que obtenga los voy a guardar en mi variable BURGERS
            datos.forEach(burger => { // Por cada burguer voY acceder al titulo, la foto, el pais y el precio.
                burgers += `
                <div class="burger-container">
                     <h2>${burger.name}</h2>
                     <div class = "burger">
                       <img class = "foto" src="${burger.img}">
                     </div>
                     <p> Procedencia: ${burger.country}</p>
                     <h3>Precio $ ${burger.price}</h3>
                     <button>Agregar al carrito</button>

                </div>
                     `
            });


            document.getElementById('burgers1').innerHTML = burgers; // Todo lo que obtuve lo inyecto en mi html de forma dinÁmica.

        } else if (respuesta === 404) { // Si la pagina no entró por el cofigo 200, puede largar error 404
            console.log("La página de destino no existe")
        } else {
            console.log("Error!!") // si tenemos un error desconocido puede salir esto.
        }

    } catch (error) { // can catch capturamos el error desde consola e intentamos solucionarlo.
        console.log(error)
    }
}


API_URL(); // Es la respuesta a la llamada de API



const API_URL2 = async() => { //espero que la URL termine de cargar 

    try {
        const respuesta = await fetch("https://ig-food-menus.herokuapp.com/sandwiches"); 
        console.log(respuesta); 

        if (respuesta.status === 200) {
            const datos = await respuesta.json();

            let sandwiches = "";
            datos.forEach(sandwich => {
                sandwiches += `
                <div class="sandwiches-container">
                     <h2>${sandwich.name}</h2>
                     <div class = "dessert">
                       <img class = "foto" src="${sandwich.img}">
                     </div>
                     <p> Procedencia: ${sandwich.country}</p>
                     <h3>Precio $ ${sandwich.price}</h3>
                     <button>Agregar al carrito</button>
                </div>
                     `
            });


            document.getElementById('sandwiches').innerHTML = sandwiches;

        } else if (respuesta === 404) {
            console.log("La página de destino no existe")
        } else {
            console.log("Error!!")
        }

    } catch (error) {
        console.log(error)
    }
}

API_URL2();



const API_URL3 = async() => { //espero que la URL termine de cargar 

    try {
        const respuesta = await fetch("https://ig-food-menus.herokuapp.com/desserts"); //aquí accedo a la api, al menú de postres
        console.log(respuesta); //imprimo el resultado en consola para ver qué array me traigo
        //si es correcto, entra por el código 200 y comienzo el proceso
        if (respuesta.status === 200) {
            const datos = await respuesta.json();

            let desserts = "";
            datos.forEach(dessert => {
                desserts += `
                <div class="desserts-container">
                     <h2>${dessert.name}</h2>
                     <div class = "dessert">
                       <img class = "foto" src="${dessert.img}">
                     </div>
                     <p> Procedencia: ${dessert.country}</p>
                     <h3>Precio $ ${dessert.price}</h3>
                     <button>Agregar al carrito</button>
                </div>
                     `
            });


            document.getElementById('desserts').innerHTML = desserts;

        } else if (respuesta === 404) {
            console.log("La página de destino no existe")
        } else {
            console.log("Error!!")
        }

    } catch (error) {
        console.log(error)
    }
}

API_URL3();


//Para llamar a las bebidas
const API_URL4 = async() => { //await me sirve para esperar a que mi url termine de cargar
    //await funcina solamente con funciones asincronicas por eso uso async.
    try {
        const respuesta = await fetch("https://ig-food-menus.herokuapp.com/drinks"); // Fetch nos permite acceder y manipular contenido http
        console.log(respuesta); // La respuesta a mi petición van a ser todas las bebidas

        if (respuesta.status === 200) { // El codigo 200 me dice que esta todo Ok y procedo a acceder al contenido
            const datos = await respuesta.json(); // Los datos que obtengo son .json

            let bebidas = ""; // Todos los datos que obtenga los voy a guardar en mi variable bebidas
            datos.forEach(drinks => { // Por cada burguer voY acceder al titulo, la foto, el pais y el precio.
                bebidas += `
                <div class="drinks-container">
                     <h2>${drinks.name}</h2>
                     <div class = "drink">
                       <img class = "foto" src="${drinks.img}">
                     </div>
                     <p> Procedencia: ${drinks.country}</p>
                     <h3>Precio $ ${drinks.price}</h3>
                     <button>Agregar al carrito</button>

                </div>
                     `
            });


            document.getElementById('drinks').innerHTML = bebidas; // Todo lo que obtuve lo inyecto en mi html de forma dinÁmica.

        } else if (respuesta === 404) { // Si la pagina no entró por el cofigo 200, puede largar error 404
            console.log("La página de destino no existe")
        } else {
            console.log("Error!!") // si tenemos un error desconocido puede salir esto.
        }

    } catch (error) { // can catch capturamos el error desde consola e intentamos solucionarlo.
        console.log(error)
    }
}


API_URL4(); // Es la respuesta a la llamada de API