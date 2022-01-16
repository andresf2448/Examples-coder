
//Ejemplo iniciar sesion 
console.log(usuario);
let usuario = localStorage.getItem("usuario") 
console.log(usuario);
alert("Bienvenido a esta nueva pagina: " + usuario) 

//Ejemplo objeto persona
  
let persona = JSON.parse(localStorage.getItem("persona"))
alert("bienvenido de nuevo"+persona.nombre + " " + "tu puesto es "+persona.puesto)

// Ejemplo array de objetos 

let jsonFromLS = localStorage.getItem("PRODUCTOS") 
console.log(jsonFromLS);


let productos2 = JSON.parse(jsonFromLS)
console.log(productos2);

//mostramos cada producto del array

for (producto of productos2){
    console.log(producto);
}

//Ejemplo lista de la compra

const compra = JSON.parse(localStorage.getItem("compra"))
console.log("RESUMEN DE TU COMPRA")

for (const producto of compra){
    console.log("Producto: "+ producto.nombre)
    console.log("Precio: "+ producto.precio)
    console.log("----------------------")
}

let total = 0

compra.forEach((prod) => {
    total += prod.precio
})

console.log("Total: " + total)
