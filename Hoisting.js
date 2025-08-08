/* Ejercicio 2 – Hoisting
Declara una función tradicional que retorne "Soy una función declarada".
Llama a esa función antes de su definición y comprueba que funciona.
Haz lo mismo pero con una function expression guardada en una const y verifica el error. */
console.log(tradicional());
console.log(expression());
function tradicional() {
    console.log("Soy una función declarada")
}
const expression = function () {
    console.log("Soy una función declarada")
}


