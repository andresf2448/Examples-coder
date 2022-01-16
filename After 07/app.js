
//ALMACENAR DATOS 

localStorage.setItem("dia", "Martes")

// /*3- OBTENER DATOS
//Le paso la clave y despues lo muestro en consola
let dia = localStorage.getItem("dia")
console.log(dia)

// /*4- ACLARACION: SIEMPRE DEVUELVE STRING*/

localStorage.setItem("numero", 1234)
let numero = localStorage.getItem("numero")
console.log(numero)
console.log(typeof numero)
numero = parseInt(localStorage.getItem("numero"))
console.log(typeof numero)

/*5- Ejemplo Iniciar sesion  

Mostramos que obtenemos null si no esta guardado */
let inexistente = localStorage.getItem("inexistenete")
console.log(inexistente)

let usuario= localStorage.getItem("usuario")
if (usuario !== null){
    alert("Bienvenido de nuevo: "+ usuario)
}else{
    let usuario = prompt("ingresa tu nombre de usuario")
    localStorage.setItem("usuario",usuario)
    alert("Bienvenido por primera vez: "+usuario)
}

//  acceso tipo objeto
alert("Seguis en el sitio "+localStorage.usuario)

/* 6 -Mostramos como pasar la info de app1 a app2 */

let usuario = prompt("ingresa tu nombre de usuario")
localStorage.setItem("usuario",usuario)
usuario= localStorage.getItem("usuario")
console.log(usuario);

// 7- BORRAR 
// BORRAR UN SOLO ITEM 
localStorage.removeItem("numero")
// borrar todo
localStorage.clear()

//8 - Ejemplo OBJETOS - json 
const persona = {
    nombre: "Luis",
    puesto: "Alumno",
    camada:22860
}
localStorage.setItem("persona",JSON.stringify(persona))
/* OBTENEMOS LA INFO EN APP2*/


//9 - Ejemplo array de productos - json 
const productos = [
    {
        nombre: "Producto1",
        id: 1,
        precio: 1000,
    },
    {
        nombre: "Producto2",
        id: 2,
        precio: 3000,
    },
    {
        nombre: "Producto3",
        id: 3,
        precio: 3000,
    }
]
localStorage.setItem("productos", productos) 
console.log(productos)
console.log(productos.toString())

const productosJSON = JSON.stringify(productos)
console.log(productosJSON)

localStorage.setItem("PRODUCTOS", productosJSON)

// EN APP2 VAMOS A MOSTRAR LOS PRODUCTOS

// Ejemplo mostrar lista de la compra
const PRODUCTOS = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 1000
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 2000
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 3000
    },
]

let productosJSON = JSON.stringify(PRODUCTOS)
const carrito = []

carrito.push(PRODUCTOS[0])
carrito.push(PRODUCTOS[0])
carrito.push(PRODUCTOS[1])
carrito.push(PRODUCTOS[2])

localStorage.setItem("compra", JSON.stringify(carrito))

//EN APP2 VEMOS LA LISTA DE LA COMPRA



