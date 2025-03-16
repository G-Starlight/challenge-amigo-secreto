let amigos = []; //Creamos el arreglo de amigos

function agregarAmigo() { //metodo para agrgar amigos
    const inputAmigo = document.getElementById("amigo"); //variable constante que permite seleccionar el elemento del DOM
    const nombreAmigo = inputAmigo.value.trim(); // La funcion TRIM permite eliminar espacios al inicio al fin.

    if (nombreAmigo === "") { //Creamos un if para indicar que si nombreAmigo es identico a "" nos envie una alerta
        alert("Por favor ingrese un nombre válido");
        return;  // Detiene la ejecución si el text input esta vacio
    }

    amigos.push(nombreAmigo);  // Agregar a let amigos los nombrs de amigo
    console.log("Lista actualizada de amigos:", amigos); //imprime la lista de amigos por si tengo errores.

    mostrarAmigos();  // Usa el metodo de mostrarAmigos para actualizar el listado
    inputAmigo.value = "";  // Limpiar el input despues de usarse.
}

// Mostrar amigos en la lista
function mostrarAmigos() { 
    const lista = document.getElementById("listaAmigos"); //creamos una variable constante de lista de amigos.
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo, index) => { //iteracion sobre el arreglo amigos
        const li = document.createElement("li"); //creamos un elemento web de li
        li.textContent = amigo; //el contenido toma el valor del arreglo.

        // Botón para eliminar un amigo de la lista
        const botonEliminar = document.createElement("button"); //boton para eliminar los amigos.
        botonEliminar.textContent = "❌"; //el contenido de texto del boton
        botonEliminar.classList.add("button-remove"); //quita el boton cuando ya lo usamos.
        botonEliminar.onclick = () => eliminarAmigo(index); //cuando hacemos click trabaja sobre el metodo eliminar amigo.

        li.appendChild(botonEliminar);//agregamos un boton de eliminar
        lista.appendChild(li);
    });
}

// Eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Elimina el amigo
    mostrarAmigos(); // Actualiza la lista en pantalla
}

// Función para elegir SOLO UN amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe haber al menos 1 amigo en la lista.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un número aleatorio dentro del rango
    let amigoSecreto = amigos[indiceAleatorio]; // Obtiene el amigo aleatorio

    mostrarResultado(amigoSecreto);
}

// Mostrar resultado del sorteo (solo un amigo)
function mostrarResultado(amigoSecreto) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpiar la lista

    const li = document.createElement("li");
    li.textContent = `🎁 Tu amigo secreto es: ${amigoSecreto}! 🎉`;
    listaResultado.appendChild(li);
}

// Depuración con `console.log`
console.log("Lista inicial de amigos:", amigos);




