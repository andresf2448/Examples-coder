//Agregemos <h3> con jQuery ocultos con  style="display: none;"
/* $("body").prepend('<h3  style="display: none" >¡Hola Coder2!</h3>');
$("body").prepend('<h3  style="display: none" >¡compra exitosa!</h3>'); */
//Mostramos con show() todos los <h3>
/* $("h3").show(); */
/* $("body").prepend('<h3>¡Hola Coder1!</h3>');
$("body").prepend('<h3>¡Hola Coder2!</h3>');
//Ocultamos con hide() todos los <h3>
$("h3").hide(); */

/* $("body").prepend('<h3  style="display: none" >¡Hola Coder1!</h3>');
$("body").prepend('<h3  style="display: none" >¡Hola Coder2!</h3>');
//Mostramos con fadeIn() todos /* los <h3>
$("h3").fadeIn(5000); */

/* $("body").prepend('<h3>¡Hola Coder1!</h3>');
$("body").prepend('<h3>¡Hola Coder2!</h3>');
//Ocultamos con fadeOut() todos los <h3>
$("h3").fadeOut(3000); */

/* $("body").prepend('<h3>¡Hola Coder1!</h3>');
//Ocultamos con fadeOut() todos los <h3>
$("h3").fadeOut(3000, function(){
    //Cuando termina de ocultarse el elemento lo mostramos nuevamente
    $("h3").fadeIn(3000, function(){
      $("h3").fadeOut(3000)
    });
}); */
/* $("body").prepend('<h3>¡Hola Coder1!</h3>');
setInterval(function () {
  $("h3").fadeOut(3000, function(){
    //Cuando termina de ocultarse el elemento lo mostramos nuevamente
    $("h3").fadeIn(3000, function(){
      $("h3").fadeOut(3000)
    });
});
  }, 6001);
  console.log("hola como vasmosdf");
 */

/*   $("body").prepend('<button id="btn1">Mostrar</button>');
$("body").prepend(`<div id="div1" style="display: none">
                        <h3>¡Hola Coder!</h3>
                        <h4>Sorpresa 2</h4>
                    </div>`); */
//Usamos slideDown sobre div1 en respuesta al click del boton btn1
/* $("#btn1").click(() => { 
    $("#div1").slideDown("slow");
}); */

/* $("body").append('<button id="btn1">Mostrar</button>');
$("body").append(`<div id="div1" style="height: 120px">
                        <h3>¡Hola Coder!</h3>
                        <h4>Sorpresa 2</h4>
                    </div>`);
//Usamos slideUp sobre div1 en respuesta al click del boton btn1
$("#btn1").click(() => { 
    $("#div1").slideUp("slow");
}); */

/* $("body").prepend('<button id="btn1">Mostrar</button>');
$("body").prepend(`<div id="div1" style="height: 120px">
                        <h3>¡Hola Coder!</h3>
                        <h4>Sorpresa</h4>
                    </div>`);
//Usamos toggle sobre div1 en respuesta al click del botòn btn1
$("#btn1").click(() => { 
    $("#div1").toggle("fast");
}); */

/* $("body").prepend('<p class="titulo">Code House</p>');
//Animamos sus propiedades CSS con animate
$(".titulo").animate({  opacity:'0.5',
                        height:'150px',
                        width:'150px'   }, //1er parámetro propiedades
                        "slow",            //2do parámetro duración 
                        function(){        //3er parámetro callback
                            console.log("final de animación");
                        }); */

/* $("body").prepend(`</div>
                        <a>Ir a contacto</a>
                        <p style="height: 800px"></p>
                        <section id="seccionContacto">
                           <h4>¡Somos Coders!</h4>
                        </section>
                   </div>`);
// Asociamos la animación al click en un elemento <a>
$("a").click(function () {
  //Animamos sus propiedades CSS con animate
  $("html").animate(
    {
      scrollTop: $("#seccionContacto").offset().top,
    },
    2000
  );
}); */

/* $("body").prepend('<p id="p1">Coder House</p>');
//Declaración de métodos encadenados
$("#p1").css("color", "red")
        .slideUp(3000)
        .slideDown(2000); */
/* $("body").prepend('<p id="p1">Coder House</p>');
//Declaración de métodos encadenados
$("#p1").css("color", "red").slideUp(2000).delay(2000).slideDown(2000); */

// Array de objetos para agregar información al DOM.
/* const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
{  id: 2,  nombre: "Fideo", precio: 70 },
{  id: 3,  nombre: "Pan"  , precio: 50},
{  id: 4,  nombre: "Flan" , precio: 100}]; */
// Asociamos el evento click en ready luego del DOM Generado
/* $(document).ready(function () {
    $(".btnComprar").click(function (e) { 
        //Obtenemos hijos del padre <div> desde el target
        let hijos = $(e.target).parent().children();
        //Primer input, valor de ID oculto
        console.log(hijos[0].value);
        //Animaciòn de respuesta de compra
        $(e.target).parent().slideUp("slow");
    });
});
// Recorremos el array con for..of
for (const producto of productos) {
    //Por cada producto ademas de los datos agregamos un botón 
    $("#app").append(`<div>
                        <input value="${producto.id}" type="hidden">
                        <h4>  Producto: ${producto.nombre}</h4>
                        <b> $ ${producto.precio}</b>
                        <button class="btnComprar">Comprar</button>
                    </div>`);
} */

/* //Declaramos la url que vamos a usar para el GET
const URLGET = "https://jsonplaceholder.typicode.com/posts"
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">GET</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
    $.get(URLGET, function (respuesta, estado) {
          if(estado === "success"){
            console.log(respuesta);
            let misDatos = respuesta;
            for (const dato of misDatos) {
              $("body").prepend(`<div>
                                   <h1>${dato.id}</h1>
                                   <h3>${dato.title}</h3>
                                   <p> ${dato.body}</p>
                                  </div>`);
            }  
          }
    });
}); */

/* const URLGET = "https://jsonplaceholder.typicode.com/posts"
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">GET</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
    fetch(URLGET)
    .then(respuesta => respuesta.json())
    .then(respuesta => {
      console.log("llego");
      console.log("voy por el a la puerta");
      
      
      
    })
    .catch(function(err){
      console.log(err);
    })

    console.log("saludar a mi amiga");
    console.log("realizo otras operaciones");
  }); */
/* const URLGET = "https://jsonplaceholder.typicode.com/posts";
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">GET</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(async () => {
  try {
    let respuestaInicial = await axios.get(URLGET);
    let respuestaLista = respuestaInicial.data;
    console.log(respuestaLista);
    console.log("aca");
  } catch (err) {
    console.log(err);
  }
}); */

//Declaramos la url que vamos a usar para el GET
/* const URLGET   = "https://jsonplaceholder.typicode.com/posts"
//Declaramos la información a enviar
const infoPost =  { nombre: "Ana", profesion: "Programadora" }
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">POST</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
    $.post(URLGET, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
            $("body").prepend(`<div>
Guardado:${respuesta.nombre}
</div>`);
        }  
    });
}); */

/* const URLJSON = "./data.json"
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">JSON</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(async() => { 
  respuesta = await axios(URLJSON);
  console.log(respuesta.data);
});
 */

/* const URLJSON = "./data.json"
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">JSON</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $("body").prepend(`<div>
                                <h3>${dato.id}</h3>
                                <p> ${dato.nombre}</p>
                            </div>`)
      }  
    }
    });
}); */
