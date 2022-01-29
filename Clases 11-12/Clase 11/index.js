/* let element1 = $('li.prueba');
console.log(element1);

let element2 = $('div, span');
console.log(element2);

let element3 = $('li.prueba');
console.log(element3);


let element4 = $('p:first');
console.log(element4);

let element5 = $('p:last');
console.log(element5); */

/* let element6 = $('li:nth-child(3)');
console.log(element6); */
/* let element6 = $('div:nth-child(2n)');
console.log(element6); */

/* let element7 = $(':text');
console.log(element7); */

/* $('#div1').append("<h1>Hola estoy al final</h1>")
$('#div1').prepend("<h1>Hola estoy al inicio</h1>") */

let producto   = { id: 1,  nombre: "Arroz", precio: 125 };
//Es posible usar plantillas de texto en el parámetro.
/* $("#app").append(`<div><h3> ID: ${producto.id}</h3>
                  <p>  Producto: ${producto.nombre}</p>
                  <b> $ ${producto.precio}</b></div>`); */

                  const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
{  id: 2,  nombre: "Fideo", precio: 70 },
{  id: 3,  nombre: "Pan"  , precio: 50},
{  id: 4,  nombre: "Flan" , precio: 100}];

for (const producto of productos) {
    $("#app").append(`<div><h3> ID: ${producto.id}</h3>
    <p>  Producto: ${producto.nombre}</p>
    <b> $ ${producto.precio}</b></div>`);
}
