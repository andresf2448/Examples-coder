/* sessionStorage.setItem('nombre', 'carlos'); */

/* const multiplicar = (a,b) => a*b;
const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

let numero = parseInt(prompt("Ingrese un número"));

for(let i = 0; i <= 10; i++){
  if(localStorage.key(0) === 0){

  }
  guardarLocal(i, multiplicar(numero, i));
}



if (!localStorage.getItem('nombre')){
  prompt
  localStorage.setItem('nombre', 'Ian') 
}else{

} */

const producto1 = {nombre: "andres", apellido: "asdf"}

/* console.log(producto1); */

localStorage.setItem('producto1', JSON.stringify(producto1))

let regreso = localStorage.getItem('producto1')

console.log(JSON.parse(regreso));