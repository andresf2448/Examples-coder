/* let div = document.getElementById('app')
let parrafo = document.getElementById('parrafo1')

console.log(div.innerHTML);
console.log(parrafo.innerHTML);
console.log(parrafo.innerText); */
/* 
let paises = document.getElementsByClassName('paises');

console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML); */

/* let parrafo = document.createElement('p');
parrafo.innerHTML = "<h1>Hola a todos final</h1>";

document.body.appendChild(parrafo)

console.log(parrafo); */

/* let paises = document.getElementsByClassName('paises');

console.log(paises);

paises[0].parentNode.removeChild(paises[0]) */

/* let nombre = document.getElementById('nombre');
let edad = document.getElementById('edad');

edad.value = 10
nombre.value = "andres" */

/* let padre = document.getElementById('personas');

let personas = ["Carlos", "Agostina", "Ema", "sofi", "andres"];

for(const persona of personas){
  let li = document.createElement('li');

  li.innerHTML = persona;
  padre.appendChild(li);
} */

const productos = [
  {id: 1, nombre: "Arroz", precio: 123, url: "https://images.unsplash.com/photo-1641638455694-0a5d26f03e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
  {id: 2, nombre: "Fideo", precio: 321, url: "https://images.unsplash.com/photo-1641638455694-0a5d26f03e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
  {id: 3, nombre: "Pan", precio: 3, url: "https://images.unsplash.com/photo-1641638455694-0a5d26f03e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
]

for(const producto of productos){
  let contenedor = document.createElement('div');

  contenedor.innerHTML = `<h3>ID: ${producto.id}</h3>
     <p>PRODUCTO: ${producto.nombre}</p>
     <b>$ ${producto.precio}</b>
     <img src=${producto.url}>
    `

  document.body.appendChild(contenedor);
}

