// Arrays

/* const array = [1,"andres", true, false];
 */

/* const clientes = ["andres", "karina", "ema", "agostina", "sofi", "carlos", "camila"];

const cumple = [2, 5, 7, 3, 9, 11, 30];

for(let posicion = 0; posicion < cumple.length; posicion++){

  if(clientes[posicion] === "ema" || clientes[posicion] === "andres"){
    var excluidos = [clientes[posicion]];

    if(excluidos.length > 0){
      console.log("Joya hay un excluido y es " + clientes[posicion]);
    }
  }

  console.log(`La fecha de cumple de ${clientes[posicion]} es el ${cumple[posicion]} día`);
}
*/

//métodos

/* let arreglo = [1,2,"andres"]; */

/* console.log(typeof arreglo.toString());
console.log(typeof arreglo); */
/* arreglo.push("camila");

let unido = arreglo.join("");
console.log(unido); */
//console.log(typeof unido);

/* let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

let concatenados = arr1.concat(arr2); */

//console.log(concatenados);
//console.log(arr1.slice(1, 3));

/* let multi = arr1.map(x => x * 2);

console.log(multi); */

const productos = [{id: 1, producto: "Arroz"},
                  {id: 2, producto: "Fideo"},
                  {id:3, producto: "Pan"}];

/* for(const producto of productos){
  console.log(producto.id);
  console.log(producto.producto);
} */
/* var text = "";

for (let i = 0; i < productos.length; i++){
  text += `id ${productos[i].id} y nombre ${productos[i].producto}`;
}

console.log(text);

text = text + `id ${productos[i].id} y nombre ${productos[i].producto}`; */


const arreglo = [{id: 1, nombre: "pepito"}, 
                {id: 2, nombre: "juan"}, 
                {id: 3, nombre: "camilo"},
                {id: 4, nombre: "camila"}]

let filtro = arreglo.filter(x => x.id > 2);
console.log(filtro);