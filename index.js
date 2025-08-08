/*Ejercicio 1 — Let & Const
Crea dos variables:
Una constante llamada frutas que sea un arreglo con "manzana", "pera" y "uva".
Una variable con let llamada contador que empiece en 0.
🔹 Luego:
Agregá "banana" al arreglo usando .push().
Sumale 1 al contador.
Mostrá ambos valores con console.log(). */
const frutas = ["manzana", "pera", "uva"];
let contador = 0;
frutas.push("banana");
contador++;
console.log(frutas, contador);
let mensaje = "Hola desde el scope global";
//-----------------------------------------------
/*function saludar() {
    let mensaje = "Hola desde el scope local";
    console.log(mensaje); // ¿Qué creés que va a mostrar?
}

saludar();
console.log(mensaje);*/
//------------------------------------------
/*Ejercicio 1 – Scope y let/const
Crea una función llamada saludar que reciba un nombre y:
Declare una variable mensaje dentro de la función usando let.
Imprima un mensaje con template literals: "Hola, [nombre] desde el scope de función".
Intenta imprimir mensaje fuera de la función para ver qué pasa. */

function saludar(nombre) {
    let mensaje = `Hola, ${nombre} desde el scope de función`;
    console.log(mensaje);
}
saludar("Stefano");

