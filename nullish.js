/*Ejercicio: Valor por defecto con nullish coalescing
Crea una función llamada mostrarPrecio que reciba un objeto producto con una propiedad precio.
La función debe retornar el precio del producto.
Si producto.precio es null o undefined, debe retornar el string "Precio no disponible".
Usa el operador ?? para implementar esta lógica.*/
function mostrarPrecio(producto) {
    return producto.precio ?? "Precio no disponible";
}
console.log(mostrarPrecio({ precio: 100 }));          // 100
console.log(mostrarPrecio({ precio: 0 }));            // 0
console.log(mostrarPrecio({ precio: null }));         // Precio no disponible
console.log(mostrarPrecio({ }));                       // Precio no disponible
console.log(mostrarPrecio({ precio: undefined }));
