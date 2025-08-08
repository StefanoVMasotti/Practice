/*Ejercicio 1: Función flecha básica
Reescribí esta función como una función flecha con retorno implícito:
function multiplicar(a, b) {
  return a * b;
}*/
const suma = (a,b) => a+b;
console.log(suma(4,5));

/*-----------------------------------------
Ejercicio 2: Uso de this en función normal vs función flecha
Observá qué imprime cada una y explicá por qué:*/
const objeto = {
  nombre: "Carla",
  saludarNormal: function() {
    console.log("Hola, soy " + this.nombre);
  },
  saludarFlecha: () => {
    console.log("Hola, soy " + this.nombre);
  }
};
console.log(objeto.saludarNormal());
console.log(objeto.saludarFlecha());
//------------------------------------------
/*Ejercicio 3: Arrow function con parámetros variables (rest)
Creá una función flecha que reciba cualquier cantidad de números y devuelva su suma.*/
const sumaTodo = (...numeros) => numeros.reduce((acc, total) => acc + total, 0);