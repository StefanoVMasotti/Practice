// Ejercicio 1: Cambiar el texto de un elemento
const titulo = document.getElementById("titulo");
titulo.textContent = "Título modificado con JS";

// Ejercicio 2: Escuchar evento de click
const boton = document.getElementById("boton");
boton.addEventListener("click", () => {
  console.log("¡Hiciste clic en el botón!");
});

// Ejercicio 3: Escuchar escritura en input
const input = document.getElementById("input");
input.addEventListener("input", (e) => {
    console.log("Texto actual:", e.target.value);
});

// Ejercicio 4: Tocar el boton cambia de color el titulo>
const btnColor = document.getElementById("btn-color");

btnColor.addEventListener("click", () => {
    titulo.style.color = "blue"; // Cambia el color del texto
});

// Ejercicio 5: Crear y agregar elementos al DOM
const lista = document.getElementById("lista");
const btnAgregar = document.getElementById("btn-agregar");

btnAgregar.addEventListener("click", () => {
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = "Nuevo elemento";
    lista.appendChild(nuevoItem); // Lo agrega al final de la lista
});

// Ejercicio 5: Eliminar elementos al DOM
const btnBorrar = document.getElementById("btn-borrar");

btnBorrar.addEventListener("click", () => {
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild); // Elimina el último hijo
    }
    });
