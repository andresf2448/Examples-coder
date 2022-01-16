/* let boton = document.getElementById('btnPrincipal'); */

/* function respuesta(){
  console.log("Hola me han dado click!");
}

boton.addEventListener('click', respuesta) */

/* boton.onclick = () => {console.log("Hola me han dado click!");} */

/* boton.addEventListener('mousedown', () => {console.log("se ejecuta el mousedown");})

boton.addEventListener('mouseup', () => {console.log("se ejecuta el mouseup");})

boton.addEventListener('click', () => {console.log("se ejecuta el click");}) */

/* boton.addEventListener('mouseover', () => {console.log("se ejecuta el mouseover");}) */

/* boton.addEventListener('mouseout', () => {console.log("se ejecuta el mouseout");}) */

/* boton.addEventListener('mousemove', () => {console.log("se ejecuta el mousemove");}) */

/* let input1 = document.getElementById('nombre');
let input2 = document.getElementById('edad'); */

/* input1.addEventListener('keydown', () => {console.log("se ejecuta el keydown")}) */
/* input1.addEventListener('change', () => {console.log("se ejecuta el keyup")}) */

/* let formulario = document.getElementById('formulario')
formulario.addEventListener('submit', envio);

function envio(e){
  e.preventDefault();

  console.log(e.target.children[0].value);

  console.log("formulario");
} */

function Persona(nombre, edad){
  this.nombre = nombre;
  this.edad = edad;
}

Persona.prototype.hablar = function(){"Hello!"}

const persona1 = new Persona("andres", 25);
const persona2 = new Persona("andres", 25);
const persona3 = new Persona("andres", 25);
const persona4 = new Persona("andres", 25);
const persona5 = new Persona("andres", 25);
const persona6 = new Persona("andres", 25);
