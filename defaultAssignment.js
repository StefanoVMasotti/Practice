/* Ejercicio: Perfil de usuario con valores por defecto
Crea una función llamada crearPerfil que reciba un objeto con propiedades nombre, edad y ciudad.
Usa destructuring con valores por defecto para que:
nombre por defecto sea "Invitado".
edad por defecto sea 18.
ciudad por defecto sea "Ciudad desconocida".
La función debe devolver un string con la info del usuario, por ejemplo:
"Nombre: Ana, Edad: 25, Ciudad: Buenos Aires"
Si algún dato no se pasa, debe usar el valor por defecto. */
const objeto = {
    nombre: "Nahuel",
    edad: 33,
    //ciudad: "Arizona"
}

function crearPerfil({nombre = "invitado", edad = 18, ciudad = "Ciudad desconocida"}) {
    return `Nombre: ${nombre}, Edad: ${edad}, Ciudad: ${ciudad}`
}

console.log(crearPerfil(objeto));