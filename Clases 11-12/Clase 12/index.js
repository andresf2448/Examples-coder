/* $('body').prepend('<button id="btnjQuery">CLICK</button>');
//Asociamos el evento click al evento doble click al botón creado
$('#btnjQuery').on('dblclick', () => {
    console.log("Respuesta al doble click");
});

 */

// Array de objetos para agregar información al DOM.
/* $(document).ready(function(){
  const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
{  id: 2,  nombre: "Fideo", precio: 70 },
{  id: 3,  nombre: "Pan"  , precio: 50},
{  id: 4,  nombre: "Flan" , precio: 100},
{  id: 4,  nombre: "Flan" , precio: 100}];
// Recorremos el array con for..of
for (const producto of productos) {
    //Por cada producto además de los datos agregamos un botón 
    $("#app").append(`<div>
                        <h4>  Producto: ${producto.nombre}</h4>
                        <b> $ ${producto.precio}</b>
                        <button id="btn${producto.id}">Comprar</button>
                        </div>`);
    //Asociamos el evento a botón recién creado.
    $(`#btn${producto.id}`).on('click', function () {
        console.log(`Compreaste ${producto.nombre}`);
    });
}
})
 */

//Agregamos dos botones con jQuery
/* $("body").prepend('<button id="btn1">BUTTON</button>');
$("body").prepend('<button id="btn2">BUTTON</button>');
//Asociamos el evento click para btn1
$("#btn1").click(function () { 
    console.log(this);
});
//Evento click para btn2 con Arrow function y parámetro e
$("#btn2").click((e) => { 
    console.log(e.target);
}); */

//Agregamos un botón y un input
/* $("body").prepend('<button id="btn1">BUTTON</button>');
$("body").prepend('<input  id="ipt1" type="text">');
//Asociamos el evento change al ipt1
$("#ipt1").change((e) => { 
    alert("El valor es " + e.target.value);
});
//Asociamos el evento click para btn1 y usamos trigger
$("#btn1").click(() => { 
    //Usamos trigger para disparar el evento change de ipt1 
    $("#ipt1").trigger("change");
}); */

// Array de objetos para agregar información al DOM.
const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
{  id: 2,  nombre: "Fideo", precio: 70 },
{  id: 3,  nombre: "Pan"  , precio: 50},
{  id: 4,  nombre: "Flan" , precio: 100}];
// Asociamos el evento click en ready luego del DOM Generado
$(document).ready(function () {
    $(".btnComprar").click(function (e) { 
        //Obtenemos hijos del padre <div> desde el target
        console.log("target", e.target);
        console.log("parent", $(e.target).parent());
        console.log("hijos", $(e.target).parent().children());
        let hijos = $(e.target).parent().children();
        //Primer input, valor de ID oculto
        console.log(hijos[0].value);
    });
});
// Recorremos el array con for..of
for (const producto of productos) {
    //Por cada producto además de los datos agregamos un botón 
    $("#app").append(`<div>
                        <input value="${producto.id}" type="hidden">
                        <h4>  Producto: ${producto.nombre}</h4>
                        <b> $ ${producto.precio}</b>
                        <button class="btnComprar">Comprar</button>
                    </div>`);
}


