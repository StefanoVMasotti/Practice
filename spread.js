/*Ejercicio 1: Combinar arreglos con spread
Tenés dos arreglos:
const frutas = ["manzana", "pera", "naranja"];
const verduras = ["lechuga", "tomate"];
Crea un arreglo llamado mercado que combine todos los elementos de frutas y verduras usando spread.
Luego crea un arreglo llamado mercadoAnidado que contenga frutas y verduras sin usar spread (o sea, un arreglo con dos arreglos adentro).*/
const frutas = ["manzana", "pera", "naranja"];
const verduras = ["lechuga", "tomate"];
const mercado = [...frutas, ...verduras];
const mercadoAnidado = [frutas, verduras]
//console.log(mercado);
//console.log(mercadoAnidado);

/*function sumar(...numeros) {
    let total = 0;
    for (const num of numeros) {
        total += num;
    }
    return total;
}*/
function sumar(...numeros) {
    let total = 0;
    for (let i = 0; i<numeros.length; i++) {
        total += numeros[i];
    }
    return total;
}


console.log(sumar(1, 2, 3));
console.log(sumar(10, 20, 30, 40));
