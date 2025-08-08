/*Ejercicio: Carrito de Compras
Crea un objeto llamado carrito que:
Tenga una propiedad dinámica (usando computed property names) cuyo nombre es el valor de la variable productoNombre.
Esa propiedad debe ser otro objeto con precio y cantidad.
Tenga un método total() que retorne un string con el total a pagar usando template literals:
"El total por [cantidad] [productoNombre](s) es $[precio * cantidad]".*/
const productoNombre = "manzana"
const carrito = {
    [productoNombre]: {
        precio: 50,
        cantidad: 5,
    },
    total(){
        const item = this[productoNombre];
        console.log(`El total por ${item.cantidad} ${productoNombre}${item.cantidad > 1? "s" : ""} es ${item.precio * item.cantidad}`)
    }
}

//carrito.total()
//--------------------------------------------------
/*Ejercicio: Biblioteca
Tienes una variable libroNombre que contiene el título de un libro.
Crea un objeto llamado biblioteca que:
Use libroNombre como propiedad dinámica.
Esa propiedad es un objeto con autor y paginas.
Tiene un método llamado info() que retorne un string con la información del libro usando template literals, por ejemplo:
"El libro '[Título]' es de [Autor] y tiene [Número de páginas] páginas."*/
const libroNombre = "Caidos del mapa";
const biblioteca = {
    [libroNombre]: {
        autor: "Maria Elene Walsh",
        paginas: 235
    },
    info(){
        const libro = this[libroNombre];
        return `El libro ${libroNombre} es de ${libro.autor} y tiene ${libro.paginas} páginas`
    }
}

console.log(biblioteca.info());