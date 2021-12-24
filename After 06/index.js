/* let nombres = ["Andres", "Ian", "camila"];
let apellidos = ["gomez", "murillo", "asdfr", "Rojas"];

console.log(nombres.length);
console.log(nombres.toString());

nombres.push("Sofia");

console.log(nombres.length);
console.log(nombres);

let join = nombres.join("-")

console.log(join);

for(let i = 0; i < nombres.length; i++){
  console.log(nombres[i] + " " + apellidos[i]);
  console.log(`${nombres[i]} ${apellidos[i]}`);
} */

/* let numeros1 = [9,8,7,6,5,4,3,2,1,0];

console.log(numeros1.slice(2, 7));

console.log("12341234-2".slice(2,5)); */

let rut = "12341234-2";
let numero = rut.slice(0,-2);

let verificador = rut.slice(-1);

console.log(numero);
console.log(verificador);


arreglo.push(rut)

arreglo[0];



console.log([
  {id: 1, nombre_empresa: "Aguas del valle"},
  {id: 2, nombre_empresa: "Aguas del valle"},
  {id: 3, nombre_empresa: "Aguas del valle"},
]);